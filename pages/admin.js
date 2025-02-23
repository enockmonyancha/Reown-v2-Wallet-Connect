'use client'

import { useDisconnect, useAppKit, useAppKitNetwork, useWalletInfo } from '@reown/appkit/react'
import { networks } from '@/config'
import WalletBalance from '@/components/WalletBalance'

export default function Admin() {
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
     {/* Header / Navbar */}
     <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Smart Connect Logo" />
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="/admin" className="border-b-2 border-primary text-primary font-medium px-1 pb-1">Admin</a>
            </nav>
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => open()}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              >
                Connect
              </button>
              {/* <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">Sign In</a> */}
              {/* Dark Mode Toggle */}
              <button
                onClick={() => document.documentElement.classList.toggle("dark")}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                <svg
                  id="darkModeIcon"
                  className="h-6 w-6 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l-1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="dark:bg-gray-900">
  <div className="max-w-8xl mx-auto py-10 px-4 sm:py-5 sm:px-6 lg:px-8">
    <div className="text-center flex flex-col items-center">
      <div className="relative w-[90%] h-[400px] max-w-9xl">
        <img 
          className="w-full h-full object-cover rounded-2xl shadow-lg" 
          src="/hero.jpg" 
          alt="Smart Connect" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50 p-5 rounded-2xl">
          <img className="h-12 mb-3 w-auto" src="/brand-logo.svg" alt="Smart Connect Logo" />
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-3">
            Connected Wallets
          </h3>

          <input label="Etherium Wallet" type='text' value="0x98934289136e2352347401C1c6c9d652F7f0a08E" className="text-center w-full bg-gray-800 text-white p-2 rounded-md mb-3" readOnly />
          <input label="Solana Wallet" type='text' value="8aMQkXNqrV5GfLua9NfF5LuPhBHx6kZHGuenBPfAEGJV" className="text-center w-full bg-gray-800 text-white p-2 rounded-md mb-3" readOnly />

         
        </div>
      </div>
    </div>
  </div>
</section>



    

      {/* Footer */}
      <footer id="contact" className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="/" className="text-base text-gray-400 hover:text-white">Home</a>
            </div>
            
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.59 1.324-1.324V1.325C24 .59 23.41 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.918 4.918 0 003.195 9.723a4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.417 9.867 9.867 0 01-6.102 2.105c-.395 0-.787-.023-1.175-.068a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.004-.423-.014-.634A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.909-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.547 1.378.203 2.397.1 2.65.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.688-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2025 Enock Monyancha. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

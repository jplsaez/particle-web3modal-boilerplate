import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConnectButton from './connectButton';
//import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";

function HomePage() {
  //const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  return (
    <main>
      <ConnectButton />
      {isConnected && (
        <div>
          <div>Address: {address}</div>
          <div>ChainId: {chainId}</div>
        </div>
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <HomePage />
    </App>
  </React.StrictMode>,
);
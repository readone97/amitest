import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter , SolfareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';


function MyApp({ Component, pageProps }) {
    const netwrok = WalletAdapterNetwork.Devnet;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const endpoint = clusterApiUrl(netwrok);

    const wallets = [
        new PhantomWalletAdapter(),
        new SolfareWalletAdapter(),
    ];

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <Component {...pageProps} />
        </WalletProvider>
    );
}

export default MyApp;
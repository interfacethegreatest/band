import "@/styles/globals.css";
import "../styles/style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
   Component,
   pageProps: {session,...pageProps},
   }: AppProps) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
    )
}

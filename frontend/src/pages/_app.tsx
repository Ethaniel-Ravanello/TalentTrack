import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";

import SideNav from "@component/SideNav";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} flex`}>
      <Head>
        <title>TalentTracker</title>
      </Head>
      <SideNav />
      <Component {...pageProps} />
    </main>
  );
}

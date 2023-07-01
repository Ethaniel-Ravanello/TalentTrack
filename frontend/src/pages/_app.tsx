import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import SideNav from "@component/components/SideNav";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} flex`}>
      <SideNav />
      <Component {...pageProps} />
    </main>
  );
}

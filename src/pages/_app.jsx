import Layout from "@/components/Layout";
import "@/styles/globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main className={`${poppins.className}`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";

import Head from "next/head";
import Header from "../components/Header";

import "../styles/globals.css";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Head>
        <title>Cache Fetch with React Query - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Hydrate state={pageProps.dehydratedState}>
      </Hydrate> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

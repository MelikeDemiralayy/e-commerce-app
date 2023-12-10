import "@/styles/globals.css";
import Layout from "@/Components/Navbar/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Head from "next/head";
function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default App;

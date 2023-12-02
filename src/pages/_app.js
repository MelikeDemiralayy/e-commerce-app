import '@/styles/globals.css'
import Layout from '@/Components/Navbar/Layout'
import { Provider } from "react-redux";
import Store from "./Store/Store";

export default function App({ Component, pageProps }) {
  <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

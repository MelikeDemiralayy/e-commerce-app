import "@/styles/globals.css";
import Layout from "@/Components/Navbar/Layout";
import { Provider } from "react-redux";
import { store } from "./Store/Store"; // store.js olarak varsayıyorum, dosya adınıza göre düzenleyin

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;

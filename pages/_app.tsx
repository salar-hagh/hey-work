import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { createContext, useState } from "react";
import Footer from "../components/coreComponents/footer/Footer";
import Layout from "../components/coreComponents/layout/Layout";

const AppContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [login, setLogin] = useState();

  return (
    <AppContext.Provider value={{}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

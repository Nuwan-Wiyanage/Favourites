import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

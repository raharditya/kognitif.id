import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/nav.scss";
import "../styles/footer.scss";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/nav.scss";
import "../styles/footer.scss";
import "../styles/pesan.scss";
import "../styles/about.scss";
import "../styles/portfolio.scss";
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

import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/nav.scss";
import "../styles/footer.scss";
import "../styles/pesan.scss";
import "../styles/about.scss";
import "../styles/portfolio.scss";
import "../styles/page.scss";
import "../styles/contactUs.scss";
import Footer from "../components/Footer";

import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppWidget
        phoneNumber="628977354733"
        textReplyTime="Akan dibalas dengan segera"
        message={`Halo 😀\n\nAda yang bisa kami bantu?`}
        companyName="Kognitif Web"
        sendButton="Kirim"
      />
    </>
  );
}

export default MyApp;

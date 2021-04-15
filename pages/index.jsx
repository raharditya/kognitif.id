import Head from "next/head";
import Collapsible from "react-collapsible";
import FaqContent from "../components/FaqContent";
import FaqTitle from "../components/FaqTitle";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Kognitif - Jasa Pembuatan Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <section>
        <SectionHeader
          sectionTitle="Kenapa kamu butuh website?"
          category="MARKETING"
          isCenter={true}
        />
        <div className="why-website-flex">
          <div className="why-website-slideshow" />
          <div className="why-website-detail">
            <h4 className="slideshow-title">
              Menambah Marketing dan Jangkauan Pasar
            </h4>
            <p className="slideshow-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      <section className="home-solution">
        <h2>Kognitif siap menjadi solusi websitemu!</h2>
      </section>

      <section style={{ height: "400px" }}></section>

      <section className="home-faq">
        <div className="faq-header">
          <SectionHeader
            sectionTitle="Frequently Asked Questions"
            category="faq"
            isCenter={false}
          />
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id itaque
            sapiente, pariatur debitis dicta laboriosam!
          </small>
        </div>
        <div className="faq-content">
          <Collapsible
            trigger={<FaqTitle title="Apa itu Kognitif?" />}
            triggerStyle={{ cursor: "pointer" }}
            transitionTime={200}
            easing="ease-in-out"
          >
            <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </Collapsible>

          <Collapsible
            trigger={<FaqTitle title="Apa itu Kognitif?" />}
            triggerStyle={{ cursor: "pointer" }}
            transitionTime={200}
            easing="ease-in-out"
          >
            <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </Collapsible>

          <Collapsible
            trigger={<FaqTitle title="Apa itu Kognitif?" />}
            triggerStyle={{ cursor: "pointer" }}
            transitionTime={200}
            easing="ease-in-out"
          >
            <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </Collapsible>
        </div>
      </section>
    </div>
  );
}

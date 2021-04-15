import Head from "next/head";
import Collapsible from "react-collapsible";
import BottomCta from "../components/BottomCta";
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

      <header>
        <div>
          <div className="head-body-1">
            <h2 className="body sub-title">KOGNITIF WEB DEVELOPMENT</h2>
            <h1 className="heading-serif main-title">Bawa Bisnismu ke <br/> Era Modern</h1>
            <p>
            We’ve got a vast code base of modules and ready-made solutions <br/>
            that speed up the development process and cut your expenses.
            </p>
            <button className="heading-bold btn-secondary"> View Portofolio </button>
            <button className=" heading-bold btn-primary"> Hire Us! </button>
          </div>
          <div className="head-body-2"></div>
        </div>
      </header>

      <section>
        <SectionHeader
          sectionTitle="Kenapa Kognitif?"
          category="Unique Selling"
          isCenter={true}
        /> 
        <div>
          <div>

          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section>
        {/* BAGIAN KENAPA BUTUH WEBSITE */}

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
        {/* BAGIAN KAMI SIAP MENJADI SOLUSI */}

        <h2>Kognitif siap menjadi solusi websitemu!</h2>
      </section>

      <section style={{ height: "400px" }}></section>

      <section className="home-faq">
        {/* BAGIAN FAQ */}

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

      <section>
        <BottomCta />
      </section>
    </div>
  );
}

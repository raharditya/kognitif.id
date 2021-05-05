import Head from "next/head";
import Link from "next/link";
import Collapsible from "react-collapsible";
import BottomCta from "../components/BottomCta";
import FaqContent from "../components/FaqContent";
import FaqTitle from "../components/FaqTitle";
import SectionHeader from "../components/SectionHeader";
import PortfolioCarousel from "../components/PortfolioCarousel";

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Kognitif - Jasa Pembuatan Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="home-header">
        {/* BAGIAN HEADER */}
        <div className="inner-header container section-container">
          <div className="head-body-1">
            <h2 className="body sub-title">KOGNITIF WEB DEVELOPMENT</h2>
            <h1 className="heading-serif main-title">
              Bawa Bisnismu ke <br /> Era Modern
            </h1>
            <p>
              We’ve got a vast code base of modules and ready-made solutions
              that speed up the development process and cut your expenses.
            </p>
            <Link href="/portfolio">
              <a className="heading-bold btn-secondary">Lihat Portofolio</a>
            </Link>
            <Link href="/pesan">
              <a className="heading-bold btn-primary">Hire Us!</a>
            </Link>
          </div>

          <div className="head-body-2"></div>
        </div>
      </header>

      <div className="home-content-container">
        <section className="container">
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </section>

        <section className="home-solution container">
          {/* BAGIAN KAMI SIAP MENJADI SOLUSI */}

          <h2>Kognitif siap menjadi solusi websitemu!</h2>
        </section>

        <section className="portfolio-section container">
          <SectionHeader
            sectionTitle="Our Latest Works"
            category="Our Portfolio"
            isCenter={true}
          />
          <PortfolioCarousel />
        </section>

        <section className="why-us-section container">
          <SectionHeader
            sectionTitle="Kenapa Kognitif?"
            category="Unique Selling"
            isCenter={true}
          />

          <div className="why-us-inner">
            <div className="why-us-1"></div>

            <div className="why-us-2">
              <div className="why-us-item">
                <div className="cog-pic"></div>
                <h3>Modern</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>
              </div>

              <div className="why-us-item">
                <div className="cog-pic"></div>
                <h3>Modern</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
              </div>

              <div className="why-us-item">
                <div className="cog-pic"></div>
                <h3>Modern</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
              </div>

              <div className="why-us-item">
                <div className="cog-pic"></div>
                <h3>Modern</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-faq container">
          {/* BAGIAN FAQ */}

          <div className="faq-header">
            <SectionHeader
              sectionTitle="Frequently Asked Questions"
              category="faq"
              isCenter={false}
            />
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              itaque sapiente, pariatur debitis dicta laboriosam!
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

        <section className="container">
          <BottomCta />
        </section>
      </div>
    </div>
  );
}

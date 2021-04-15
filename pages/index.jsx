import Head from "next/head";

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Kognitif - Jasa Pembuatan Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <section>
        <h3>Kenapa kamu butuh website?</h3>
        <div className="why-website-flex">
          <div className="why-website-slideshow" />
          <div className="why-website-detail">
            <h4>Menambah Marketing dan Jangkauan Pasar</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

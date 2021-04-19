import Head from "next/head";
import Link from "next/link";
import Collapsible from "react-collapsible";
import FaqContent from "../components/FaqContent";
import FaqTitle from "../components/FaqTitle";
import BottomCta from "../components/BottomCta";
import PackageItem from "../components/PackageItem";

function pesan(props) {
  return (
    <div className="page-container">
      <Head>
        <title>Paket Website - Kognitif</title>
      </Head>

      <header className="pkg-header">
        <div className="inner-pkg-header container">
          <h2 className="heading-serif">Paket Website</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            commodi fugit necessitatibus deleniti!
          </p>
        </div>
      </header>

      <div className="pkg-content-container container">
        <section className="pkg-flex">
          <PackageItem />
          <PackageItem />
          <PackageItem />
        </section>

        <section className="pkg-detail">
          <div className="pkg-detail-head">
            <div className="pkg-detail-title detail-item">
              <h3 className="heading-serif">Detail Paket</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Jumlah Halaman</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="custom-pkg">
          <div className="custom-pkg-header">
            <h2 className="heading-serif">Paket Custom</h2>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem dolorem suscipit?
            </small>
          </div>

          <div className="custom-pkg-grid">
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

        <BottomCta />
      </div>
    </div>
  );
}

export default pesan;

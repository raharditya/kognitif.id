import React from "react";
import Head from "next/head";
import TeamContent from "../components/TeamContent";

function about(props) {
    return(
        <div className="page-container">
            <Head>
                <title>Tentang Kami - Kognitif</title>
            </Head>

            <header className="abt-header">
                <div className="inner-header container section-container">
                    <div className="head-abt-1">
                        <h2 className="body sub-title"> Beberapa Kata Tentang Kami </h2>
                        <h1 className="heading-serif main-title"> Kenal kami lebih <br /> dalam </h1>
                        <p>
                        Kognitif merupakan Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                        <div className="abt-container">
                            <div className="abt-item abt-item-1">
                                <img src="/svg/check.svg" alt=""/>
                                <p> 200+ <br/> Proyek telah selesai </p>
                            </div>
                            <div className="abt-item">
                                <img src="/svg/cross.svg" alt=""/>
                                <p> 100+ <br/> Total Pelanggan </p>
                            </div>
                        </div>
                    </div>
                    <div className="head-abt-2"></div>
                </div>
            </header>

            <div className="abt-content-container">
                <section>
                    <h2 className="heading-serif center">Meet our team</h2>
                    <TeamContent />
                </section>
            </div>
        </div>
    );
}

export default about;

import React from "react";

function Singlenews({ selectNews }) {



    const clickNav = (rota) => {
        window.open(`${rota}`, "_blank");
    };

    return (
        <section className="singlenews">
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/Sobre">Sobre Nós</a>
                    <a href="/Calendário">Calendário</a>
                    <a href="/Notícias">Notícias</a>
                    <p></p>
                </nav>
            </header>

            <div className="singlenews-container">
                <div className="singlenews-content">
                    <p>NOTÍCIA</p>
                    <p>{selectNews.title}</p>
                    <p><i className="bi bi-clock"></i> {selectNews.date}</p>
                    <div className="head-img">
                        <img src={selectNews.img} alt="" />
                    </div>
                    <p>{selectNews.subtitle}</p>
                    {selectNews.texto.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Singlenews;
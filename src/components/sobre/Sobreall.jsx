import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import Slide from "./Slide";

function Sobreall({ dataJson, onlypage }) {
    if (!dataJson || !dataJson.texto) {
        return null;
    }

    return (
        <section className="sobreall">
            <div className="onlypage">
                <header>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/Sobre">Sobre Nós</a>
                        <a href="/Calendário">Calendário</a>
                        <a href="/Notícias">Notícias</a>
                    </nav>
                </header>
                <img src="/imgs/sobre-img2.jpg" alt="" />
            </div>
            <div className="sobre-container">
                <Title title={"PROJETO 'CANTABILE'"} onlypage={onlypage} />

                <div className="sobre-content">
                    <Slide />
                    <div className="text">
                        <p>{dataJson.title}</p>
                        {dataJson.texto.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobreall;
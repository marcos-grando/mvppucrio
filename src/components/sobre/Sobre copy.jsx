import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import Slide from "./Slide";

function Sobre({ dataJson, onlypage }) {
    if (!dataJson || !dataJson.texto) {
        return null;
    }

    return (
        <section className="sobre" style={onlypage === 'true' ? { backgroundColor: 'var(--cor6)' } : undefined} >
            {
                onlypage === 'true' ?
                    (
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
                    )
                    :
                    ''
            }
            <div className="sobre-container">
                <Title title={"PROJETO 'CANTABILE'"} onlypage={onlypage} />
                <div className="sobre-content">
                    <div className={onlypage === 'true' ? 'only-sobretext' : 'sobre-text'}>
                        <div className="text">
                            <p>{dataJson.title}</p>
                            <p>{dataJson?.texto[0]}</p>
                            <p>{dataJson?.texto[1]}</p>
                        </div>
                        {onlypage === 'true' ? '' : (<button onClick={() => window.location.href = "/Sobre"}>VER MAIS SOBRE</button>)}
                    </div>
                    <Slide />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
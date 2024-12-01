import React from "react";
import { useNavigate } from "react-router-dom";
import Carouselnews from "./Carouselnews";
import Allnews from "./Allnews";
import Title from "../Title";

function Newsnow({ dataJson, onClickNews, onlypage }) {
    const nav = useNavigate();
    const clickNews = (selectNews) => {
        onClickNews(selectNews);
        nav("/Notícias/Notícia")
    }

    return (
        <section className="newsnow" style={onlypage === 'true' ? { backgroundColor: 'var(--cor66)' } : undefined}>
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
                            <img src="/imgs/news.jpg" alt="" />
                        </div>
                    ) 
                    : 
                    ''
            }
            <div className="newsnow-container">
                <Title title="NOTÍCIAS" onlypage={onlypage} />
                <Carouselnews dataJson={dataJson} onClickNews={clickNews} />
                <Allnews dataJson={dataJson} onClickNews={clickNews} />
            </div>
        </section>
    )
}

export default Newsnow;
import React from "react";
import Title from "../Title";
import Slide from "./Slide";

function Sobre({ dataJson }) {
    if (!dataJson || !dataJson.texto) {
        return null;
    }

    return (
        <section className="sobre">
            <div className="sobre-container">
                <Title title={"PROJETO 'CANTABILE'"} />
                <div className="sobre-content">
                    <div className="sobre-text">
                        <div className="text">
                            <p>{dataJson.title}</p>
                            <p>{dataJson?.texto[0]}</p>
                            <p>{dataJson?.texto[1]}</p>
                        </div>
                        <button onClick={() => window.location.href = "/Sobre"}>VER MAIS SOBRE</button>
                    </div>
                    <Slide />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
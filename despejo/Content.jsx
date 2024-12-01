import React from "react";

function Content({ evento, artista, topic, desc, type, imgClass }) {

    if (type === 'list') {
        <div className={`content ${imgClass}`}>
            <div className="evento">{evento}</div>
            <div className="artista">{artista}</div>
            <div className="topic">{topic}</div>
            <div className="desc">{desc}</div>
            <div className="buttons">
                <button>Veja mais</button>
                <button>Inscreva-se</button>
            </div>
        </div>
    } else {
        <div className={`content ${imgClass}`}>
            <div className="artista">{artista}</div>
            <div className="topic">{topic}</div>
        </div>
    }
}

export default Content;
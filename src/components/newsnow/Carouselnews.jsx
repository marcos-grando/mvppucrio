import React from "react";
import News from "./News";
import Arrows from "../Arrows";

function Carouselnews({ dataJson, onClickNews }) {
    const showSlider = (type) => {
        const slideDom = document.querySelector('.news-slide .slide');

        if (type === 'next') {
            const testDom = document.querySelectorAll('.news-slide .slide .news');
            setTimeout(() => { slideDom.appendChild(testDom[0]); }, 550);
            slideDom.classList.add('next');

        } else {
            const testDom = document.querySelectorAll('.news-slide .slide .news');
            setTimeout(() => { slideDom.prepend(testDom[testDom.length - 1]); }, 550);
            slideDom.classList.add('prev');
        }

        setTimeout(() => {
            slideDom.classList.remove('next');
            slideDom.classList.remove('prev');
        }, 550);
    };

    return (
        <div className="news-slide">
            <div className="last-news">
                <p>Últimas Notícias</p>
            </div>
            <div className="slide-container">
                <div className="slide">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <News key={index} onClickNews={() => onClickNews(dataJson[index])} img={dataJson[index]?.img} title={dataJson[index]?.title} date='false' />
                    ))}
                </div>
            </div>
            <Arrows onNext={() => showSlider('next')} onPrev={() => showSlider('prev')} />
        </div>
    )
}

export default Carouselnews;
import React from "react";
import Arrows from "../Arrows";
import Item from "../Item";

function Slide({ onNext, }) {
    const showSlider = (type) => {
        const sobreDom = document.querySelector('.sobre-slide .slide ');

        if (type === 'next') {
            const testDom = document.querySelectorAll('.sobre-slide .slide .item');
            sobreDom.appendChild(testDom[0]);
            sobreDom.classList.add('next');
        } else {
            const testDom = document.querySelectorAll('.sobre-slide .slide .item');
            sobreDom.prepend(testDom[testDom.length - 1]);
            sobreDom.classList.add('prev');
        }

        setTimeout(() => {
            sobreDom.classList.remove('next');
            sobreDom.classList.remove('prev');
        }, 800);
    };

    return (
        <div className="sobre-slide">
            <div className="slide">
                <Item img={'../../../public/imgs/sobre-img2.jpg'} artista={'Teatro Municipal'} topic={'Via São Bento'} imgClass={'slide-img'} />
                <Item img={'../../../public/imgs/sobre-img3.jpg'} artista={'Teatro Municipal'} topic={'Via São Bento'} imgClass={'slide-img'} />
                <Item img={'../../../public/imgs/sobre-img1.jpg'} artista={'Teatro Municipal'} topic={'Via São Bento'} imgClass={'slide-img'} />
            </div>
            <Arrows onNext={() => showSlider('next')} onPrev={() => showSlider('prev')} />
        </div>
    )
}

export default Slide;
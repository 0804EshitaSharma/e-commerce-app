// referenced from: https://www.youtube.com/watch?v=SK9AlIbexOE

import { useState } from "react"

const slides = [
    { url: "https://images-na.ssl-images-amazon.com/images/G/15/img16/home/content-grid/1001488_ca_home_cg_homepage_750x375_kitchen.jpg"},
    { url: "https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2018/img/Office_Products/XCM_1096432_Manual_750x375_1096432_ca_office_products_homeoffice_main_en_18_750x375_jpg_Homeoffice_Main_en.jpg"},
    { url: "https://images-na.ssl-images-amazon.com/images/G/15/img16/home/content-grid/1001488_ca_home_cg_homepage_750x375_art.jpg"},
    { url: "https://images-na.ssl-images-amazon.com/images/G/15/img16/home/content-grid/1001488_ca_home_cg_homepage_750x375_storage.jpg"}
]

export default function ProductSlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const containerStyles = {
        width: '100%',
        height: '450px',
        margin: '10 auto',
    }
    
    const sliderStyles = {
        height: '100%',
        position: 'relative',
        margin: '20px'
    }
    
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: '100%',
        height: '90%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        height: '10%'
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '30px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    } 

    return (
        <div style={containerStyles}>
            <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={goToPrevious}>&lt;</div>
                <div style={slideStyles}></div>
                <div style={rightArrowStyles} onClick={goToNext}>&gt;</div>
                <div style={dotContainerStyles}>
                    {slides.map((slide, slideIndex) => (
                        <div style={dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
                ))}</div>
            </div>
           
        </div>   
    )
}
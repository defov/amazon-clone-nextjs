import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"


const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="/images/carousel1.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/images/carousel2.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/images/carousel3.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
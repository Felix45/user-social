/**
 * @name Carousel
 * @description  Carousel displays images in a slider
 * @returns {JSX.Element} - A React element that displays images on a slider
 */
import { v4 as uuidv4 } from 'uuid';
import { register } from 'swiper/element/bundle';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import sliders from '../data/slides';

register();

const Carousel = () => {

  return (
    <section className="relative h-[300px] md:h-[500px]">
      <swiper-container
        scrollbar-clickable="true"
        mousewheel-invert="true"
        navigation="true"
        pagination="true"
        pagination-clickable="true"
        center-slides="true"
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".swiper-button-prev"
        effect="cube"
        grab-cursor="true"
        cube-effect-shadow="false"
        cube-effect-slide-shadows="false"
        cube-effect-shadow-offset="0"
        cube-effect-shadow-scale="0"
        style={{
          height: '100%',
          '--swiper-pagination-color': '#c32248',
          '--swiper-pagination-bullet-size': '15px',
          '--swiper-navigation-next-el-color': '#c32248',
        }}
      >
        {
                    sliders.map(({
                      img, title, description,
                    }) => (
                      <swiper-slide
                        key={uuidv4()}
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundAttachment: 'center',
                          backgroundPosition: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div
                          className="container mx-auto p-5 bg-black text-white md:w-3/4 lg:w-1/2"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.3)',
                          }}
                        >
                          <h2 className="text-center font-bold text-4xl mt-10 mb-2">{ title }</h2>
                          <p className="text-center text-lg md:block">{ description }</p>
                        </div>
                      </swiper-slide>
                    ))
                }
      </swiper-container>
      <div className="swiper-button-prev text-3xl text-dist absolute z-10 left-2 top-[45%] xl:left-[150px]">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next text-3xl text-dist absolute z-10 right-2 top-[45%] xl:right-[150px]">
        <FaChevronRight />
      </div>
    </section>
  );
};

export default Carousel;

import SkillItem from './SkillItem'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { skillsData } from '../Data/skillsData';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function SkillsSwiper() {
  return (
    <Swiper
    className='mt-16'
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={30}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={800}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={false}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      // onSlideChange={() => console.log('slide change')}
    >
      {skillsData.map((skill: { name: string; icon: string | React.ReactNode; description: string; }, index: number) => (
        <SwiperSlide key={index}>
          <SkillItem name={skill.name} icon={skill.icon} description={skill.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
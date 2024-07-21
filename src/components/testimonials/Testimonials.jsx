import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/testpriyanshu.png";
import AVTR2 from "../../assets/Rohit.png";
import AVTR3 from "../../assets/Anand.jpg";
// import AVTR4 from "../../assets/iselin.jpg";
// import AVTR5 from "../../assets/balraj.jpg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Priyanshu",
    review:
      "Shubham is a prolific idea generator, constantly challenging assumptions and propelling our team forward with his vision. His consistent contributions and forward-thinking approach make him a valuable asset.",
  },
  {
    avatar: AVTR2,
    name: "Rohit",
    review:
      "Working alongside Shubham is totally Fun with Focus. His unwavering dedication and insightful questions were instrumental in our discussion.",
  },
  {
    avatar: AVTR3,
    name: "Anand",
    review:
      "Man, working with Shubham these past months was awesome! Remember those late nights pulling all-nighters? His dedication is no joke, and the way he always asks the perfect questions totally kept us on track.",
  },
  // {
  //   avatar: AVTR4,
  //   name: "Iselin",
  //   review:
  //     "I worked with Ademir on a challenging trend analysis project. I would describe him as solution-oriented and adaptable. Last but not least, he is creative, good at design, and a great collaborator!",
  // },
  // {
  //   avatar: AVTR5,
  //   name: "Balraj",
  //   review:
  //     "I had the pleasure of working with Ademir on a very challenging project! He is good at finding simple and creative solutions to complex challenges. He is also very helpful, motivated and has great work capacity.",
  // },
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from coworkers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
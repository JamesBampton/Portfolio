import React from "react";
import { Carousel } from "react-bootstrap";

const BootstrapCarousel = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <Carousel.Caption>
          <h3>Recommentation</h3>
          <br></br>
          <p>
            "I had the pleasure of working with James for over 20 years across
            numerous projects, and I always admired his diligence to ensure that
            the tasks were always done to a very high standard.....I am honoured
            and count myself lucky to have worked with James for many years and
            on many projects, and I have learned so much from James"
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <Carousel.Caption>
          <h3>Recommentation</h3>
          <br></br>
          <p>
            "I had the pleasure of working alongside James on multiple projects
            for many years and even though he was senior to me, he never
            hesitated to collaborate as an equal, always bringing kindness,
            thoughtfulness, and an incredible attention to detail to everything
            we did"
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <Carousel.Caption>
          <h3>Recommentation</h3>
          <br></br>
          <p>
            "I had the privilege of working alongside James at IBM & AT&T for
            many Years, and during that time, he consistently demonstrated
            exceptional professionalism, dedication, and a genuine commitment to
            excellence"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;

import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Gallery.css";
import gallery1 from "../../../../img/gallery-1.jpg";
import gallery2 from "../../../../img/gallery-2.jpg";
import gallery3 from "../../../../img/gallery-3.jpg";
import gallery4 from "../../../../img/gallery-4.jpg";
import gallery5 from "../../../../img/gallery-5.jpg";
import gallery6 from "../../../../img/gallery-6.jpg";
import gallery7 from "../../../../img/gallery-7.jpg";
import gallery8 from "../../../../img/gallery-8.jpg";
import gallery9 from "../../../../img/gallery-9.jpg";
import gallery10 from "../../../../img/gallery-10.jpg";

const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="gallery">
      <h2 className="title text-secondary">Our Tour Gallery</h2>
      <Container>
        <Carousel
          className="mx-auto gallery-carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {gallery.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 carousel-img"
                  src={item}
                  alt="Second slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default Gallery;

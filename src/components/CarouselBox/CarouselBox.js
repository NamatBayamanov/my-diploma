import Carousel from "react-bootstrap/Carousel";
import forestImage1 from "../../assets/forest1.jpg";
import forestImage2 from "../../assets/forest2.jpg";
// import { Carousel } from "bootstrap";


function CarouselBox() {
  return ( 
    <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={forestImage1}
            alt="#"
          />
          <Carousel.Caption>
            <h3>
              Forest image first
            </h3>
            <p>
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={forestImage2}
            alt="#"
          />
          <Carousel.Caption>
            <h3>
              Forest image second
            </h3>
            <p>
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={forestImage1}
            alt="#"
          />
          <Carousel.Caption>
            <h3>
              Forest image first
            </h3>
            <p>
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
              lorem 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselBox;
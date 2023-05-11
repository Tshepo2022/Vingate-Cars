import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="image"
          src="https://c.ndtvimg.com/j6c8iouo_rolls-royce-phantom-ii-continental_625x300_15_August_18.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://c.ndtvimg.com/tm419okg_hispano-suiza-h6b_625x300_15_August_18.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://waimakclassiccars.co.nz/wp-content/uploads/2019/11/5779e39cd328e-03.JPG"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    
  );
}

export default Slider;

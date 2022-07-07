import './index.scss'
import {Loader} from 'react-loaders'
import Slider from "react-slick"
import { useState } from "react";
import pic1 from '../../assets/images/pic1.jpg'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'
import pic5 from '../../assets/images/pic5.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [pic1, pic2, pic3, pic4, pic5]

// const About = () => {
function About(){

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
    const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About me
                    </h1>
                    <p>
                        I'm currently a senior at Virginia Tech seeking for a job opportunity or an internship/co-op experience in full-stack developer. I'm hoping that I would be able to have more experience being a developer. By working in a professional environment, I will strive to become a strong asset for the team and the company.
                    </p>
                    <p>
                        I have experience with front-end frameworks such as Bootstrap, React, Vue, and JavaScript. Also, I'm in the process of learning about back-end through MySQL, Java, Python. 
                    </p>
                    <p>
                        I'm proficient in Java, C, HTML, CSS and Javascript. At the same time, I'm trying to improve my other familar coding languages and software such as: Git, Node js, React Js, SpringBoot and MongoDB.
                    </p>
                    <h2>
                        Skills
                    </h2>
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Software Design and Data Structures</li>
                        <li>Data and Algorithm Analysis</li>
                        <li>Computer System</li>
                        <li>Computer Organization</li>
                    </ul>
                </div>
            </div>
            <div className="caro">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
            <Loader type="pacman" />
        </>
    )
}
  

export default About
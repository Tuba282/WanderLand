import React ,{useEffect}from 'react'
import { AboutMe } from '../Components/AboutMe'
import { AboutCarousel } from '../Components/AboutCarousel'
import { useLocation } from 'react-router-dom';
import { Marquee3d } from '../Components/Marquee3d';
import { Testimonial } from '../Components/Testimonial';

const About = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div>
      <AboutMe/>
      <AboutCarousel />
      <Marquee3d/>
      <Testimonial/>
    </div>
  )
}

export default About

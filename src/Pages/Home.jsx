import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { HeroParallax } from '../Components/ui/hero-parallax'
import CompanyImgs from '../Components/CompanyImgs';
import Ripped from '../Components/Ripped';
import Tips from '../Components/Tips';
import BookTour from '../Components/BookTour';
import { Gallery } from '../Components/Gallery';
import Map from '../Components/Map';

const Home = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  const products = [
    { title: "Home", link: "/product1", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-1.jpg" },
    { title: "Traveling Blog Metro", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg" },
    { title: "Lost Guide", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-img-7.jpg" },
    { title: "Travel Blog", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-2.jpg" },
    { title: "Floating Posts", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-5.jpg" },
    { title: "Travelogue Home", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg" },
    { title: "Blog Divided", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-6.jpg" },
    { title: "Alternating Tiurs", link: "/product2", thumbnail: "https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-8.jpg" },
    // Add more products here
  ];
  return (
    <div>
      <HeroParallax products={products} />
      <Ripped className={``} />
      <CompanyImgs />
      <Tips />
      <BookTour />
      <Gallery />
      <Map />
    </div>
  )
}

export default Home

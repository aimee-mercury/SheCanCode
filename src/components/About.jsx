import React, { useEffect, useState } from 'react';
import Image from '../assets/Screenshot 2024-01-16 100317.png';
import Image1 from '../assets/Screenshot 2024-01-16 100423.png';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  const [categoriesCount, setCategoriesCount] = useState(1);
  const [productsCount, setProductsCount] = useState(1);
  const [booksCount, setBooksCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const numberContainer = document.querySelector('.number-container');
      const scrollPosition = window.scrollY + window.innerHeight;

      if (numberContainer.offsetTop < scrollPosition) {
        // Increment the counts non-stop up to the specified values
        setCategoriesCount((prevCount) => (prevCount >= 20 ? 20 : prevCount + 1));
        setProductsCount((prevCount) => (prevCount >= 10000 ? 10000 : prevCount + 1));
        setBooksCount((prevCount) => (prevCount >= 50000 ? 50000 : prevCount + 1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className='about-container' data-aos="fade-up" data-aos-duration={1000}>
 <div className='about' id='About'>
<h1>About the library</h1>

</div>

<div className='number-container'>
        <div className='number'>
          <b>Categories</b>
          <br />
          <br />
          {categoriesCount}+
        </div>
        <div className='number'>
          <b>Products</b>
          <br />
          <br />
          {productsCount}+
        </div>
        <div className='number'>
          <b>Books</b>
          <br />
          <br />
          {booksCount}+
        </div>
      </div>

<div className='next'>
 <p>Welcome to Wisdom Library,A haven for knowledge seekers and a vibrant hub for the community.Our library stands as a testament to the transformative power of literature and learning. Immerse yourself in a curated collection of books,multimedia resources, and digital archives that cater to diverse interests and intellectual pursuits.</p>   
</div>

<div className='mission' id='Mission'>
      <div className='card'>
        <img src={Image} alt='Image 2' />
        <div className='text'>
          <h2>Mission and Values</h2>
          <p>
            At Wisdom library, our mission is to cultivate a community of lifelong learners by providing access to diverse knowledge resources, fostering a love for reading, and promoting intellectual exploration.
          </p>
          <p>
            We are dedicated to serving as a dynamic hub for education, information, and cultural enrichment. Join us on a journey of discovery, as we provide a platform for individuals to expand their horizons, pursue academic excellence, and contribute to the collective wisdom of our community.
          </p>
        </div>
      </div>

      <div className='card'>
        <img src={Image1} alt='Image 1' />
        <div className='text'>
          <h2>What Sets Us Apart  </h2>
          <p>
            <b>Diverse Collection:</b> Explore our carefully curated collection spanning literature, reference materials, multimedia resources, and more.
          </p>
          <p>
            <b>Innovative Technology:</b> Stay at the forefront of learning with our cutting-edge technology, providing access to e-books, online databases, and interactive learning tools.
          </p>
          <p>
            <b>Community Events:</b> Engage with like-minded individuals through our regular events, workshops, and cultural activities designed to enrich your experience and foster connections.
          </p>
        </div>
      </div>
    </div>
    </div>
</>
  )
}

export default About

// src/pages/Home/Home.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

// Importez les images depuis le dossier assets
import student1 from '../../assets/students1.png';
import student2 from '../../assets/students2.png';
import student3 from '../../assets/students3.png';

export default function Home() {
  return (
    <div className="home">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={student1}
            alt="Student 1"
          />
          <Carousel.Caption>
            <h3>Étudiant 1</h3>
            <p>Des opportunités de développement personnel et académique.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={student2}
            alt="Student 2"
          />
          <Carousel.Caption>
            <h3>Étudiant 2</h3>
            <p>Une communauté engagée et solidaire.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={student3}
            alt="Student 3"
          />
          <Carousel.Caption>
            <h3>Étudiant 3</h3>
            <p>Un enseignement de qualité supérieure.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      <section className="home-intro">
        <div className="container">
          <h2>À propos de nous</h2>
          <p>
            Notre école supérieure offre des programmes académiques de premier ordre, 
            des installations de pointe et un corps professoral dédié à la réussite de nos étudiants.
          </p>
        </div>
      </section>

      <section className="home-testimonials">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonial">
            <p>"Une expérience éducative incroyable avec des opportunités sans fin."</p>
            <h5>- Étudiant 1</h5>
          </div>
          <div className="testimonial">
            <p>"Les professeurs sont vraiment engagés et passionnés par l'enseignement."</p>
            <h5>- Étudiant 2</h5>
          </div>
        </div>
      </section>

    
    </div>
  );
}

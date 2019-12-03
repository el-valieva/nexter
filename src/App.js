import React from 'react';
import './styles/scss/main.scss';
import nexterLogo from './styles/img/logo.png';
import logoBBC from './styles/img/logo-bbc.png';
import logoForbes from './styles/img/logo-forbes.png';
import logoTechcrunch from './styles/img/logo-techcrunch.png';
import logoBi from './styles/img/logo-bi.png';
import realtor1 from './styles/img/realtor-1.jpeg';
import realtor2 from './styles/img/realtor-2.jpeg';
import realtor3 from './styles/img/realtor-3.jpeg';
import story1 from './styles/img/story-1.jpeg';
import story2 from './styles/img/story-2.jpeg';
import house1 from './styles/img/house-1.jpeg';
import house2 from './styles/img/house-2.jpeg';
import house3 from './styles/img/house-3.jpeg';
import house4 from './styles/img/house-4.jpeg';
import house5 from './styles/img/house-5.jpeg';
import house6 from './styles/img/house-6.jpeg';
import gallery1 from './styles/img/gal-1.jpeg';
import gallery2 from './styles/img/gal-2.jpeg';
import gallery3 from './styles/img/gal-3.jpeg';
import gallery4 from './styles/img/gal-4.jpeg';
import gallery5 from './styles/img/gal-5.jpeg';
import gallery6 from './styles/img/gal-6.jpeg';
import gallery7 from './styles/img/gal-7.jpeg';
import gallery8 from './styles/img/gal-8.jpeg';
import gallery9 from './styles/img/gal-9.jpeg';
import gallery10 from './styles/img/gal-10.jpeg';
import gallery11 from './styles/img/gal-11.jpeg';
import gallery12 from './styles/img/gal-12.jpeg';
import gallery13 from './styles/img/gal-13.jpeg';
import gallery14 from './styles/img/gal-14.jpeg';
import FeatureItem from "./Features/FeatureItem";
import HomeItem from "./Homes/HomeItem";

function App() {

  const footer = [
    'Find your dream home',
    'Request proposal',
    'Download home planner',
    'Contact us',
    'Submit your property',
    'Come work with us'
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>

      <header className="header">
        <img src={nexterLogo} className="header__logo" alt="Nexter logo"/>
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src={logoBBC} alt="Seen on logo 1"/>
          <img src={logoForbes} alt="Seen on logo 2"/>
          <img src={logoTechcrunch} alt="Seen on logo 3"/>
          <img src={logoBi} alt="Seen on logo 4"/>
        </div>


      </header>

      <div className="realtors">
        <h3 className="heading-3">Top 3 realtors</h3>
        <div className="realtors__list">
          <img src={realtor1} alt="Realtor 1" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
            <p className="realtors__sold">245 houses sold</p>
          </div>

          <img src={realtor2} alt="Realtor 2" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">212 houses sold</p>
          </div>

          <img src={realtor3} alt="Realtor 3" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
            <p className="realtors__sold">198 houses sold</p>
          </div>
        </div>

      </div>

      <section className="features">
          <FeatureItem icon="icon-global" name="World's best luxury homes" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur distinctio necessitatibus pariatur voluptatibus"/>

          <FeatureItem icon="icon-trophy" name="Only the best properties" text="Vero ipsum sapiente molestias accusamus rerum
          sed a eligendi aut quia."/>

          <FeatureItem icon="icon-map-pin" name="All homes in top locations" text="Tenetur distinctio necessitatibus pariatur voluptatibu
          quidem consequatur harum."/>

          <FeatureItem icon="icon-key" name="New home in one week" text="Vero ipsum sapiente molestias accusamus rerum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit."/>

          <FeatureItem icon="icon-presentation" name="Top 1% realtors" text="Quidem consequatur harum, voluptatum mollitia quae.
          Tenetur distinctio necessitatibus pariatur voluptatibus."/>

          <FeatureItem icon="icon-lock" name="Secure payments on the Nexter" text="Pariatur voluptatibus quidem consequatur harum
          voluptatum mollitia quae."/>
      </section>

      <div className="story__pictures">
        <img src={story1} alt="Couple with new house" className="story__img-1"/>
        <img src={story2} alt="New house" className="story__img-2"/>
      </div>

      <div className="story__content">
        <h3 className="heading-3  mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
        <p className="story_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>

      <section className="homes">
        <HomeItem name="Beautiful Family House" location="USA" rooms="5" area="325" price="1,200,000" img={house1} imgAlt="House 1"/>
        <HomeItem name="Modern Glass Villa" location="Canada" rooms="6" area="450" price="2,750,000" img={house2} imgAlt="House 2"/>
        <HomeItem name="Cozy Country Housea" location="UK" rooms="4" area="250" price="850,000" img={house3} imgAlt="House 3"/>
        <HomeItem name="Large Rustical Villa" location="Portugal" rooms="6" area="480" price="1,950,000" img={house4} imgAlt="House 4"/>
        <HomeItem name="Majestic Palace House" location="Germany" rooms="18" area="4230" price="9,500,000" img={house5} imgAlt="House 5"/>
        <HomeItem name="Modern Family Apartment" location="Italy" rooms="3" area="180" price="600,000" img={house6} imgAlt="House 6"/>
      </section>

      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={gallery1} className="gallery__img" alt="Gallery image 1"/>
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img src={gallery2} className="gallery__img" alt="Gallery image 2"/>
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img src={gallery3} className="gallery__img" alt="Gallery image 3"/>
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img src={gallery4} className="gallery__img" alt="Gallery image 4"/>
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img src={gallery5} className="gallery__img" alt="Gallery image 5"/>
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img src={gallery6} className="gallery__img" alt="Gallery image 6"/>
        </figure>

        <figure className="gallery__item gallery__item--7">
          <img src={gallery7} className="gallery__img" alt="Gallery image 7"/>
        </figure>

        <figure className="gallery__item gallery__item--8">
          <img src={gallery8} className="gallery__img" alt="Gallery image 8"/>
        </figure>

        <figure className="gallery__item gallery__item--9">
          <img src={gallery9} className="gallery__img" alt="Gallery image 9"/>
        </figure>

        <figure className="gallery__item gallery__item--10">
          <img src={gallery10} className="gallery__img" alt="Gallery image 10"/>
        </figure>

        <figure className="gallery__item gallery__item--11">
          <img src={gallery11} className="gallery__img" alt="Gallery image 11"/>
        </figure>

        <figure className="gallery__item gallery__item--12">
          <img src={gallery12} className="gallery__img" alt="Gallery image 12"/>
        </figure>

        <figure className="gallery__item gallery__item--13">
          <img src={gallery13} className="gallery__img" alt="Gallery image 13"/>
        </figure>

        <figure className="gallery__item gallery__item--14">
          <img src={gallery14} className="gallery__img" alt="Gallery image 14"/>
        </figure>
      </section>


      <footer className="footer">
        <ul className="nav">
          {footer.map((item) => {
            return (
              <li className="nav__item"><a href="/" className="nav__link">{item}</a></li>
            );
          })}
        </ul>
        <p className="copyright">
          &copy; Copyright 2017 by Jonas Schmedtmann (Course "Advanced CSS and Sass: Flexbox, Grid, Animations and More!" - Udemy.com)
          <p>Made and implemented using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="copyright__link">React</a> by <a href="https://www.linkedin.com/in/elena-valieva-94a890a4/" className="copyright__link" target="_blank" rel="noopener noreferrer">Elena Valieva</a>.
          </p>

        </p>
      </footer>
    </div>
  );
}

export default App;

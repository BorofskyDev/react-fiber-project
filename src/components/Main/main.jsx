import React from 'react';
import './earth.css';
import '../../index.css';
import logo from '../Assets/Icons/logo.svg';

export function TopSection() {
  return (
    <>
      <div className="canvas-container">
        <a className="skip-to-content" href="#main">
          Skip to content
        </a>
        <header className="primary-header flex">
          <div>
            <img src={logo} alt="space tourism logo" className="logo" />
          </div>
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
          </button>
          <nav>
            <ul
              id="primary-navigation"
              data-visible="false"
              className="primary-navigation underline-indicators flex"
            >
              <li>
                <a
                  className="ff-sans-cond uppercase text-white gradient-text letter-spacing-2"
                  href="index.html"
                >
                  <span aria-hidden="true">00</span>Home
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white gradient-text letter-spacing-2"
                  href="#destination"
                >
                  <span aria-hidden="true">01</span>Destination
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white gradient-text letter-spacing-2"
                  href="#crew"
                >
                  <span aria-hidden="true">02</span>Crew
                </a>
              </li>
              <li>
                <a
                  className="ff-sans-cond uppercase text-white gradient-text letter-spacing-2"
                  href="#technologies"
                >
                  <span aria-hidden="true">03</span>Technologies
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* add "main" for assistive technologies */}
        <main id="main" className="grid-container grid-container--home">
          <div>
            <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              Explore our system with
              <span className="fs-900 ff-serif text-white d-block gradient-text active">
                SOLIT
              </span>
            </h1>
            <p>
              SOLIT (Sol Interplanetary Travel) Space Cruises provides you the
              opportunity of a lifetime. Cruise the solar system at sub-light
              speeds. View the rings of Saturn in luxurious accomodations.
              Travel to destinations only dreamed of by our ancestors. The sky
              is no longer the limit, but the first step to your next adventure!
            </p>
          </div>
          <div>
            <a
              href="#destination"
              target="_blank"
              className="large-button uppercase ff-serif text-dark bg-white"
              style={{ marginTop: '5rem' }}
            >
              Explore
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'


export default () => (
  <div>
    <Header></Header>
    <div id="main">
      <Hero></Hero>
      <div className="content"
          style={{
            margin: '0 auto',
            maxWidth: '900px',
            padding: '30px 0',
          }}
        >
          <article className="card"
            style={{
              boxShadow: 'rgba(25, 17, 34, 0.05) 0px 3px 10px',
              margin: '25px 0',
              padding: '20px',
              background: 'rgb(255, 255, 255)',
              borderRadius: '4px',
              transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
            }}
          >
            <h1>Hello world</h1>
            <div>
            recommend checking with your condo association to see if pets are allowed. Unfortunately, if they’re not allowed, then you can’t allow pets.

Pets Might Damage the Property 
Property damage from pets is possible, especially with dog breeds that tend to chew, especially if it’s a puppy. We surveyed our 40,000 landlords, and 64% of them stated a dog had damaged their property.
            </div>

          </article>
        </div>
    

    </div>
    <Footer></Footer>
  </div>)
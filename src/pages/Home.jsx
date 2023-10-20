import React from 'react'
import { Helmet } from 'react-helmet-async';
import Carousels from '../components/Carousels';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testmonials';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <div>
      <Helmet>
      <title>Taste Haven: A Journey of Flavors</title>
      </Helmet>
      <Carousels/>
      <Cards/>
      <Newsletter/>
      <Testimonials/>
    </div>
  )
}

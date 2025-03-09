import React from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import Reviews from './Reviews'
import CallToAction from './CallToAction'

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
        <Hero />
        <SpecialDishes />
        <Reviews />
        <CallToAction />
    </div>
  )
}

export default Home
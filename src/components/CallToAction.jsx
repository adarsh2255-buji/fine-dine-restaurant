import React from 'react'
import { Link } from 'react-router-dom'
const CallToAction = () => {
  return (
    <>
    <section className="p-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold font-heading">Ready to Dine with Us?</h2>
        <p className="mt-2 ">Reserve your table now and enjoy an unforgettable experience.</p>
        <Link to="/reservation" className="bg-white text-gray-900 font-bold hover:bg-gray-500 px-6 py-3 rounded-lg mt-4 inline-block">
            Book Now
        </Link>
    </section>

    </>
  )
}

export default CallToAction
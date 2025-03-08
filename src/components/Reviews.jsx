import React from 'react'

const Reviews = () => {
  return (
    <>
    <section className="p-10">
        <h2 className="text-3xl font-bold text-center font-heading">What Our Customers Say</h2>
        <div className="flex justify-center gap-6 mt-6">
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <p className='font-body'>"The best dining experience ever! Highly recommended!"</p>
            <h4 className="font-semibold mt-2">- John Doe</h4>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <p className='font-body'>"The best dining experience ever! Highly recommended!"</p>
            <h4 className="font-semibold mt-2">- John Doe</h4>
            </div>
        </div>
    </section>

    </>
  )
}

export default Reviews
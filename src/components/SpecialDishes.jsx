import React from 'react'
import featuredDishes from '../data/featuredDishes'

const SpecialDishes = () => {
  return (
    <>
    <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center font-heading">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {featuredDishes.map((dish) => (
                <div key={dish.id} className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={dish.image} alt={dish.name} className="w-full h-auto rounded-lg" />
                    <h3 className="text-xl font-semibold mt-2 font-heading">{dish.name}</h3>
                    <p className="text-gray-600 font-body text-xl">{dish.description}</p>
                    <p className="font-bold mt-2 font-body text-xl">{dish.price}</p>
                </div>
            ))}
            

        </div>


        
</section>

    </>
  )
}

export default SpecialDishes
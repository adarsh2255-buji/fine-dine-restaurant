import React from 'react'
import featuredDishes from '../data/featuredDishes'

const SpecialDishes = () => {
  return (
    <>
    <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center font-heading">Featured Dishes</h2>
        <div className="flex justify-center gap-6 mt-6">
            {featuredDishes.map((dish) => (
                <div key={dish.id} className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={dish.image} alt={dish.name} className="w-full rounded-lg" />
                    <h3 className="text-xl font-semibold mt-2 font-heading">{dish.name}</h3>
                    <p className="text-gray-600 font-body text-xl">{dish.description}</p>
                    <p className="font-bold mt-2 font-body text-xl">{dish.price}</p>
                </div>
            ))}
            
    {/* Repeat for more dishes */}
        </div>


        
</section>

    </>
  )
}

export default SpecialDishes
import { useState } from "react";
import menuData from "../data/menuData";

const Menu = () => {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Starters", "Main Course", "Desserts"];

  // Filtered Menu
  const filteredMenu =
    category === "All"
      ? menuData
      : menuData.filter((item) => item.category === category);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Our Menu</h1>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              category === cat ? "bg-gray-900 text-white" : "bg-gray-200"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-red-500 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

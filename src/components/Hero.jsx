import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/table-hero.jpg')" }}
    >

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading font-bold text-shadow"
        >
          Welcome to Fine Dine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl font-body text-gray-300 text-shadow"
        >
          Experience the best flavors from around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6"
        >
          <Link to="/menu" className="bg-gray-900 hover:bg-gray-800 text-white font-body  px-6 py-3 rounded-lg text-lg transition">
            View Menu
          </Link>
          <Link to="/reservation" className="bg-gray-900 hover:bg-gray-800 text-white font-body  px-6 py-3 rounded-lg text-lg transition ml-2">
            Book your table
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

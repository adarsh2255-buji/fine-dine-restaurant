import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-gray-800"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Welcome to **Fine Dine**, where flavors meet perfection. We bring you the best 
        dining experience with world-class chefs and fresh ingredients.
      </motion.p>

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        src="/images/restaurant-about.jpg"
        alt="Restaurant Interior"
        className="mt-6 w-full max-w-lg rounded-lg shadow-lg"
      />
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gray-100">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-gray-800"
      >
        Contact Us
      </motion.h1>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-8 space-y-6 text-lg text-gray-700"
      >
        <p className="flex items-center justify-center gap-2">
          <FaPhone className="text-red-500" /> +123 456 7890
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-red-500" /> finedine@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-red-500" /> 123 Food Street, Kollam, India
        </p>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 flex space-x-6 text-2xl text-gray-700"
      >
        <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
      </motion.div>
    </section>
  );
};

export default Contact;
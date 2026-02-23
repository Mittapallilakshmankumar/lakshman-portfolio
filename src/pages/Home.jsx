import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 px-6">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
      >
        Mittapalli Lakshman Kumar
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-indigo-500 mb-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl"
      >
        Backend Developer specializing in Django REST APIs, 
        database optimization, and secure authentication systems.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/projects"
        className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-lg"
      >
        View Projects
      </motion.a>

    </div>
  );
}

export default Home;
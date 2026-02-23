import { motion } from "framer-motion";

function About() {
  return (
    <div className="py-20 px-8 md:px-20">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-900 p-8 rounded-xl shadow-lg"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I am an Associate Backend Developer with 10 months of professional
          experience in building scalable REST APIs using Django REST Framework.
          I specialize in database design, PostgreSQL optimization, JWT-based
          authentication, Role-Based Access Control (RBAC), and production support.
          I have worked on healthcare and education domain projects,
          focusing on secure, high-performance backend systems.
        </p>
      </motion.div>

    </div>
  );
}

export default About;
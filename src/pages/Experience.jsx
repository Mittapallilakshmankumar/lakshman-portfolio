import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="py-20 px-8 md:px-20">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-900 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-2">
          Associate Developer – Vunathi Technologies
        </h3>

        <p className="text-indigo-400 mb-4">
          April 2025 – February 2026
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Designed and developed REST APIs using Django REST Framework.</li>
          <li>Architected PostgreSQL schemas and optimized complex queries.</li>
          <li>Implemented JWT authentication secure access control.</li>
          <li>Integrated SMTP & IMAP for automated email communication.</li>
          <li>Handled production support, debugging and performance tuning.</li>
          <li>Worked in Agile/Scrum methodology with cross-functional teams.</li>
        </ul>

      </motion.div>

    </div>
  );
}

export default Experience;
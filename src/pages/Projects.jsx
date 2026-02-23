


// import { motion } from "framer-motion";

// function Projects() {
//   return (
//     <div className="w-full py-16 px-4 md:px-16">

//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
//       >
//         Professional Projects
//       </motion.h2>

//       {/* ================= QUICKMED ================= */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="w-full bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg mb-10"
//       >
//         <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400">
//           QuickMed – Medicine Delivery Platform
//         </h3>

//         <p className="text-gray-300 text-sm md:text-base mb-6">
//           QuickMed is a healthcare-based backend system that allows users to browse medicines,
//           place secure orders, and receive automated notifications.
//         </p>

//         <h4 className="text-lg font-semibold mb-3">Architecture & Technologies:</h4>

//         <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base mb-6">
//           <li>Backend: Django & Django REST Framework</li>
//           <li>Database: PostgreSQL</li>
//           <li>Authentication: JWT & RBAC</li>
//         </ul>

//         <h4 className="text-lg font-semibold mb-3">My Responsibilities:</h4>

//         <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
//           <li>Designed database schema for medicines and orders.</li>
//           <li>Developed REST APIs for order lifecycle.</li>
//           <li>Implemented JWT-based authentication.</li>
//           <li>Integrated SMTP for email notifications.</li>
//           <li>Optimized ORM queries for performance.</li>
//         </ul>
//       </motion.div>

//       {/* ================= NOVYA ================= */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="w-full bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg"
//       >
//         <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400">
//           Novya.in – Online Education Platform
//         </h3>

//         <p className="text-gray-300 text-sm md:text-base mb-6">
//           Education platform supporting multi-role users with secure REST APIs.
//         </p>

//         <h4 className="text-lg font-semibold mb-3">Architecture & Technologies:</h4>

//         <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base mb-6">
//           <li>Backend: Django REST Framework</li>
//           <li>Database: PostgreSQL</li>
//           <li>Authentication: JWT / Session Auth</li>
//         </ul>

//         <h4 className="text-lg font-semibold mb-3">My Responsibilities:</h4>

//         <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
//           <li>Designed multi-role user system.</li>
//           <li>Built course enrollment APIs.</li>
//           <li>Implemented pagination and filtering.</li>
//           <li>Ensured secure role-based access.</li>
//         </ul>
//       </motion.div>

//     </div>
//   );
// }

// export default Projects;



import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="w-full py-16 px-4 md:px-16">

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
      >
        Professional Projects
      </motion.h2>

      {/* ================= QUICKMED ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg mb-10"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400">
          QuickMed – Medicine Delivery Platform
        </h3>

        <p className="text-gray-300 text-sm md:text-base mb-6">
          QuickMed is a healthcare-based backend system that allows users to browse medicines,
          place secure orders, and receive automated notifications.
        </p>

        <h4 className="text-lg font-semibold mb-3">Architecture & Technologies:</h4>

        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base mb-6">
          <li>Backend: Django & Django REST Framework</li>
          <li>Database: PostgreSQL</li>
          <li>Authentication: JWT & RBAC</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">My Responsibilities:</h4>

        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
          <li>Designed database schema for medicines and orders.</li>
          <li>Developed REST APIs for order lifecycle.</li>
          <li>Implemented JWT-based authentication.</li>
          <li>Integrated SMTP for email notifications.</li>
          <li>Optimized ORM queries for performance.</li>
        </ul>
      </motion.div>

      {/* ================= NOVYA ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-400">
          Novya.in – Online Education Platform
        </h3>

        <p className="text-gray-300 text-sm md:text-base mb-6">
          Education platform supporting multi-role users with secure REST APIs.
        </p>

        <h4 className="text-lg font-semibold mb-3">Architecture & Technologies:</h4>

        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base mb-6">
          <li>Backend: Django REST Framework</li>
          <li>Database: PostgreSQL</li>
          <li>Authentication: JWT / Session Auth</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">My Responsibilities:</h4>

        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
          <li>Designed multi-role user system.</li>
          <li>Built course enrollment APIs.</li>
          <li>Implemented pagination and filtering.</li>
          <li>Ensured secure role-based access.</li>
        </ul>
      </motion.div>

    </div>
  );
}

export default Projects;
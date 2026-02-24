import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="w-full py-16 px-4 md:px-16">

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Programming Languages */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Programming Languages
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Python</li>
          </ul>
        </div>

        {/* Backend Frameworks */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Backend Frameworks
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Django</li>
            <li>Django REST Framework (DRF)</li>
            <li>Flask</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Databases
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Web Technologies */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Web Technologies
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React (Basics)</li>
          </ul>
        </div>

        {/* Core Concepts */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg md:col-span-2 hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Core Concepts
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>REST API Development</li>
            <li>ORM & Query Optimization</li>
            <li>Authentication & Authorization</li>
            <li>Middleware</li>
            <li>SQL Queries</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg md:col-span-2 hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Development Tools
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Vercel Deployment</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
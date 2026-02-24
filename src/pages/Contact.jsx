



import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="py-20 px-6 md:px-20">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 p-6 md:p-10 rounded-xl shadow-lg max-w-xl mx-auto"
      >
        <div className="space-y-6 text-gray-300 text-sm md:text-base">

          {/* Email */}
          <div>
            <p className="font-semibold mb-1">📧 Email</p>
            <a
              href="mailto:mittapallilakshmankumar@gmail.com"
              className="text-indigo-400 break-all"
            >
              mittapallilakshmankumar@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="font-semibold mb-1">📱 Phone</p>
            <p className="text-indigo-400">+91 7793938419</p>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="font-semibold mb-1">💼 LinkedIn</p>
            <a
              href="https://linkedin.com/in/mittapalli-lakshmankumar-178b401a6"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 break-all"
            >
              linkedin.com/in/mittapalli-lakshmankumar-178b401a6
            </a>
          </div>

          {/* Resume Button */}
          <div className="pt-4">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition text-white"
            >
              Download Resume
            </a>
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default Contact;
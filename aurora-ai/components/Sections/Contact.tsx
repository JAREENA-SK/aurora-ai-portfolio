"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1020] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Contact +91-7815838600
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm always open to discussing software engineering opportunities,
            project management roles, freelance collaborations,
            and exciting new ideas.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-10 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]"
          >

            <h3 className="mb-8 text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-cyan-400 font-semibold">
                  📧 Email
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  Shaik.zianshaik@gmail.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  📍 Rajampet
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  Andhra Pradesh, India
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  💼 LinkedIn
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  linkedin.com/in/yourprofile
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  💻 GitHub
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  github.com/JAREENA-SK
                </p>
              </div>

            </div>

            <button className="mt-12 rounded-xl bg-[#6C63FF] px-8 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-[#5A52E0]">
              Download Resume
            </button>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-10 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
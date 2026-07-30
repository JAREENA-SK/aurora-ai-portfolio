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
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I&apos;m currently exploring remote opportunities in project
            management and operations management. I&apos;m open to discussing
            suitable roles, collaborations, and new ideas.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-10 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]"
          >

            <h3 className="mb-8 text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Email */}

              <div>
                <p className="font-semibold text-cyan-400">
                  📧 Email
                </p>

                <a
                  href="mailto:shaik.zianshaik@gmail.com"
                  className="mt-2 block break-all text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  shaik.zianshaik@gmail.com
                </a>
              </div>

              {/* Phone */}

              <div>
                <p className="font-semibold text-cyan-400">
                  📞 Phone
                </p>

                <a
                  href="tel:+917815838600"
                  className="mt-2 block text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  +91 78158 38600
                </a>
              </div>

              {/* Location */}

              <div>
                <p className="font-semibold text-cyan-400">
                  📍 Location
                </p>

                <p className="mt-2 text-lg text-gray-300">
                  Rajampet, Andhra Pradesh, India
                </p>
              </div>

              {/* GitHub */}

              <div>
                <p className="font-semibold text-cyan-400">
                  💻 GitHub
                </p>

                <a
                  href="https://github.com/JAREENA-SK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block break-all text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  github.com/JAREENA-SK
                </a>
              </div>

              {/* Opportunities */}

              <div>
                <p className="font-semibold text-cyan-400">
                  💼 Open to Opportunities
                </p>

                <div className="mt-3 flex flex-wrap gap-3">

                  <span className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300">
                    Remote Opportunities
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300">
                    Project Manager
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-[#0F172A] px-4 py-2 text-sm text-cyan-300">
                    Operations Manager
                  </span>

                </div>
              </div>

            </div>

            <a
              href="/resume/Shaik-Jareena-Resume.pdf"
              download
              className="mt-12 inline-block rounded-xl bg-[#6C63FF] px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#5A52E0]"
            >
              Download Resume
            </a>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            action="https://formspree.io/f/xqerwlwr"
            method="POST"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-10 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="email"
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="mb-6 w-full rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="mb-6 w-full resize-none rounded-xl bg-[#0F172A] p-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
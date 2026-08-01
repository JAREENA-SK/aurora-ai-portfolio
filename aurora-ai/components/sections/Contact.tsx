"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Download,
  Code2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const opportunities = [
  "Remote Opportunities",
  "Project Manager",
  "Operations Manager",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1020] px-5 py-24 text-white sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I&apos;m currently exploring remote opportunities in project
            management and operations management. Feel free to contact me about
            suitable roles, collaborations, or professional opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-7 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,212,255,0.15)] sm:p-10"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              The fastest way to reach me is through email or the contact form.
            </p>

            <div className="mt-9 space-y-7">
              {/* Email */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-[#0F172A] text-cyan-400">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-semibold text-cyan-400">Email</p>

                  <a
                    href="mailto:shaik.zianshaik@gmail.com"
                    className="mt-1 block break-all text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    shaik.zianshaik@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-[#0F172A] text-cyan-400">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-semibold text-cyan-400">Phone</p>

                  <a
                    href="tel:+917815838600"
                    className="mt-1 block text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    +91 78158 38600
                  </a>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-[#0F172A] text-cyan-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-semibold text-cyan-400">Location</p>

                  <p className="mt-1 text-gray-300">
                    Rajampet, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* GitHub */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-[#0F172A] text-cyan-400">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="font-semibold text-cyan-400">GitHub</p>

                  <a
                    href="https://github.com/JAREENA-SK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    github.com/JAREENA-SK
                  </a>
                </div>
              </div>
            </div>

            {/* Opportunities */}

            <div className="mt-10 rounded-2xl border border-white/5 bg-[#0F172A] p-6">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-cyan-400" size={23} />

                <h4 className="text-lg font-semibold">
                  Open to Opportunities
                </h4>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {opportunities.map((opportunity) => (
                  <span
                    key={opportunity}
                    className="rounded-full border border-cyan-500/20 bg-[#0B1020] px-4 py-2 text-sm text-cyan-300"
                  >
                    {opportunity}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume */}

            <motion.a
              href="/resume/Shaik-Jareena-Resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-7 py-3 font-semibold transition-colors duration-300 hover:bg-[#5A52E0]"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            action="https://formspree.io/f/xqerwlwr"
            method="POST"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-7 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,212,255,0.15)] sm:p-10"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Send a Message
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Complete the form below and your message will be delivered
              directly to my email.
            </p>

            <div className="mt-8">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                autoComplete="name"
                className="mb-6 w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="mb-6 w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter the subject"
                required
                className="mb-6 w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message"
                required
                className="mb-7 w-full resize-none rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black transition-colors duration-300 hover:bg-cyan-400"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
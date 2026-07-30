export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0B1020]/80 px-5 py-4 shadow-lg backdrop-blur-md sm:px-8">
        <a
          href="#top"
          className="text-2xl font-bold tracking-wide text-cyan-400"
        >
          SJ<span className="text-white">.</span>Portfolio
        </a>

        <ul className="hidden items-center gap-8 text-gray-300 md:flex">
          <li>
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
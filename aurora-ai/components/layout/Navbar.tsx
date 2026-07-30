export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0B1020]/80 px-5 py-4 shadow-lg backdrop-blur-md sm:px-8">

        {/* Logo */}

        <a href="#top" className="flex flex-col leading-none">

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent">
            SJ <span className="text-white">|</span> Portfolio
          </span>

          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-400">
            Senior Software Engineer
          </span>

        </a>

        {/* Navigation */}

        <ul className="hidden items-center gap-8 text-gray-300 md:flex">

          <li>
            <a
              href="#about"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
}
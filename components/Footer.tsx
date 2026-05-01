export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm mb-2">
              <span className="text-[#444]">&lt;</span>
              <span className="text-[#00ff88]">Python Bootcamp</span>
              <span className="text-[#444]"> /&gt;</span>
            </p>
            <p className="text-[#555] text-sm">Clinic of Neuroradiology, Magdeburg</p>
            <p className="text-[#555] text-sm">Otto-von-Guericke University</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://github.com/University-Clinic-of-Neuroradiology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#f0f0f0] transition-colors font-mono"
            >
              GitHub ↗
            </a>
            <a
              href="https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#f0f0f0] transition-colors font-mono"
            >
              Discussion ↗
            </a>
            <a
              href="mailto:python.bootcamp@med.ovgu.de"
              className="text-[#555] hover:text-[#f0f0f0] transition-colors font-mono"
            >
              python.bootcamp@med.ovgu.de
            </a>
          </div>

          {/* Legal */}
          <div className="text-sm text-[#444] font-mono">
            <p>Apache 2.0 License</p>
            <p>© 2024–{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

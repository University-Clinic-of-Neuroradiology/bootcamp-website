'use client'

import Link from 'next/link'
import { useState } from 'react'

const GITHUB_REPO = 'https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp'

const navItems = [
  { label: 'Courses', href: '/courses', external: false },
  { label: 'Technical Notes', href: '/technical', external: false },
  { label: 'FAQ', href: '/faq', external: false },
  { label: 'Wiki', href: `${GITHUB_REPO}/wiki`, external: true },
  { label: 'Discussion', href: `${GITHUB_REPO}/discussions`, external: true },
] as const

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#080808]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-mono text-sm hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-[#555]">&lt;</span>
            <span className="text-[#00ff88]">Python Bootcamp</span>
            <span className="text-[#555]"> /&gt;</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#999] hover:text-[#f0f0f0] transition-colors"
                  >
                    {item.label}
                    <span className="text-[#444] ml-0.5 text-xs">↗</span>
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm text-[#999] hover:text-[#f0f0f0] transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1.5 text-[#777] hover:text-[#f0f0f0] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a] px-4 py-4 space-y-1">
          {navItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-sm text-[#888] hover:text-[#f0f0f0] transition-colors rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label} <span className="text-[#444] text-xs">↗</span>
                </a>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                className="block px-3 py-2 text-sm text-[#888] hover:text-[#f0f0f0] transition-colors rounded"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}

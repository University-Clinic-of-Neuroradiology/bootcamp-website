'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface TheoryContentProps {
  title: string
  asideHtml: string
  mainHtml: string
}

export default function TheoryContent({ title, asideHtml, mainHtml }: TheoryContentProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any

    w.toggleSection = (id: string) => {
      const section = document.getElementById(id)
      if (!section) return
      section.classList.toggle('hidden')
      const btn = section.previousElementSibling as HTMLElement | null
      if (btn) btn.classList.toggle('font-bold')
    }

    w.toggleSubsection = (id: string) => {
      const el = document.getElementById(id)
      if (!el) return
      const header = el.previousElementSibling as HTMLElement | null
      el.classList.toggle('hidden')
      if (header) header.classList.toggle('collapsed')
    }

    w.toggleMenu = () => {
      const sidebar = document.getElementById('sidebar')
      if (!sidebar) return
      sidebar.classList.toggle('visible')
      sidebar.classList.toggle('hidden')
    }

    w.scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const backToTop = document.getElementById('theory-back-to-top')
    const onScroll = () => {
      if (!backToTop) return
      backToTop.classList.toggle('visible', window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function initAceEditors() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ace = (window as any).ace as
      | { edit: (el: HTMLElement) => AceEditor }
      | undefined
    if (!ace) return

    document.querySelectorAll<HTMLElement>('.theory-content-area pre').forEach((pre, i) => {
      if (pre.dataset.aceInit) return
      pre.dataset.aceInit = '1'

      const div = document.createElement('div')
      div.id = `theory-editor-${i}`
      div.style.height = '200px'
      div.style.width = '100%'
      pre.parentNode?.insertBefore(div, pre)
      const code = pre.textContent ?? ''
      pre.style.display = 'none'

      const editor = ace.edit(div)
      editor.setTheme('ace/theme/monokai')
      editor.session.setMode('ace/mode/python')
      editor.setValue(code.trim())
      editor.setReadOnly(false)
      editor.setOptions({ fontSize: '14px', showPrintMargin: false, showGutter: true })
    })
  }

  return (
    <div className="theory-page">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center gap-3 mb-6 pb-4 border-b border-[#1a1a1a]">
        <button
          onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any).toggleMenu?.()
        }}
          className="font-mono text-[#666] hover:text-[#f0f0f0] transition-colors text-xl"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <span className="font-mono text-[#888] text-sm">{title}</span>
      </div>

      {/* Sidebar + main content injected together as flex children */}
      <div
        className="theory-content-area flex"
        dangerouslySetInnerHTML={{ __html: asideHtml + mainHtml }}
      />

      {/* Back to top */}
      <button
        id="theory-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to Top"
        className="theory-back-to-top"
      >
        ↑
      </button>

      <Script
        src="https://cdn.jsdelivr.net/npm/ace-builds@1.32.8/src-min-noconflict/ace.js"
        strategy="afterInteractive"
        onLoad={initAceEditors}
      />
    </div>
  )
}

interface AceEditor {
  setTheme(theme: string): void
  session: { setMode(mode: string): void; on(event: string, cb: () => void): void }
  setValue(val: string): void
  setReadOnly(r: boolean): void
  setOptions(opts: Record<string, unknown>): void
}

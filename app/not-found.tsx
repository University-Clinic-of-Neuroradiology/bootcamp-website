import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <div className="pt-14 min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-mono text-[#00ff88] text-xs mb-6 tracking-widest uppercase">404</p>
        <h1 className="font-mono text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4">
          <span className="text-[#333]">&lt;</span>
          <span>Page Not Found</span>
          <span className="text-[#333]"> /&gt;</span>
        </h1>
        <p className="text-[#555] text-sm mb-10">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#00ff88] text-[#080808] font-mono font-semibold px-6 py-3 text-sm rounded hover:bg-[#00e87a] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

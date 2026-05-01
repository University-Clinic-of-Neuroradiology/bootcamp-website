'use client'

import { useState } from 'react'
import type { FaqItem } from '@/data/faq'

interface Props {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-[#1a1a1a] rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#0a0a0a] transition-colors"
          >
            <span className="font-mono text-sm text-[#d0d0d0] leading-relaxed">{item.question}</span>
            <span className="text-[#444] font-mono text-xl shrink-0 leading-none">
              {open === i ? '−' : '+'}
            </span>
          </button>

          {open === i && (
            <div className="px-5 pb-5 border-t border-[#111]">
              <p className="pt-4 text-[#888] text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

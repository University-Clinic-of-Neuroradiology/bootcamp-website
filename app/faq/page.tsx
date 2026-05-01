import FaqAccordion from '@/components/FaqAccordion'
import { faq } from '@/data/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the Python Bootcamp.',
}

export default function FaqPage() {
  return (
    <div className="pt-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">FAQ</p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-[#555] text-sm mb-12 leading-relaxed">
          Can&apos;t find an answer?{' '}
          <a
            href="https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777] hover:text-[#f0f0f0] transition-colors"
          >
            Ask in our discussion forum ↗
          </a>{' '}
          or email{' '}
          <a
            href="mailto:python.bootcamp@med.ovgu.de"
            className="text-[#777] hover:text-[#f0f0f0] transition-colors"
          >
            python.bootcamp@med.ovgu.de
          </a>
          .
        </p>

        <FaqAccordion items={faq} />

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  )
}

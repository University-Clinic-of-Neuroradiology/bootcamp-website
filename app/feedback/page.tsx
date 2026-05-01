import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Share feedback, report issues, or get in touch with the Python Bootcamp team.',
}

const GITHUB_REPO = 'https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp'

const channels = [
  {
    badge: 'DISCUSS',
    badgeColor: 'text-[#00ff88]',
    title: 'GitHub Discussions',
    description:
      'The fastest way to get help, share ideas, or discuss course content. Open to everyone — no GitHub account required to read.',
    link: `${GITHUB_REPO}/discussions`,
    linkLabel: 'Open Discussions ↗',
  },
  {
    badge: 'BUG',
    badgeColor: 'text-[#f59e0b]',
    title: 'Report an Issue',
    description:
      "Found a bug in a notebook or a broken link? Open a GitHub issue so we can track and fix it. Include as much detail as possible.",
    link: `${GITHUB_REPO}/issues/new`,
    linkLabel: 'Open an Issue ↗',
  },
  {
    badge: 'MAIL',
    badgeColor: 'text-[#38bdf8]',
    title: 'Email',
    description:
      "For private inquiries or questions you'd rather not post publicly, reach us by email. We aim to respond within a few days.",
    link: 'mailto:python.bootcamp@med.ovgu.de',
    linkLabel: 'python.bootcamp@med.ovgu.de',
  },
]

export default function FeedbackPage() {
  return (
    <div className="pt-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">feedback</p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">Get in Touch</h1>
        <p className="text-[#555] text-sm mb-16 max-w-xl leading-relaxed">
          We are always happy to receive feedback, bug reports, ideas, and suggestions. The bootcamp content is
          continuously evolving — your input helps us improve it.
        </p>

        <div className="space-y-4">
          {channels.map((ch) => (
            <div key={ch.title} className="border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-mono text-xs border border-[#1f1f1f] ${ch.badgeColor} px-2 py-0.5 rounded`}>
                  {ch.badge}
                </span>
                <h2 className="font-mono text-base font-semibold text-[#e0e0e0]">{ch.title}</h2>
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-4">{ch.description}</p>
              <a
                href={ch.link}
                target={ch.link.startsWith('mailto') ? undefined : '_blank'}
                rel={ch.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center font-mono text-sm text-[#555] hover:text-[#f0f0f0] transition-colors"
              >
                {ch.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

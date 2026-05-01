import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Notes',
  description: 'Setup guides for running Python Bootcamp notebooks — Google Colab and local installation.',
}

const GITHUB_REPO = 'https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp'

const guides = [
  {
    badge: 'COLAB',
    badgeColor: 'text-[#f59e0b]',
    title: 'Google Colab',
    description:
      'The recommended way to run notebooks. Only requires a browser and a free Google Account — no local installation needed.',
    steps: [
      'Create or sign in to your Google account at google.com',
      'Open any notebook by clicking the "Open in Colab" button on a course page',
      "Click Runtime → Run all to execute the notebook, or run cells one by one with Shift+Enter",
      'Your work is saved to Google Drive automatically',
    ],
    link: `${GITHUB_REPO}/wiki/Instructions-for-Google-Colab`,
    linkLabel: 'Full Colab guide on GitHub Wiki ↗',
  },
  {
    badge: 'LOCAL',
    badgeColor: 'text-[#38bdf8]',
    title: 'Local Installation',
    description:
      'Run notebooks offline using Anaconda and Jupyter. Recommended if you prefer a local development environment or have limited internet access.',
    steps: [
      'Download and install Anaconda from anaconda.com',
      'Open the Anaconda Navigator and launch Jupyter Notebook',
      'Clone or download the course notebooks from GitHub',
      'Open the .ipynb files in Jupyter and run them locally',
    ],
    link: `${GITHUB_REPO}/wiki/Installation-guide-(offline)`,
    linkLabel: 'Full installation guide on GitHub Wiki ↗',
  },
]

export default function TechnicalPage() {
  return (
    <div className="pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">technical notes</p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">Setup Guides</h1>
        <p className="text-[#555] text-sm mb-16 max-w-xl leading-relaxed">
          Choose how you want to run the course notebooks. Google Colab is recommended for its zero-setup experience.
        </p>

        <div className="space-y-6">
          {guides.map((guide) => (
            <div key={guide.title} className="border border-[#1a1a1a] rounded-lg p-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`font-mono text-xs border border-[#1f1f1f] ${guide.badgeColor} px-2 py-0.5 rounded`}
                >
                  {guide.badge}
                </span>
                <h2 className="font-mono text-lg font-bold text-[#f0f0f0]">{guide.title}</h2>
              </div>

              <p className="text-[#777] text-sm mb-6 leading-relaxed">{guide.description}</p>

              <div className="space-y-2 mb-6">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#888]">
                    <span className="font-mono text-[#333] shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono text-sm text-[#555] hover:text-[#f0f0f0] transition-colors"
              >
                {guide.linkLabel}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#111] pt-8">
          <p className="font-mono text-[#444] text-xs mb-3">{`// need help?`}</p>
          <p className="text-[#555] text-sm">
            If you run into issues, ask in our{' '}
            <a
              href={`${GITHUB_REPO}/discussions`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777] hover:text-[#f0f0f0] transition-colors"
            >
              GitHub Discussions ↗
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
        </div>
      </div>
    </div>
  )
}

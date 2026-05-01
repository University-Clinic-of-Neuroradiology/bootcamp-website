import Link from 'next/link'
import { courses, MAIN_COURSE_SLUGS, OPTIONAL_COURSE_SLUGS } from '@/data/courses'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Python Bootcamp — Where coding meets healthcare',
  description:
    'A free, interactive Python bootcamp for medical students and healthcare professionals. Learn DICOM, image analysis, machine learning, deep learning, and more.',
}

const GITHUB_REPO = 'https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp'

export default function HomePage() {
  const mainCourses = MAIN_COURSE_SLUGS.map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean)
  const optionalCourses = OPTIONAL_COURSE_SLUGS.map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean)

  return (
    <div className="pt-14">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-36">
        <p className="font-mono text-[#444] text-sm mb-6 tracking-wide">
          {'// free · open-source · healthcare-focused'}
        </p>

        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
          <span className="text-[#333]">&lt;</span>
          <span className="text-[#00ff88]">Python</span>
          <br className="sm:hidden" />
          <span className="text-[#00ff88]"> Bootcamp</span>
          <span className="text-[#333]"> /&gt;</span>
        </h1>

        <p className="text-[#777] text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
          Where coding meets healthcare.
        </p>
        <p className="text-[#555] text-base max-w-xl mb-12 leading-relaxed">
          A free, interactive Python course for medical students and healthcare professionals — no prior programming
          experience needed.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#00ff88] text-[#080808] font-mono font-semibold px-7 py-3 text-sm rounded hover:bg-[#00e87a] transition-colors"
          >
            Start Learning →
          </Link>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1f1f1f] text-[#777] font-mono px-7 py-3 text-sm rounded hover:border-[#2f2f2f] hover:text-[#f0f0f0] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* ── Skill Tracks ─────────────────────────────── */}
      <section className="border-t border-[#111] mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <p className="font-mono text-[#444] text-xs mb-8 tracking-widest uppercase">skill tracks</p>

        <div className="space-y-1">
          {mainCourses.map((course, i) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex items-center gap-5 px-4 py-4 rounded-lg border border-transparent hover:border-[#1a1a1a] hover:bg-[#0a0a0a] transition-all"
            >
              <span className="font-mono text-[#00ff88] text-sm w-7 shrink-0 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <span className="font-mono text-sm text-[#d0d0d0] group-hover:text-white transition-colors">
                  {course.title}
                </span>
                <p className="text-[#555] text-xs mt-0.5 truncate">{course.subtitle}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {course.notebooks.length > 0 && (
                  <span className="hidden sm:block font-mono text-xs text-[#333] border border-[#1a1a1a] px-2 py-0.5 rounded">
                    {course.notebooks.length} notebooks
                  </span>
                )}
                <span className="text-[#333] font-mono text-sm group-hover:text-[#00ff88] transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional tracks */}
        <p className="font-mono text-[#333] text-xs mt-12 mb-4 tracking-widest uppercase">optional tracks</p>
        <div className="space-y-1">
          {optionalCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex items-center gap-5 px-4 py-4 rounded-lg border border-transparent hover:border-[#111] hover:bg-[#0a0a0a] transition-all"
            >
              <span className="font-mono text-[#333] text-sm w-7 shrink-0 select-none">--</span>

              <div className="flex-1 min-w-0">
                <span className="font-mono text-sm text-[#666] group-hover:text-[#d0d0d0] transition-colors">
                  {course.title}
                </span>
                <p className="text-[#444] text-xs mt-0.5 truncate">{course.subtitle}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {course.underConstruction && (
                  <span className="hidden sm:block font-mono text-xs text-[#444] border border-[#1a1a1a] px-2 py-0.5 rounded">
                    in progress
                  </span>
                )}
                <span className="text-[#2a2a2a] font-mono text-sm group-hover:text-[#555] transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Resources ────────────────────────────────── */}
      <section className="border-t border-[#111] mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <p className="font-mono text-[#444] text-xs mb-8 tracking-widest uppercase">resources</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 border border-[#141414] rounded-lg hover:border-[#222] hover:bg-[#0a0a0a] transition-all"
          >
            <span className="inline-block font-mono text-xs border border-[#1f1f1f] text-[#555] px-2 py-0.5 rounded mb-4">
              GH
            </span>
            <p className="font-mono text-sm text-[#c0c0c0] group-hover:text-white transition-colors mb-1">
              GitHub Repository
            </p>
            <p className="text-[#444] text-xs leading-relaxed">Browse notebooks, raise issues, contribute</p>
          </a>

          <a
            href={`${GITHUB_REPO}/wiki/Instructions-for-Google-Colab`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 border border-[#141414] rounded-lg hover:border-[#222] hover:bg-[#0a0a0a] transition-all"
          >
            <span className="inline-block font-mono text-xs border border-[#1f1f1f] text-[#f59e0b] px-2 py-0.5 rounded mb-4">
              COLAB
            </span>
            <p className="font-mono text-sm text-[#c0c0c0] group-hover:text-white transition-colors mb-1">
              Google Colab Guide
            </p>
            <p className="text-[#444] text-xs leading-relaxed">Run notebooks in your browser — no install needed</p>
          </a>

          <a
            href={`${GITHUB_REPO}/wiki/Installation-guide-(offline)`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 border border-[#141414] rounded-lg hover:border-[#222] hover:bg-[#0a0a0a] transition-all"
          >
            <span className="inline-block font-mono text-xs border border-[#1f1f1f] text-[#38bdf8] px-2 py-0.5 rounded mb-4">
              LOCAL
            </span>
            <p className="font-mono text-sm text-[#c0c0c0] group-hover:text-white transition-colors mb-1">
              Local Installation
            </p>
            <p className="text-[#444] text-xs leading-relaxed">Set up Jupyter and Anaconda offline</p>
          </a>
        </div>
      </section>
    </div>
  )
}

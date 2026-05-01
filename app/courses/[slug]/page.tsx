import { courses, MAIN_COURSE_SLUGS } from '@/data/courses'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) return { title: 'Not Found' }
  return {
    title: course.title,
    description: course.description.split('\n')[0],
  }
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) notFound()

  const trackIndex = MAIN_COURSE_SLUGS.indexOf(slug)
  const isMainTrack = trackIndex >= 0

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-[#444] mb-10">
          <Link href="/courses" className="hover:text-[#888] transition-colors">
            courses
          </Link>
          <span>/</span>
          <span className="text-[#666]">{slug}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">
            {isMainTrack ? `skill track ${String(trackIndex + 1).padStart(2, '0')}` : 'optional track'}
          </p>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-[#f0f0f0] mb-3">{course.title}</h1>
          <p className="text-[#666] text-lg">{course.subtitle}</p>
        </div>

        {/* Description */}
        <div className="mb-6 border border-[#1a1a1a] rounded-lg p-6">
          <h2 className="font-mono text-[#00ff88] text-xs mb-4 tracking-widest uppercase">Description</h2>
          <div className="text-[#999] text-sm leading-relaxed space-y-2">
            {course.description.split('\n').map((line, i) =>
              line.trim().startsWith('-') ? (
                <div key={i} className="flex gap-2">
                  <span className="text-[#333] shrink-0 mt-0.5">▸</span>
                  <span>{line.replace(/^-\s*/, '')}</span>
                </div>
              ) : line.trim() ? (
                <p key={i}>{line}</p>
              ) : null,
            )}
          </div>
        </div>

        {/* Announcements */}
        {course.announcements && (
          <div className="mb-6 border border-[#1a1a1a] border-l-2 border-l-[#f59e0b] rounded-lg p-6">
            <h2 className="font-mono text-[#f59e0b] text-xs mb-3 tracking-widest uppercase">Announcements</h2>
            <p className="text-[#888] text-sm leading-relaxed">{course.announcements}</p>
          </div>
        )}

        {/* Requirements */}
        {course.requirements.length > 0 && (
          <div className="mb-10 border border-[#1a1a1a] rounded-lg p-6">
            <h2 className="font-mono text-[#666] text-xs mb-4 tracking-widest uppercase">Requirements</h2>
            <ul className="space-y-2">
              {course.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#888]">
                  <span className="text-[#333] font-mono shrink-0 mt-0.5">▸</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Syllabus / Notebooks */}
        {course.notebooks.length > 0 && (
          <div className="mb-10">
            <p className="font-mono text-[#444] text-xs mb-5 tracking-widest uppercase">Syllabus</p>
            <div className="space-y-2">
              {course.notebooks.map((nb, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border border-[#1a1a1a] rounded-lg hover:border-[#252525] hover:bg-[#0a0a0a] transition-all group"
                >
                  <span className="font-mono text-[#333] text-xs w-6 shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 font-mono text-sm text-[#c0c0c0] group-hover:text-white transition-colors">
                    {nb.name}
                  </span>

                  <a
                    href={nb.colabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 bg-[#f59e0b]/10 hover:bg-[#f59e0b]/20 border border-[#f59e0b]/25 text-[#f59e0b] text-xs font-mono px-3 py-1.5 rounded transition-all whitespace-nowrap"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    Open in Colab
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Under construction */}
        {course.underConstruction && (
          <div className="mb-10 border border-[#1a1a1a] border-l-2 border-l-[#333] rounded-lg p-6">
            <p className="font-mono text-[#444] text-sm">{`// notebooks coming soon — check back later`}</p>
          </div>
        )}

        {/* Theoretical Basics */}
        {course.theoryLink && (
          <div className="mb-10">
            <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">Theoretical Basics</p>
            <a
              href={`${BASE_PATH}${course.theoryLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#777] font-mono text-sm px-5 py-3 rounded-lg hover:border-[#2a2a2a] hover:text-[#f0f0f0] hover:bg-[#0a0a0a] transition-all"
            >
              <span className="text-[#00ff88] text-xs">▶</span>
              View Slide Deck
            </a>
          </div>
        )}

        {/* References */}
        {course.references && (
          <div className="border-t border-[#111] pt-8 mb-8">
            <p className="font-mono text-[#333] text-xs mb-3 tracking-widest uppercase">References</p>
            <p className="text-[#444] text-sm leading-relaxed font-mono">{course.references}</p>
          </div>
        )}

        {/* Footer nav */}
        <div className="border-t border-[#111] pt-8 flex flex-wrap justify-between gap-4 text-sm font-mono text-[#444]">
          <Link href="/courses" className="hover:text-[#888] transition-colors">
            ← All Courses
          </Link>
          <a
            href="https://github.com/University-Clinic-of-Neuroradiology/python-bootcamp/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#888] transition-colors"
          >
            Ask a question ↗
          </a>
        </div>
      </div>
    </div>
  )
}

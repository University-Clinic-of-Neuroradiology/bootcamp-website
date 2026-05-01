import Link from 'next/link'
import { courses, MAIN_COURSE_SLUGS, OPTIONAL_COURSE_SLUGS } from '@/data/courses'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses',
  description: 'All Python Bootcamp skill tracks — from Python basics to machine learning and prompt engineering.',
}

export default function CoursesPage() {
  const mainCourses = MAIN_COURSE_SLUGS.map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean)
  const optionalCourses = OPTIONAL_COURSE_SLUGS.map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean)

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        {/* Header */}
        <p className="font-mono text-[#444] text-xs mb-4 tracking-widest uppercase">skill tracks</p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-3">Course Overview</h1>
        <p className="text-[#555] text-sm max-w-xl mb-16 leading-relaxed">
          Follow the recommended sequence below — each track builds on the previous one. Optional tracks can be done at
          any time.
        </p>

        {/* Main sequence */}
        <div className="space-y-3">
          {mainCourses.map((course, i) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex gap-6 p-5 border border-[#1a1a1a] rounded-lg hover:border-[#2a2a2a] hover:bg-[#0a0a0a] transition-all"
            >
              <span className="font-mono text-[#00ff88] text-xl font-bold w-9 shrink-0 mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h2 className="font-mono text-[#e0e0e0] font-semibold group-hover:text-white transition-colors">
                    {course.title}
                  </h2>
                  {course.notebooks.length > 0 && (
                    <span className="font-mono text-[#3a3a3a] text-xs border border-[#1f1f1f] px-2 py-0.5 rounded">
                      {course.notebooks.length} notebooks
                    </span>
                  )}
                </div>
                <p className="text-[#555] text-sm leading-relaxed">
                  {course.description.split('\n')[0].replace(/^By the end.*/, '').trim() || course.subtitle}
                </p>
              </div>

              <span className="text-[#2a2a2a] font-mono self-center text-lg group-hover:text-[#00ff88] transition-colors shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Optional tracks */}
        <div className="mt-16">
          <p className="font-mono text-[#333] text-xs mb-4 tracking-widest uppercase">optional tracks</p>
          <div className="space-y-3">
            {optionalCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group flex gap-6 p-5 border border-[#141414] rounded-lg hover:border-[#1a1a1a] hover:bg-[#0a0a0a] transition-all"
              >
                <span className="font-mono text-[#2a2a2a] text-xl font-bold w-9 shrink-0 mt-0.5">--</span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h2 className="font-mono text-[#888] font-semibold group-hover:text-[#e0e0e0] transition-colors">
                      {course.title}
                    </h2>
                    {course.underConstruction && (
                      <span className="font-mono text-[#444] text-xs border border-[#1f1f1f] px-2 py-0.5 rounded">
                        in progress
                      </span>
                    )}
                  </div>
                  <p className="text-[#444] text-sm">{course.subtitle}</p>
                </div>

                <span className="text-[#222] font-mono self-center text-lg group-hover:text-[#555] transition-colors shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

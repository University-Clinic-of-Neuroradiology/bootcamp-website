import { readFileSync } from 'fs'
import { join } from 'path'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import TheoryContent from '@/components/TheoryContent'

const THEORY_SLUGS = ['basics', 'data_management', 'deeplearning', 'dicom', 'image_analysis', 'prompt']

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
/** Rewrite absolute GitHub Pages asset URLs to root-relative paths so images work in dev and prod. */
function rewriteAssetUrls(html: string): string {
  return html.replace(
    /https:\/\/university-clinic-of-neuroradiology\.github\.io\/bootcamp-website/g,
    BASE_PATH,
  )
}

function readHtmlFile(slug: string): string | null {
  try {
    return readFileSync(
      join(process.cwd(), 'public', 'theoretical_basics', `${slug}.html`),
      'utf-8',
    )
  } catch {
    return null
  }
}

function extractTitle(html: string): string {
  const m = html.match(/<title>(.*?)<\/title>/)
  return m ? m[1] : 'Theoretical Basics'
}

function extractAside(html: string): string {
  const start = html.indexOf('<aside')
  const end = html.indexOf('</aside>') + 8
  return start === -1 ? '' : html.slice(start, end)
}

function extractMain(html: string): string {
  const start = html.indexOf('<main')
  const end = html.indexOf('</main>') + 7
  return start === -1 ? '' : html.slice(start, end)
}

export function generateStaticParams() {
  return THEORY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const html = readHtmlFile(slug)
  if (!html) return { title: 'Not Found' }
  return { title: extractTitle(html) }
}

export default async function TheoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!THEORY_SLUGS.includes(slug)) notFound()

  const html = readHtmlFile(slug)
  if (!html) notFound()

  const title = extractTitle(html)
  const asideHtml = rewriteAssetUrls(extractAside(html))
  const mainHtml = rewriteAssetUrls(extractMain(html))

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-[#444] mb-8">
          <Link href="/courses" className="hover:text-[#888] transition-colors">
            courses
          </Link>
          <span>/</span>
          <span className="text-[#666]">theoretical basics</span>
          <span>/</span>
          <span className="text-[#666]">{slug.replace(/_/g, ' ')}</span>
        </nav>

        <TheoryContent title={title} asideHtml={asideHtml} mainHtml={mainHtml} />
      </div>
    </div>
  )
}

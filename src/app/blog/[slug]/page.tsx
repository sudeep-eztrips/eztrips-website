import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fetchBlogPost } from '@/lib/api'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)
  if (!post) return { title: 'Post Not Found — EzTrips' }
  return {
    title: post.seo_title || `${post.title} — EzTrips Blog`,
    description: post.seo_description || post.excerpt || '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        {post.hero_image && (
          <div className="relative h-[50vh] overflow-hidden">
            <Image src={post.hero_image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        )}

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12">
          <div className="mb-8">
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3 mt-4 text-sm text-on-surface/50">
              <span>By {post.author}</span>
              {post.published_at && (
                <>
                  <span>·</span>
                  <span>{new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </>
              )}
            </div>
          </div>

          {post.content ? (
            <div
              className="prose prose-lg max-w-none text-on-surface/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-on-surface/60">{post.excerpt}</p>
          )}

          <div className="mt-12 pt-8 border-t border-surface">
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </article>

        <section className="py-16 bg-primary-gradient text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to plan your trip?</h2>
          <p className="text-white/60 mb-6">Let EzTrips handle every detail.</p>
          <Link href="/#enquiry-form" className="btn-primary inline-block">Plan My Trip</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

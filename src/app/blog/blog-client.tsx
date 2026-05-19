'use client'

import { useState } from 'react'
import BlogCard from '@/components/BlogCard'
import type { BlogPost } from '@/lib/api'

function getCategory(tags: string[] | null): string {
  if (!tags || tags.length === 0) return 'General'
  return tags[0]
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const categories = ['All', ...Array.from(new Set(posts.map(p => getCategory(p.tags))))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => getCategory(p.tags) === activeCategory)

  return (
    <>
      {/* Category filter */}
      {categories.length > 2 && (
        <div className="bg-white border-b border-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex gap-2 overflow-x-auto py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface text-on-surface/60 hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  image={post.hero_image || ''}
                  category={getCategory(post.tags)}
                  title={post.title}
                  excerpt={post.excerpt || ''}
                  readTime={`${Math.max(3, Math.round((post.excerpt?.length || 100) / 50))} min read`}
                  date={post.published_at ? new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-on-surface mb-2">No posts yet</p>
              <p className="text-on-surface/50">Check back soon — we&apos;re writing new guides every week.</p>
            </div>
          )}

          <div className="mt-16 text-center py-16 bg-surface rounded-2xl">
            <p className="text-2xl font-bold text-on-surface mb-3">More stories coming soon</p>
            <p className="text-on-surface/60 mb-6">Follow us on Instagram for daily travel inspiration and exclusive deals.</p>
            <a
              href="https://instagram.com/eztrips.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm px-6 py-3"
            >
              Follow @eztrips.in
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

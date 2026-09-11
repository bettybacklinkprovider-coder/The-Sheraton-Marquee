import React, { useState } from 'react';
import {
  Crown,
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  Share2,
} from 'lucide-react';
import { PageId, Language, BlogPost } from '../../types';
import { BLOG_POSTS, MARQUEE_INFO } from '../../data/marqueeData';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, language }) => {
  const isUrdu = language === 'ur';
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'شادی بلاگ و رہنمائی' : 'Wedding Journals & Insights'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              شادی کی تیاری، نئے ٹرینڈز اور ماہرانہ مشورے
            </span>
          ) : (
            <>
              Insights from Faisalabad’s <span className="gold-gradient-text">Premier Marquee</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          Expert advice from our master chefs, event directors, and set designers to help you plan an unforgettable wedding reception in Punjab.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div
                className="relative h-44 p-6 flex flex-col justify-between overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1C1009 0%, #2A170F 50%, #100805 100%)`,
                  borderBottom: `2px solid ${post.themeColor || '#D4AF37'}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${post.themeColor || '#D4AF37'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#6B1724] border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30">
                    {post.readBadge}
                  </span>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-xs text-[#E0D7C6]">
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-cinzel tracking-wider text-[11px] uppercase">
                    Sheraton Advisory Bulletin
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#A0988E]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="font-cinzel text-base sm:text-lg font-bold text-[#FAF7F2] line-clamp-2">
                  {isUrdu ? post.urduTitle : post.title}
                </h2>

                <p className="text-xs text-[#C5BDB2] line-clamp-3 leading-relaxed">
                  {isUrdu ? post.urduExcerpt : post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#D4AF37]/15 mt-4 flex items-center justify-between">
              <span className="text-[11px] text-[#A0988E]">By {post.author}</span>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs text-[#D4AF37] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-[#140D09] border-2 border-[#D4AF37]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-[#D4AF37]/30 bg-[#1C120D]">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 rounded text-[#C5A059] hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#FAF7F2]">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold">
                {isUrdu ? selectedPost.urduTitle : selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-[#A0988E] border-b border-[#D4AF37]/20 pb-4">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div
                className="p-6 rounded-xl border border-[#D4AF37]/40 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1C1009 0%, #2A170F 50%, #100805 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${selectedPost.themeColor || '#D4AF37'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '16px 16px',
                  }}
                />
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    Executive Protocol Insight • {selectedPost.category}
                  </span>
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <p className="relative z-10 text-xs italic text-[#F9E7B9] font-medium leading-relaxed">
                  "{selectedPost.excerpt}"
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#C5BDB2] leading-relaxed">
                {selectedPost.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#6B1724]/40 border border-[#D4AF37]/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#FAF7F2]">Need Help Planning Your Wedding?</p>
                  <p className="text-[11px] text-[#C5BDB2]">Speak directly with our General Manager Rana Sabir.</p>
                </div>
                <a
                  href={`tel:${MARQUEE_INFO.phone}`}
                  className="px-4 py-2 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase"
                >
                  Call 0321-8662726
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

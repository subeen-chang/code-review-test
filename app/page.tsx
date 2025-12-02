import Link from 'next/link';
import { members } from '@/data/members';
import { newsItems } from '@/data/news';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            ENHYPEN
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Connect Different Dimensions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/members"
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-all transform hover:scale-105"
            >
              Meet the Members
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet ENHYPEN</h2>
          <p className="text-center text-gray-600 mb-12">Seven talented members, one incredible team</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {members.map((member) => (
              <Link
                key={member.id}
                href={`/members#${member.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 mb-3">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: member.color + '20' }}
                  >
                    {member.emoji}
                  </div>
                </div>
                <h3 className="font-semibold text-center group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">{member.koreanName}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/members"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              View All Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-center text-gray-600 mb-12">Stay updated with ENHYPEN</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.slice(0, 4).map((news) => (
              <Link
                key={news.id}
                href={`/news#${news.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the ENGENE Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with fans worldwide and share your love for ENHYPEN
          </p>
          <Link
            href="/community"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-all transform hover:scale-105"
          >
            Join Community
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">7</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2020</div>
              <div className="text-gray-600">Debut Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Albums</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-600">ENGENE Love</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { members } from '@/data/members';
import { newsItems } from '@/data/news';
import { motion } from 'framer-motion';
import FloatingElements from '@/components/animations/FloatingElements';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';
import ParallaxText from '@/components/animations/ParallaxText';
import MagneticButton from '@/components/animations/MagneticButton';
import TextReveal from '@/components/animations/TextReveal';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">
        <div className="absolute inset-0 bg-black/20" />
        <FloatingElements />

        <div className="relative z-10 text-center text-white px-4">
          <TextReveal
            text="ENHYPEN"
            className="text-6xl md:text-8xl font-bold mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Connect Different Dimensions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <Link
                href="/members"
                className="block px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-all"
              >
                Meet the Members
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/gallery"
                className="block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                View Gallery
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-4">Meet ENHYPEN</h2>
            <p className="text-center text-gray-600 mb-12">Seven talented members, one incredible team</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {members.map((member, index) => (
              <FadeInWhenVisible key={member.id} delay={index * 0.1}>
                <Link href={`/members#${member.id}`} className="group">
                  <motion.div
                    whileHover={{ y: -10, rotateY: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 mb-3"
                  >
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-6xl"
                      style={{ backgroundColor: member.color + '20' }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {member.emoji}
                    </motion.div>
                  </motion.div>
                  <h3 className="font-semibold text-center group-hover:text-purple-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">{member.koreanName}</p>
                </Link>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.8}>
            <div className="text-center mt-10">
              <MagneticButton>
                <Link
                  href="/members"
                  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  View All Profiles
                </Link>
              </MagneticButton>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ParallaxText speed={-0.3}>
            <h2 className="text-4xl font-bold text-center mb-4">Latest News</h2>
            <p className="text-center text-gray-600 mb-12">Stay updated with ENHYPEN</p>
          </ParallaxText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.slice(0, 4).map((news, index) => (
              <FadeInWhenVisible key={news.id} delay={index * 0.15} direction="up">
                <Link href={`/news#${news.id}`} className="group">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center overflow-hidden"
                    >
                      <span className="text-4xl">📰</span>
                    </motion.div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium"
                        >
                          {news.category}
                        </motion.span>
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.6}>
            <div className="text-center mt-10">
              <MagneticButton>
                <Link
                  href="/news"
                  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  View All News
                </Link>
              </MagneticButton>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <FloatingElements />

        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold mb-4">Join the ENGENE Community</h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-xl mb-8 opacity-90">
              Connect with fans worldwide and share your love for ENHYPEN
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <MagneticButton>
              <Link
                href="/community"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-all"
              >
                Join Community
              </Link>
            </MagneticButton>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '7', label: 'Members' },
              { value: '2020', label: 'Debut Year' },
              { value: '5+', label: 'Albums' },
              { value: '∞', label: 'ENGENE Love' }
            ].map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      delay: index * 0.1
                    }}
                    className="text-4xl font-bold text-purple-600 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

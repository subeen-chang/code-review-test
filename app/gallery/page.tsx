'use client';

import { useState } from 'react';
import { galleryItems } from '@/data/gallery';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore photos and videos of ENHYPEN
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('photo')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filter === 'photo'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📸 Photos
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filter === 'video'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            🎥 Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.category === 'photo' ? '📸' : '🎥'}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold">
                      {item.category === 'photo' ? 'View Photo' : 'Watch Video'}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <div className="flex gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No items found</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="mb-6 opacity-90">
            Follow ENHYPEN on social media for the latest photos and videos
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com/ENHYPEN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/enhypen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/c/ENHYPEN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

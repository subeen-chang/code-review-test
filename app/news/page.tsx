'use client';

import { useState } from 'react';
import { newsItems, scheduleItems } from '@/data/news';

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<'news' | 'schedule'>('news');

  const categoryColors = {
    comeback: 'bg-purple-100 text-purple-600',
    concert: 'bg-pink-100 text-pink-600',
    award: 'bg-yellow-100 text-yellow-600',
    media: 'bg-blue-100 text-blue-600',
    announcement: 'bg-green-100 text-green-600',
    fanmeeting: 'bg-red-100 text-red-600',
    broadcast: 'bg-indigo-100 text-indigo-600',
    release: 'bg-orange-100 text-orange-600',
    event: 'bg-teal-100 text-teal-600'
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            News & Schedule
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest from ENHYPEN
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('news')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'news'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📰 Latest News
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'schedule'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📅 Upcoming Schedule
          </button>
        </div>

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                id={news.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden scroll-mt-24"
              >
                <div className="md:flex">
                  {/* News Image */}
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-400 to-pink-400 aspect-video md:aspect-square flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>

                  {/* News Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[news.category]}`}>
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Section */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            {scheduleItems.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Date Display */}
                  <div className="md:w-32 text-center">
                    <div className="inline-block bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl p-4">
                      <div className="text-sm font-semibold mb-1">
                        {new Date(schedule.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-3xl font-bold">
                        {new Date(schedule.date).getDate()}
                      </div>
                      <div className="text-xs mt-1">
                        {new Date(schedule.date).getFullYear()}
                      </div>
                    </div>
                  </div>

                  {/* Schedule Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[schedule.type]}`}>
                        {schedule.type}
                      </span>
                      {schedule.time && (
                        <span className="text-sm text-gray-500">🕐 {schedule.time}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {schedule.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{schedule.description}</p>
                    {schedule.location && (
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <span>📍</span> {schedule.location}
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-semibold">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Subscribe Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="mb-6 opacity-90">
            Follow ENHYPEN on social media for real-time updates
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/ENHYPEN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm font-semibold"
            >
              Follow on Twitter
            </a>
            <a
              href="https://weverse.io/enhypen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm font-semibold"
            >
              Join Weverse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

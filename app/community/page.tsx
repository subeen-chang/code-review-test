'use client';

import { useState } from 'react';

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const samplePosts: Post[] = [
  {
    id: '1',
    author: 'ENGENE_Forever',
    avatar: '💜',
    content: 'Just watched the latest ENHYPEN performance and I\'m absolutely blown away! Their stage presence keeps getting better! 🔥',
    timestamp: '2 hours ago',
    likes: 234,
    comments: 45
  },
  {
    id: '2',
    author: 'Heeseung_Fan',
    avatar: '🦌',
    content: 'Can we talk about how incredible the vocals were during the last concert? I\'m still not over it! 🎤',
    timestamp: '5 hours ago',
    likes: 189,
    comments: 32
  },
  {
    id: '3',
    author: 'ENGENE_Global',
    avatar: '🌍',
    content: 'Excited for the upcoming world tour! Who else is going to the concerts? Let\'s connect! ✈️',
    timestamp: '1 day ago',
    likes: 567,
    comments: 123
  }
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [newPost, setNewPost] = useState('');

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: String(Date.now()),
        author: 'You',
        avatar: '😊',
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        comments: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ENGENE Community
          </h1>
          <p className="text-xl text-gray-600">
            Connect with fellow fans from around the world
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Posts</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Active</div>
          </div>
        </div>

        {/* Create Post */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">Share your thoughts</h3>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind, ENGENE?"
            className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            rows={4}
          />
          <div className="flex justify-end">
            <button
              onClick={handleSubmitPost}
              disabled={!newPost.trim()}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{post.author}</h4>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

              {/* Post Actions */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors ml-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Community Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">💜</div>
              <h4 className="font-semibold mb-2">Be Respectful</h4>
              <p className="text-sm opacity-90">Treat all members with kindness and respect</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-semibold mb-2">Stay Positive</h4>
              <p className="text-sm opacity-90">Spread positivity and support for ENHYPEN</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2">Connect & Share</h4>
              <p className="text-sm opacity-90">Share your love and connect with fans worldwide</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="font-semibold mb-4">Join Official Communities</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://weverse.io/enhypen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors font-medium"
            >
              Weverse
            </a>
            <a
              href="https://twitter.com/ENHYPEN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors font-medium"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/enhypen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

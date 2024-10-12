import React, { useState, useEffect } from 'react';
import VirtualScroll from './VirtualScroll';
import { Post } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5002/api/posts?page=${page}&limit=20`);
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, ...data.posts]);
      setTotalPosts(data.totalPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">LinkedIn Feed</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <VirtualScroll 
          items={posts} 
          itemHeight={200} 
          windowHeight={600} 
          loadMore={loadMore}
          hasMore={posts.length < totalPosts}
        />
        {loading && <div className="text-center py-4">Loading...</div>}
      </main>
    </div>
  );
};

export default App;

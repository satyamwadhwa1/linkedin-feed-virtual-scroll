import React, { useState, useEffect, useRef } from 'react';
import PostItem from './PostItem';
import { Post } from './types';

interface VirtualScrollProps {
  items: Post[];
  itemHeight: number;
  windowHeight: number;
  loadMore: () => void;
  hasMore: boolean;
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({ items, itemHeight, windowHeight, loadMore, hasMore }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleItemCount = Math.ceil(windowHeight / itemHeight);
  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount, items.length);

  const visibleItems = items.slice(startIndex, endIndex);

  const onScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
      
      if (containerRef.current.scrollHeight - containerRef.current.scrollTop <= containerRef.current.clientHeight + 200 && hasMore) {
        loadMore();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', onScroll);
      return () => container.removeEventListener('scroll', onScroll);
    }
  }, [hasMore]);

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-lg shadow-md overflow-y-auto"
      style={{ height: `${windowHeight}px` }}
    >
      <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              top: `${(startIndex + index) * itemHeight}px`,
              height: `${itemHeight}px`,
            }}
          >
            <PostItem post={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScroll;

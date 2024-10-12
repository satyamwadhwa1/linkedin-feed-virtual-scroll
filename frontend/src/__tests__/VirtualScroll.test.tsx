import React from 'react';
import { render, screen } from '@testing-library/react';
import VirtualScroll from '../VirtualScroll';
import { Post } from '../types';

const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', content: 'Content 1', author: 'User 1', likes: 10, timestamp: '2023-05-01T12:00:00Z' },
  { id: 2, title: 'Post 2', content: 'Content 2', author: 'User 2', likes: 20, timestamp: '2023-05-02T12:00:00Z' },
  { id: 3, title: 'Post 3', content: 'Content 3', author: 'User 3', likes: 30, timestamp: '2023-05-03T12:00:00Z' },
];

const mockLoadMore = jest.fn();

test('renders visible items', () => {
  render(
    <VirtualScroll 
      items={mockPosts} 
      itemHeight={200} 
      windowHeight={400} 
      loadMore={mockLoadMore}
      hasMore={true}
    />
  );
  
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();
  expect(screen.queryByText('Post 3')).not.toBeInTheDocument();
});

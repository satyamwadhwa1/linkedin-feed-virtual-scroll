import React from 'react';
import { Post } from './types';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-2">{post.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By: {post.author}</span>
        <span>Likes: {post.likes}</span>
      </div>
      <div className="text-xs text-gray-400 mt-1">
        {new Date(post.timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default PostItem;

import express from 'express';
import cors from 'cors';
import { generatePosts } from './data';
import { Post } from './types';

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

const posts: Post[] = generatePosts(10000);

app.get('/api/posts', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const search = (req.query.search as string) || '';

  let filteredPosts = posts;

  // Apply search filter
  if (search) {
    filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  res.json({
    totalPosts: filteredPosts.length,
    currentPage: page,
    totalPages: Math.ceil(filteredPosts.length / limit),
    posts: paginatedPosts
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

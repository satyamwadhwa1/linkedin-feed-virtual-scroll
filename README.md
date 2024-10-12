# LinkedIn-like Feed with Virtual Scrolling

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Architecture](#architecture)
5. [Implementation Details](#implementation-details)
6. [Setup and Installation](#setup-and-installation)
7. [Running the Application](#running-the-application)
8. [Testing](#testing)
9. [Performance Optimization](#performance-optimization)
10. [Future Improvements](#future-improvements)

## Project Overview

This project implements a LinkedIn-like feed with virtual scrolling, optimized for handling large datasets. It consists of a React frontend with TypeScript and a Node.js backend with Express. The application efficiently renders a list of 10,000 items using virtual scrolling techniques to ensure smooth performance.

## Features

- Virtual scrolling for efficient rendering of large lists
- Dynamic data loading as the user scrolls
- Responsive design using Tailwind CSS
- Custom styling for an appealing UI
- Performance optimization for smooth scrolling
- Backend server with pagination

## Technology Stack

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Webpack
- Backend:
  - Node.js
  - Express
  - TypeScript
- Testing:
  - Jest
  - React Testing Library

## Architecture

The application follows a client-server architecture:

1. **Frontend (Client)**:
   - React components for UI rendering
   - Virtual scrolling implementation for efficient list rendering
   - State management using React hooks
   - Tailwind CSS for styling

2. **Backend (Server)**:
   - Express.js server
   - RESTful API endpoints for fetching paginated post data
   - In-memory data storage (simulated database)

3. **Data Flow**:
   - The client requests paginated data from the server
   - The server responds with a subset of posts
   - The client renders the received posts using virtual scrolling
   - As the user scrolls, the client requests more data when needed

## Implementation Details

### Frontend

1. **App Component (`App.tsx`)**:
   - Manages the overall state of the application
   - Fetches initial data and handles loading more posts
   - Renders the main layout and the VirtualScroll component

2. **VirtualScroll Component (`VirtualScroll.tsx`)**:
   - Implements virtual scrolling logic
   - Renders only the visible items based on the current scroll position
   - Triggers the loadMore function when the user scrolls near the bottom

3. **PostItem Component (`PostItem.tsx`)**:
   - Renders individual post items
   - Displays post title, content, author, likes, and timestamp

### Backend

1. **Server Setup (`index.ts`)**:
   - Configures Express server
   - Defines API endpoints for fetching posts

2. **Data Generation (`data.ts`)**:
   - Generates mock post data
   - Simulates a database with 10,000 posts

3. **API Endpoints**:
   - GET `/api/posts`: Returns paginated post data
     - Query parameters:
       - `page`: Page number (default: 1)
       - `limit`: Number of posts per page (default: 20)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/satyamwadhwa1/linkedin-feed-virtual-scroll.git
   cd linkedin-feed-virtual-scroll
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up Tailwind CSS for the frontend:
   ```
   cd frontend
   npx tailwindcss init -p
   ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`.

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```
   The application will open in your default web browser at `http://localhost:3000`.

## Testing

To run the frontend tests:
```
cd frontend
npm test
```

The tests cover the main components and their functionality, including:
- Rendering of the VirtualScroll component
- Correct display of visible items
- Triggering of the loadMore function when scrolling

## Performance Optimization

1. **Virtual Scrolling**: 
   - Only renders visible items, significantly reducing DOM elements and improving performance.
   - Recycles DOM elements as the user scrolls, minimizing memory usage.

2. **Pagination**: 
   - The backend implements pagination to limit the amount of data transferred in each request.
   - The frontend requests data in small chunks, reducing initial load time and memory usage.

3. **React Optimization**: 
   - Uses functional components and hooks for efficient rendering and state management.
   - Implements `useCallback` and `useMemo` where appropriate to prevent unnecessary re-renders.

4. **Tailwind CSS**: 
   - Provides efficient, utility-first CSS that helps in creating a responsive design without performance overhead.

## Future Improvements

1. Implement caching mechanisms for fetched data to reduce server load.
2. Add more interactive features like liking posts or adding comments.
3. Implement server-side filtering and sorting options.
4. Enhance accessibility features for keyboard navigation and screen readers.
5. Implement real-time updates using WebSockets for a more dynamic feed.
6. Add user authentication and personalized feeds.
7. Optimize images and implement lazy loading for media content.
8. Implement error boundaries for better error handling in the React application.


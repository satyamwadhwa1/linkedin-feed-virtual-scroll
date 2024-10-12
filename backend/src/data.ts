import { Post } from './types';

const tataPosts = [
  "Excited to announce TATA's latest innovation in sustainable technology! #TATAInnovation #Sustainability",
  "Ratan Tata's vision continues to inspire our work at TATA. Here's how we're making a difference. #RatanTata #TATALegacy",
  "TATA Group expands its global footprint with a new partnership. Read more about our international growth. #TATAGlobal",
  "Reflecting on Ratan Tata's leadership lessons and how they shape TATA's corporate culture. #LeadershipInsights #TATACulture",
  "TATA's commitment to social responsibility: Our latest initiative to support education in rural India. #TATAForSociety #Education",
  "Innovation at its core: How TATA is revolutionizing the automotive industry with electric vehicles. #TATAElectric #FutureOfMobility",
  "Ratan Tata's entrepreneurial spirit: Inspiring the next generation of leaders at TATA. #EntrepreneurshipJourney #TATALeadership",
  "TATA's digital transformation journey: Embracing technology to enhance customer experiences. #DigitalTATA #CustomerFirst",
  "Celebrating TATA's heritage: A look back at our 150+ years of excellence and innovation. #TATAHeritage #LegacyOfExcellence",
  "Ratan Tata's philosophy on ethical business practices and how it guides TATA's operations globally. #BusinessEthics #TATAValues"
];

export function generatePosts(count: number): Post[] {
  const posts: Post[] = [];
  for (let i = 0; i < count; i++) {
    const randomPost = tataPosts[Math.floor(Math.random() * tataPosts.length)];
    posts.push({
      id: i + 1,
      title: `TATA Insights: ${randomPost.split('.')[0]}`,
      content: `${randomPost} At TATA, we believe in driving positive change through innovation and ethical business practices. Our commitment to excellence, inspired by Ratan Tata's visionary leadership, continues to shape our journey in creating value for our stakeholders and society at large.`,
      author: `TATA Professional ${Math.floor(Math.random() * 100) + 1}`,
      likes: Math.floor(Math.random() * 1000),
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
    });
  }
  return posts;
}

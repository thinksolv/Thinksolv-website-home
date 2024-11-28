// lib/getPosts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      data,
      content,
    };
  });

  return allPosts;
}

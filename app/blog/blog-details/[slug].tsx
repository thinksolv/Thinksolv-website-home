// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/getPosts';
import ReactMarkdown from 'react-markdown';
import remarkHtml from 'remark-html';

interface PostProps {
  post: {
    slug: string;
    data: {
      title: string;
      date: string;
      [key: string]: any;
    };
    content: string;
  };
}

const SingleBlogPage: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="blog-post">
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <ReactMarkdown children={post.content} remarkPlugins={[remarkHtml]} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

export default SingleBlogPage;

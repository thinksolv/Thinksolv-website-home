import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
    <Header />
    <div className="pt-10">
    <SectionHeader
          headerInfo={{
            title: "Blog Page",
            subtitle: "Explore Our Expert Blog Content ",
            description:
              "We provide a range of innovative services designed to streamline your business processes and enhance productivity.",
          }}
        />
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-15 lg:py-25 xl:py-5">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
      <Footer />
    </div>  
    </>
  );
};

export default BlogPage;

import { useEffect, useState } from "react";
import BlogCard from "../../common/blog-card.component";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/client";
import BlogCardSkeleton from "@/components/common/blog-card-skeleton-loader.compoent";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]
    | order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, category, authorName, image, body, banner}`;

export async function loader() {
    return { posts: await client.fetch<SanityDocument[]>(POSTS_QUERY) };
}

const BlogList = () => {
    const [posts, setPosts] = useState<SanityDocument[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await loader();
                // Filtering posts where banner is null
                const filteredPosts = response?.posts.filter((post) => post.banner === null);
                setPosts(filteredPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="w-full mt-[40px] md:mt-[20px]">
            <div className="w-full flex items-center justify-between flex-wrap md:gap-[32px] md:justify-start">
                {isLoading
                    ? // Render 3 skeleton loaders while data is being fetched
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="w-full md:w-[45%] lg:w-[30.33%]">
                            <BlogCardSkeleton />
                        </div>
                    ))
                    : posts.map((post, index) => (
                        <div key={post._id || index} className="w-full md:w-[45%] lg:w-[30.33%]">
                            <BlogCard post={post} />
                        </div>
                    ))}
            </div>

            <hr className="h-1 border-t-[#E9EAEB] border-t" />

            {/* Pagination (if needed) can go here */}
        </div>
    );
};

export default BlogList;




{/* <div className="w-full mt-4 flex items-center justify-between lg:mt-[64px]" >
                    <div className="w-9 gap-2 rounded-md p-2 bg-white border-[#D5D7DA] border shadow-[#0A0D120D] flex items-center justify-center lg:w-auto lg:border-none" >
                        <ArrowLeft size={22} color="#414651" cursor={"pointer"} />
                        <p className="text-sm font-normal text-[#414651] hidden lg:block" >Previous</p>
                    </div>

                    <p className="text-sm font-normal text-[#414651]" >Page 1 of 10</p>
                    <div className="w-9 gap-2 rounded-md p-2 bg-white border-[#D5D7DA] border shadow-[#0A0D120D] flex items-center justify-center lg:w-auto lg:border-none" >
                        <ArrowRight size={22} color="#414651" cursor={"pointer"} />
                        <p className="text-sm font-normal text-[#414651] hidden lg:block" >Next</p>

                    </div>
                </div> */}
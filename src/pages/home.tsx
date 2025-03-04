import { useState, useEffect } from "react";
import Footer from "@/components/common/footer.component";
import Navbar from "@/components/common/navbar.component";
import BlogList from "@/components/pages/home/blog-list.component";
import HomeBlogBanner from "@/components/pages/home/home-blog-banner.component";
import NewsLetter from "@/components/pages/home/news-letter.component";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";

// const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]
//   | order(publishedAt desc)[0...12]{_id, title, slug, publishedAt,category,authorName,image,body}`;

// export async function loader() {
//     return { posts: await client.fetch<SanityDocument[]>(POSTS_QUERY) };
// }

const Home = () => {
    // const [posts, setPosts] = useState<SanityDocument[]>([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await loader();
    //             setPosts(response.posts);
    //             console.log("blogs", response.posts);
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            <Navbar />

            <div className="w-full mt-[64px] px-4 pb-46 md:px-14 lg:px-[112px]">
                <div className="w-full">
                    <p className="text-center text-sm font-semibold text-[#6941C6]">
                        Our Blog
                    </p>
                    <h1 className="text-center font-semibold text-[#181D27] text-3xl mt-[12px] lg:text-4xl">
                        Resources and insights
                    </h1>
                    <p className="text-center text-lg font-normal text-[#535862] mt-[16px]">
                        The latest industry news, interviews, technologies, and resources.
                    </p>
                </div>

                <div className="w-full mt-[16px] mx-auto md:w-[70%] md:flex md:items-stretch md:justify-between gap-[16px] lg:w-[40%] lg:mt-[48px]">
                    <div className="w-full md:w-[70%]">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border-[#D5D7DA] border-1 mx-auto p-3.5 text-[#717680] font-normal"
                        />
                        <p className="text-center text-sm mt-1.5 font-normal text-[#535862] lg:text-left">
                            We care about your data in our{" "}
                            <span className="underline">privacy policy</span>.
                        </p>
                    </div>
                    <div className="w-full md:w-[30%] mt-4 md:mt-0">
                        <Button className="mx-auto w-full py-6 rounded-md md:w-[129px]">
                            Get Started
                        </Button>
                    </div>
                </div>

                <HomeBlogBanner />

                {/* Pass the posts data to your BlogList component if needed */}
                <BlogList />

                <NewsLetter />
            </div>

            <Footer />
        </>
    );
};

export default Home;

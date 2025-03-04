import { useEffect, useState } from "react";
import Footer from "@/components/common/footer.component";
import Navbar from "@/components/common/navbar.component";
import PostContent from "@/components/pages/single-post/post-content.component";
import WeeklyNewsletter from "@/components/pages/single-post/weekly-newsletter.component";
import { client } from "@/sanity/client";
import moment from "moment";
import { useParams } from "react-router";
import { categoryColorHandler } from "@/lib/categoryColor";
import { hexToRGBA } from "@/lib/hexTORGBA";
import { urlFor } from "@/lib/imageUrl";

// Query to fetch a single post by slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const SinglePost = () => {
    const { title, id } = useParams(); // expects your route to include :slug
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    console.log("slug", title, id)
    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await client.fetch(POST_QUERY, { slug: title });
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [title]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found</div>;

    console.log(post)
    const categoryColor = post?.category ? categoryColorHandler(post?.category) : "#000";
    const faintColor = hexToRGBA(categoryColor, 0.3);

    return (
        <>
            <Navbar />
            <div className="w-full mt-[64px] px-4 pb-36 md:px-14 lg:px-[112px] lg:pb-36">
                <div className="w-full">
                    <div className="min-w-[163px] w-[163px] rounded-full flex items-center justify-between bg-[#F9F5FF] border border-[#E9D7FE] p-2" style={{
                        backgroundColor: faintColor,
                        borderColor: categoryColor,
                    }}>
                        <p className="text-primary font-medium text-xs capitalize" style={{
                            color: categoryColor
                        }}>
                            {post?.category || "Category"}
                        </p>
                        <p className="text-primary font-medium text-xs" style={{
                            color: categoryColor
                        }}>
                            {post?.readTime || "8 min read"}
                        </p>
                    </div>
                    <div className="w-full mt-[16px]">
                        <h1 className="text-[#181D27] font-semibold text-4xl">
                            {post?.title}
                        </h1>
                        {/* <p className="text-lg text-[#535862] font-normal mt-[16px]">
                            {post?.excerpt ||
                                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        </p> */}
                    </div>
                </div>
                <div className="w-full mt-[64px]">
                    <div className="w-full">
                        <img
                            src={urlFor(post?.image).url()}
                            alt={post?.title}
                            className="w-full h-[240px] object-cover lg:h-[640px]"
                        />
                    </div>
                    <div className="w-full mt-[32px] flex items-center justify-between lg:justify-start lg:gap-3.5 lg:w-1/2">
                        <div className="w-1/2">
                            <p className="text-primary font-semibold text-sm">Written by</p>
                            <p className="text-[#181D27] font-medium text-lg">{post?.authorName}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-primary font-semibold text-sm">Published on</p>
                            <p className="text-[#181D27] font-medium text-lg">
                                {moment(post?.publishedAt).format("D MMM YYYY")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full block lg:flex md:block items-start justify-between mt-[64px] lg:gap-[96px]">
                    <PostContent content={post?.body} />
                    <WeeklyNewsletter />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SinglePost;

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/client";
import { urlFor } from "@/lib/imageUrl";
import moment from "moment";
import { categoryColorHandler } from "@/lib/categoryColor";
import { useNavigate } from "react-router";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]
    | order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, category, authorName, image, body, banner}`;

export async function loader() {
    return { posts: await client.fetch<SanityDocument[]>(POSTS_QUERY) };
}

// Helper function to convert Portable Text to plain text.
function portableTextToPlainText(portableText: any) {
    if (!Array.isArray(portableText)) return "";
    return portableText
        .map((block) => {
            if (block._type !== "block" || !block.children) return "";
            return block.children.map((child: any) => child.text).join("");
        })
        .join("\n\n");
}

const HomeBlogBanner = () => {
    const [post, setPost] = useState<SanityDocument[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await loader();
                const isBanner = response?.posts.filter((post) => post.banner === true);
                console.log("blogs", isBanner);
                setPost(isBanner);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // Render a skeleton loader while data is loading.
    if (isLoading) {
        return (
            <div className="w-full mt-[64px] animate-pulse">
                <div className="bg-gray-300 w-full h-[240px] rounded-2xl lg:h-[638px]" />
                <div className="p-2 space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
            </div>
        );
    }

    // Convert body content to plain text and create a truncated summary
    const summaryText = post?.[0]?.body ? portableTextToPlainText(post[0].body) : "";
    const truncatedSummary =
        summaryText.length > 100 ? summaryText.slice(0, 100) + "..." : summaryText;

    // Get the category color using the helper function
    const categoryColor = post?.[0]?.category ? categoryColorHandler(post[0].category) : "#000";

    return (
        <div className="w-full mt-[64px]">
            <Card className="border-none shadow-none">
                {post?.[0]?.image && (
                    <img
                        src={urlFor(post[0].image).url()}
                        alt={post[0].title || "Post image"}
                        className="w-full h-[240px] object-cover rounded-2xl lg:h-[638px]"
                    />
                )}
                <CardHeader className="p-2">
                    <CardDescription className="text-sm font-semibold text-primary">
                        {post[0]?.authorName} • {moment(post[0]?.publishedAt).format("D MMM YYYY")}
                    </CardDescription>
                    <div className="flex w-full items-center justify-between">
                        <CardTitle className="text-xl font-semibold text-[#181D27] w-auto truncate">
                            {post[0]?.title}
                        </CardTitle>
                        <ArrowRightIcon
                            onClick={() => {
                                navigate(`/post/${post[0]?.slug?.current}/${post[0]?._id}`);
                            }}
                            size={20}
                            color="#181D27"
                            className="-rotate-45 cursor-pointer"
                        />
                    </div>
                    <CardDescription className="text-[#535862] font-normal text-md w-auto">
                        {truncatedSummary}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex px-2 py-0 items-center justify-start gap-2.5">
                    {/* Use the category color in your badge */}
                    <div
                        className="w-auto min-w-[67px] p-2 rounded-full border"
                        style={{
                            backgroundColor: "#F9F5FF",
                            borderColor: categoryColor,
                        }}
                    >
                        <p
                            className="text-center font-medium text-sm capitalize"
                            style={{ color: categoryColor }}
                        >
                            {post[0]?.category}
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default HomeBlogBanner;

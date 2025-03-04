import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import image from "@/assets/images/image-1.jpg"
import { urlFor } from "@/lib/imageUrl";
import moment from "moment";
import { categoryColorHandler } from "@/lib/categoryColor";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router";
function portableTextToPlainText(portableText: any) {
    if (!Array.isArray(portableText)) return "";
    return portableText
        .map((block) => {
            if (block._type !== "block" || !block.children) return "";
            return block.children.map((child: any) => child.text).join("");
        })
        .join("\n\n");
}
const BlogCard = ({ post }: any) => {
    const summaryText = post?.body ? portableTextToPlainText(post?.body) : "";
    const truncatedSummary =
        summaryText.length > 100 ? summaryText.slice(0, 100) + "..." : summaryText;

    // Get the category color using the helper function
    const categoryColor = post?.category ? categoryColorHandler(post?.category) : "#000";
    // console.log("post",post)
    const navigate = useNavigate()
    return (
        <>

            <Card onClick={() => {
                navigate(`/post/${post?.slug?.current}/${post?._id}`)
            }} className="border-none shadow-none">
                {/* {post?.[0]?.image?.asset && ( */}
                <img
                    src={urlFor(post?.image).url()}
                    alt={post?.title || "Post image"}
                    className="w-full h-[240px] object-cover rounded-2xl lg:h-[240px]"
                />
                {/* )} */}
                <CardHeader className="p-2">
                    <CardDescription className="text-sm font-semibold text-primary">
                        {post?.authorName} • {moment(post?.publishedAt).format("D MMM YYYY")}
                    </CardDescription>
                    <div className="flex w-full items-center justify-between">
                        <CardTitle className="text-xl font-semibold text-[#181D27] w-auto truncate">
                            {post?.title}
                        </CardTitle>
                        <ArrowRightIcon onClick={() => {
                            navigate(`/post/${post?.slug?.current}/${post?._id}`)
                        }} size={20} color="#181D27" className="-rotate-45 cursor-pointer" />
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
                            {post?.category}
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default BlogCard;
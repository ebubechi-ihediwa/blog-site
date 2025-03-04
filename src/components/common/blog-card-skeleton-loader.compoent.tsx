import {
    Card,

    CardFooter,
    CardHeader,

} from "@/components/ui/card";


const BlogCardSkeleton = () => {
    return (
        <Card className="border-none shadow-none animate-pulse">
            {/* Skeleton for image */}
            <div className="bg-gray-300 w-full h-[240px] rounded-2xl lg:h-[240px]" />
            <CardHeader className="p-2 space-y-2">
                {/* Skeleton for author and date */}
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="flex items-center justify-between">
                    {/* Skeleton for title */}
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    {/* Skeleton for icon */}
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                </div>
                {/* Skeleton for summary */}
                <div className="h-4 bg-gray-300 rounded w-full"></div>
            </CardHeader>
            <CardFooter className="flex px-2 py-0 items-center justify-start gap-2.5">
                {/* Skeleton for category badge */}
                <div className="w-auto min-w-[67px] p-2 rounded-full border border-gray-300">
                    <p className="text-center font-medium text-sm capitalize text-gray-300">
                        
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogCardSkeleton;

import { PortableText } from "@portabletext/react";

const PostContent = ({ content }: any) => {
    return (
        <>
            <div className="w-full lg:w-[60%]" >
                {/* <div className="w-full" >
                    <h3 className="text-[#181D27] text-xl text-left font-semibold" >Introduction</h3>
                </div>

                <div className="w-full mt-[16px]" >
                    <p className="text-[#535862] text-regular text-left font-normal" >Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
                </div> */}

                <PortableText value={content}  />

            </div>
        </>
    );
}

export default PostContent;
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const WeeklyNewsletter = () => {
    return (
        <>
            <div className="w-full mt-[64px] lg:w-[40%] lg:mt-0" >
                <div className="w-full lg:w-[384px]" >
                    <div className="w-full bg-[#FAFAFA] rounded-2xl  py-5 px-5  lg:px-[32px] lg:py-[32px]" >

                        <div className="bg-white rounded-md p-3 w-[56px] shadow shadow-[#0A0D120D] items-center justify-center flex" >
                            <Mail size={24} color="#414651" />
                        </div>
                        <h1 className=" text-2xl font-semibold text-left text-[#181D27] lg:text-2xl mt-[32px]" >Weekly newsletter</h1>
                        <p className="text-left text-sm font-normal text-[#535862] mt-[16px]" >No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.</p>


                        <div className="w-full mt-[16px] mx-auto   gap-[16px]  lg:mt-[48px]" >
                            <div className="w-full " >
                                <input type="email" name="email" placeholder="Enter your email" className="w-full rounded-md border-[#D5D7DA] border-1 mx-auto p-3.5 text-[#717680] font-normal" />
                                <p className="text-left text-sm mt-1.5 font-normal text-[#535862] lg:text-left " >Read about our <span className="underline" >privacy policy</span>.</p>
                            </div>
                            <div className="w-full  mt-4 " >
                                <Button className="mx-auto w-full  py-6 rounded-md ">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeeklyNewsletter;
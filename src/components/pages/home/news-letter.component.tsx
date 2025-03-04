import { Button } from "@/components/ui/button";

const NewsLetter = () => {
    return (
        <>
            <div className="w-full mt-[64px]" >
                <div className="w-full bg-[#FAFAFA] rounded-2xl  py-5 px-5  lg:px-[224px] lg:py-[64px]" >
                    <h1 className=" text-2xl font-semibold text-center text-[#181D27] lg:text-4xl" >Still thinking<br className="block lg:hidden" /> about it?</h1>
                    <p className="text-center text-lg font-normal text-[#535862] mt-[16px]" >Sign up for our newsletter and get 10% off your next purchase.</p>


                    <div className="w-full mt-[16px] mx-auto  md:flex md:items-stretch md:justify-between gap-[16px]  lg:mt-[48px]" >
                    <div className="w-full md:w-[70%]" >
                        <input type="email" name="email" placeholder="Enter your email" className="w-full rounded-md border-[#D5D7DA] border-1 mx-auto p-3.5 text-[#717680] font-normal" />
                        <p className="text-center text-sm mt-1.5 font-normal text-[#535862] lg:text-left " >We care about your data in our <span className="underline" >privacy policy</span>.</p>
                    </div>
                    <div className="w-full md:w-[30%] mt-4 md:mt-0" >
                        <Button className="mx-auto w-full  py-6 rounded-md md:w-[129px]">
                            Subscribe
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default NewsLetter;
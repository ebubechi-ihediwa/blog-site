import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <>
            <div className="w-full" >
                <div className="w-full" >
                    <h1 className=" text-3xl text-[#181D27] font-semibold text-left" >Get in touch</h1>
                    <p className=" text-lg text-[#535862] font-normal mt-[16px] " >Our friendly team would love to hear from you.</p>


                    <div className="w-full mt-[48px]" >

                        <div className="w-full mb-[24px] " >
                            <label htmlFor="first-name" className="text-sm font-medium text-[#414651] text-left" >
                                First name *
                            </label>

                            <input type="text" placeholder="First name" className=" w-full border  border-[#D5D7DA] rounded-md py-[10px] px-[14px]  text-[#717680] mt-[6px]" />
                        </div>
                        <div className="w-full mb-[24px]" >
                            <label htmlFor="first-name" className="text-sm font-medium text-[#414651] text-left">
                                Last name *
                            </label>

                            <input type="text" placeholder="Last name" className=" w-full border   border-[#D5D7DA] rounded-md py-[10px] px-[14px]  text-[#717680] mt-[6px]" />
                        </div>
                        <div className="w-full mb-[24px] " >
                            <label htmlFor="first-name" className="text-sm font-medium text-[#414651] text-left">
                                Email *
                            </label>

                            <input type="text" placeholder="johndoe@email.com" className=" w-full border  border-[#D5D7DA] rounded-md py-[10px] px-[14px]  text-[#717680] mt-[6px] " />
                        </div>
                        <div className="w-full mb-[24px] " >
                            <label htmlFor="first-name" className="text-sm font-medium text-[#414651] text-left">
                                Message*
                            </label>

                            <textarea placeholder="Leave us a message" className=" w-full border  border-[#D5D7DA] rounded-md py-[10px] px-[14px]  text-[#717680] min-h-[134px] mt-[6px]" />
                        </div>

                        <div className="w-full" >
                            <Button className="w-full py-[28px] " >
                                Send Message
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
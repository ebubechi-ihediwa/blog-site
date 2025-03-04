const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear()
    return (
        <div className="w-full mt-[60px] absolute bottom-0 left-0 right-0 " >
            <footer className=" w-full bg-[#53389E] px-[16px] py-[24px] lg:py-[34px] lg:px-[122px]" >
                <div className="w-full flex items-center justify-start gap-2.5" >
                    <p className=" text-regular text-[14px] font-normal text-[#D6BBFB]" >Terms</p>
                    <p className=" text-regular text-[14px] font-normal text-[#D6BBFB]" >Privacy</p>
                    <p className=" text-regular text-[14px] font-normal text-[#D6BBFB]" >Cookies</p>
                </div>

                <div className=" w-full mt-3" >
                    <p className=" text-regular text-[14px] font-normal text-[#D6BBFB]" >© {currentYear} Blog site. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
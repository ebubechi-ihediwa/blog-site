import Footer from "@/components/common/footer.component";
import Navbar from "@/components/common/navbar.component";
import ContactForm from "@/components/pages/contact-us/contact-us-form.component";
import image from "@/assets/images/image-1.jpg"
const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="w-full mt-[64px] px-4 pb-44 md:px-14 lg:px-[112px] lg:pb-36 " >
                <div className="w-full flex items-center justify-between gap-[63px] lg:items-start" >
                    <div className="w-full lg:w-1/2" >
                        <ContactForm />
                    </div>
                    <div className="hidden lg:w-1/2 lg:block" >
                        <img src={image} className="w-full h-[800px] object-cover " />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ContactUs;
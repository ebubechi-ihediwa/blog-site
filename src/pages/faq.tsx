import Footer from "@/components/common/footer.component";
import Navbar from "@/components/common/navbar.component";
import NewsLetter from "@/components/pages/home/news-letter.component";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    const faqList = [
        {
            question: "What is this blog about?",
            answer:
                "Our blog covers a variety of topics—from technology and lifestyle to health and travel—aimed at inspiring and informing readers with engaging, well-researched content.",
        },
        {
            question: "How often is new content published?",
            answer:
                "We strive to update the blog regularly, typically posting new articles weekly. You can check our latest posts on the homepage or subscribe to our newsletter for updates.",
        },
        {
            question: "How can I subscribe to the newsletter?",
            answer:
                "You can subscribe to our weekly newsletter by entering your email in the subscription form on our site. This way, you'll receive the latest posts and exclusive content straight to your inbox.",
        },
        {
            question: "Can I share your articles on social media?",
            answer:
                "Absolutely! We encourage sharing our content on your favorite social platforms. You'll find social media share buttons on each post to make it easy.",
        },
        {
            question: "How do I contact you with questions or feedback?",
            answer:
                "We love hearing from our readers! You can reach out via the Contact page or send us an email directly through the details provided in our site’s footer.",
        },
        {
            question: "Do you accept guest posts or contributions?",
            answer:
                "Yes, we welcome guest contributions that align with our content themes. Please visit our 'Write for Us' page for guidelines and submission details.",
        },
        {
            question: "Where can I find older posts or an archive?",
            answer:
                "You can explore our blog archive via the navigation menu or search bar on the site, which organizes posts by date and category.",
        },
    ];

    return (
        <>
            <Navbar />

            <div className="w-full mt-[64px] px-4 pb-46 md:px-14 lg:px-[112px]">

                <div className="w-full" >
                    <p className="text-primary text-center font-semibold text-sm" >FAQs</p>
                    <h1 className="mt-[12px] text-[#181D27] text-center font-semibold text-2xl " >We're here to help</h1>
                    <p className="text-[#535862] text-lg font-normal text-center mt-[16px]" >Have questions? We’re here to help.</p>
                </div>

                <div className="w-full mt-[64px]" >
                    <div className="w-full" >
                        <h1 className="text-center text-[#181D27] font-semibold text-2xl lg:text-3xl " >Frequently asked <br className="block md:hidden" />questions</h1>
                    </div>


                    <div className="w-full mt-12 px-[16px] md:px-[80px]" >
                        {faqList.map(({ question, answer }, index) => (
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="text-[#181D27] underline-none" >{question}</AccordionTrigger>
                                    <AccordionContent className=" text-[#535862] font-normal" >
                                        {answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        ))}
                    </div>
                </div>

                <NewsLetter />
            </div>
            <Footer />
        </>
    );
}

export default Faq;
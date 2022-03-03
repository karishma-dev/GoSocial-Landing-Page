import DiveInto from "./DiveInto";
import SectionText from "./SectionText";

export default function Monetize(){
    const monObj = [
        {
            "num": 1,
            "img": "images/rocket-iso-color.png",
            "heading":"Start your community",
            "desc":"Set it up once, and you're good to go. No hassle or code required."
        },
        {
            "num": 2,
            "img": "images/gift-iso-color.png",
            "heading":"Host offerings",
            "desc":"Host courses, workshops, events, and discussions for your fans."
        },
        {
            "num": 3,
            "img": "images/rupee-iso-color.png",
            "heading":"Engage and earn",
            "desc":"Engage your community through discussion channels and monetize."
        }
    ]

    return (
        // <!-- Monetize -->
        <div className="monetize-bg">

            <div className="grid-container section-container">

                <SectionText 
                    heading="Build & Monetize Your Communities On GoSocial"
                    desc="GoSocial provides the complete creator stack to help you thrive in the creator economy. Get started in three easy steps:"
                    location="Creator" />

                <DiveInto obj={monObj} />

            </div>
        </div>
    );
}
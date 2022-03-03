import Explore from "./explore";
import SectionText from "./SectionText";

export default function Blog(){
    return (
        <div className="margin-container">
        {/* <!-- Blogs --> */}
        <div className="grid-container">

                <SectionText 
                    heading="Blogs For Your Daily Dose Of Inspiration"
                    desc="Find best practices for creators, insights on creators economy, and tips for budding creators on our blog."
                    location="Creator" />

                {/* <!-- Explore Communities Heading --> */}
                <Explore heading="GoSocial Blogs"  linkText="Read More Blogs" />

        </div>
        </div>

    )
}
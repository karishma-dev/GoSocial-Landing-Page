import SectionText from "./SectionText";

export default function Join(){
    return (
        <div className="join-bg">

        {/* <!-- Grid Container --> */}
        <div className="grid-container">

            {/* <!-- Welcome Container --> */}
            <div className="section-container col-12 grid-col grid-container">

                <SectionText heading="Join GoSocial"
                desc="Learn from the creators who’ve done it all. Join their communities on GoSocial and interact with other members."
                />

                {/* <!-- Welcome Card --> */}
                <div className="wrapper col-5">
                    <img src="images/black-star.png" alt="" className="star black-star" />
                    <img src="images/yellow-star.png" alt="" className = "star yellow-star" />
                    <div className="card">
                        <img src="images/Mobile.png" alt="" id="mobile" />
                    </div>
                </div>

        </div>
    </div>
    </div>
    );
}
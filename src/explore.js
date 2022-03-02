import HeaderCard from "./HeaderCard";

export default function Explore(){
    
    const imgArray = ["images/Community1.png", "images/Community2.png", "images/Community3.png"];
    
    return (
        // Explore Communities
        <section className="explore-communities grid-container">

            {/* Explore Communities Heading --> */}
            <div className="explore-head col-12 grid-col">
                <h2>
                    Explore Communities
                </h2>
                <div className="arrow">
                    <img src="images/CaretLeft.png" alt="" />
                    <img src="images/CaretRight.png" alt="" />
                </div>
            </div>

            {/* <!-- Explore Communities Card --> */}
            <div className="outer-slider col-12 grid-col">
                <div className="inner-slider">
                    <HeaderCard img={imgArray[0]}/>
                    <HeaderCard img={imgArray[1]}/>
                    <HeaderCard img={imgArray[2]}/>
                    <HeaderCard img={imgArray[0]}/>
                    <HeaderCard img={imgArray[1]}/>
                    <HeaderCard img={imgArray[2]}/>
                </div>
            </div>

            <a href="#" className="section-link col-12 grid-col">Explore Communities</a>

        </section>

    );
}
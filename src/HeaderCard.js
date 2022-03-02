export default function HeaderCard({img}){
    return (
        <div class="card">
            <img src={img} alt="" class="welcome-card-img" />
            <div class="card-text">
                <div class="title-creator">
                    <div class="title">
                        <p class = "title-text">
                            Flat & Flatmates New Delhi India, Flat & Flatmates New Delhi India
                        </p>
                        {/* <span id="title-joined"> 
                            Joined
                        </span>  */}
                    </div>
                    <div class="creator">
                        <img src="images/member5.png" alt="" class="creator-img" />
                        <span>By Sakshi K Sidhu</span>
                    </div>  
                </div>
                <p class="card-desc">
                    Mobile Photography Community is all about good behaviour, personality, development, photography, skills, colors. And a lot more.
                </p>
            </div>
            <div class="members">
                <div class="members-img">
                    <img src="images/member1.png" alt="" class="img-77" />
                    <img src="images/member2.png" alt="" class="img-78" />
                    <img src="images/member3.png" alt="" class="img-83" />
                    <img src="images/member4.png" alt="" class="img-79" />
                    <img src="images/member5.png" alt="" class="img-80" />
                </div>
                <span>
                    +12,294 Members
                </span>
            </div>
        </div>
    );
}
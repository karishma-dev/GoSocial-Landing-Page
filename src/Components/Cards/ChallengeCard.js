export default function ChallengeCard({img, id}){
    return (
        <div className="challenge-card" id={id}>
            <img src={img} alt="" className="challenge-card-img" />
            <div className="challenge-card-text">
                <span className="challenge-card-heading">
                    Daily Doodle - Art Challenge
                </span>
                <div className="challenge-card-footer">
                    <div className="challenge-card-users challenge-flex">
                        <img src="images/Users.png" alt="" />
                        <span>12,294</span>
                    </div>
                    <div className="challenge-card-posts challenge-flex">
                        <img src="images/challenge-card-rating.png" alt="" />
                        <span>12,294</span>
                    </div>
                    <div className="challenge-card-creator challenge-flex">
                        <img src="images/challenge-creator.png" alt="" />
                        <span>By GoSocial App</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
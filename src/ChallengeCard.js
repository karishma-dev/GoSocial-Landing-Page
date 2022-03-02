export default function ChallengeCard({img}){
    return (
        <div class="challenge-card" id="challenge1">
            <img src="images/Challenge1.png" alt="" class="challenge-card-img" />
            <div class="challenge-card-text">
                <span class="challenge-card-heading">
                    Daily Doodle - Art Challenge
                </span>
                <div class="challenge-card-footer">
                    <div class="challenge-card-users challenge-flex">
                        <img src="images/Users.png" alt="" />
                        <span>12,294</span>
                    </div>
                    <div class="challenge-card-posts challenge-flex">
                        <img src="images/challenge-card-rating.png" alt="" />
                        <span>12,294</span>
                    </div>
                    <div class="challenge-card-creator challenge-flex">
                        <img src="images/challenge-creator.png" alt="" />
                        <span>By GoSocial App</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
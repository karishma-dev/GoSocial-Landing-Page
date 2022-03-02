export default function WorkshopCard({img}){
    return (
        <div class="events-card">
        <img src="images/event1.png" alt="" class="event-card-img" />
        <div class="event-card-text">
            <span class="multiple-session">
                Multiple Sessions
            </span>
            <div class="event-card-head">
                <p class="event-heading">
                    NFTS for Artists & Designers
                </p>
                <p class="event-hoster">
                    Hosted by Melvin Thambi, UI Design Lead
                </p>
            </div>
            <div class="event-date">
                <img src="images/CalendarBlank.png" alt="" />
                <span>
                    Aug 14, 2021 to Sep 14, 2021
                </span>
            </div>
            <div class="event-rate">
                <span class="event-original-rate">Rs. 3,200</span>
                <span class="event-discount-rate">Rs. 3000</span>
            </div>
        </div>
    </div>
    );
}
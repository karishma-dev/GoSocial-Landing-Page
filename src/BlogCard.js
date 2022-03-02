export default function BlogCard({img}){
    return (
        <div class="blog-card">
            <img src="images/blog1.png" alt="" />
            <div class="blog-text">
                <div class="blog-info">
                    <span class="blog-date">
                        oct 20, 2021
                    </span>
                    <span class="blog-time">
                        7 min read
                    </span>
                </div>
                <p class="blog-heading">
                    What is Somnolence? Why we feel sleepy?
                </p>
                <div class="blog-author">
                    <span class="author">
                        Author
                    </span>
                    <span class="author-name">
                        Amanpreet Singh
                    </span>
                </div>
            </div>
        </div>
    );
}
import user1 from '../img/user1.jpg'
import user2 from '../img/user2.jpg'
import user3 from '../img/user3.jpg'
import user4 from '../img/user4.jpg'

function Testimonials() {
    return (
        <section class="tstimonials adjust" id="tstimonials">
            <div class="title">
                <h2>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia, delectus repudiandae saepe molestias beatae vitae officia minus voluptates fuga soluta</p>
            </div>
            <div class="content">
                <div class="testimonialsBox">
                    <div class="imgBx">
                        <img src={user1} />
                    </div>
                    <p>I would highly recommend Sajid Ali. It's great to work with. The traffic to our website has increased thanks to their SEO program.
                    </p>
                    <h4>Muhammad Ali Mughal <br /><span>Member of Jawan Pakistan ( Official )</span></h4>
                </div>

                <div class="testimonialsBox">
                    <div class="imgBx">
                        <img src={user2} />
                    </div>
                    <p>Compared to the other Developers we have used in the past, Sajid has been far and above the best in every area.
                    </p>
                    <h4>Mohammad Umair Khan <br /><span>Member of Jawan Pakistan ( Official )</span></h4>
                </div>

                <div class="testimonialsBox">
                    <div class="imgBx">
                        <img src={user3} />
                    </div>
                    <p>I have been very happy with My new website! It looks professional and very easy to navigate. My experience with Sajid has been great.
                    </p>
                    <h4>Arsalan Sabir <br /><span>Software Engineer</span></h4>
                </div>

                <div class="testimonialsBox">
                    <div class="imgBx">
                        <img src={user4} />
                    </div>
                    <p>Professional, Creative, Attentive to Detail, Excellent Communication, work with ideas that I have as well and think of new ways to bring more traffic to our site in ways I would never have considered.
                    </p>
                    <h4>Zia Khan <br /><span>Faculty member at Operation Unicorn</span></h4>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

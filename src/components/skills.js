import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';

function Skills(){
    return(
<section class="services adjust" id="services">
                <div class="title">
                    <h2>Skills</h2>
                    <p>Experience Of Work With Professionals, Reputed Companies And Completed The Following Courses With Certification </p>
                </div>
                <div class="content">
                    <div class="serviceBox">
                        <img src={icon1} />
                        <h2>Web Design</h2>
                        <p>Web design is a multi-disciplinary job, need not only knowledge in design (typography, color theory) but also skills in developing a website (HTML, CSS, JavaScript). </p>
                    </div>

                    <div class="serviceBox">
                        <img src={icon2} />
                        <h2>Web Development</h2>
                        <p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page...</p>
                    </div>

                    <div class="serviceBox">
                        <img src={icon3} />
                        <h2>Android Apps</h2>
                        <p>
                            Android software development is the process by which applications are created for devices running the Android operating system or ios operating syatems and hybrid apps...
                        </p>
                    </div>

                    <div class="serviceBox">
                        <img src={icon4} />
                        <h2>Photography</h2>
                        <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor...</p>
                    </div>

                    <div class="serviceBox">
                        <img src={icon5} />
                        <h2>Content Writing</h2>
                        <p>A Website content writer or web content writer is a person who specializes in providing relevant content for websites. Every website has a specific...</p>
                    </div>

                    <div class="serviceBox">
                        <img src={icon6} />
                        <h2>video editing</h2>
                        <p>Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films and television shows, video advertisements and more...</p>
                    </div>
                </div>
            </section>

    );
}
export default Skills;
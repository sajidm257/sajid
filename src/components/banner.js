
import image from '../img/sajid-profile-pic.jpg'
function Banner() {
  return (
    <section class="banner" id="banner">
                <div class="content">
                    <div class="imgBx">
                        <img src={image} />
                    </div>
                    <h3>Sajid Ali</h3>
                    <p>I'm a Creative Front End Web Developer</p>
                    <button class="btn"> <a href="https://responsive-resume-5a80b.web.app/" target="_blank">View My Resume</a></button>
                    <ul class="socialMedia">
                        <li><a href="https://www.linkedin.com/in/sajid-ali-82a782203/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i>
                            </a></li>
                        <li><a href="https://twitter.com/sajidali121" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>
                            </a></li>
                        <li><a href="https://www.linkedin.com/in/sajid-ali-82a782203/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a></li>
                        <li><a href="https://www.instagram.com/sajid.mahmood351/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>
                            </a></li>
                    </ul>
                </div>
            </section>
  );
}


export default Banner;

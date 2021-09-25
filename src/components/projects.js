import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'


function Projects() {
    return (
        <section class="project adjust" id="project">
        <div class="title">
            <h2>Recent Work</h2>
            <p>Some recent Projects highlights and Experiances...</p>
        </div>
        <div class="content">
            <div class="workBx">
                <div class="imgBx">
                    <img src={img1} />
                </div>
                <div class="textBx">
                    <h3>Project 01</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img2} />
                </div>
                <div class="textBx">
                    <h3>Project 02</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img3} />
                </div>
                <div class="textBx">
                    <h3>Project 03</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img4} />
                </div>
                <div class="textBx">
                    <h3>Project 04</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img5} />
                </div>
                <div class="textBx">
                    <h3>Project 05</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img6} />
                </div>
                <div class="textBx">
                    <h3>Project 06</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img7} />
                </div>
                <div class="textBx">
                    <h3>Project 07</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img8} />
                </div>
                <div class="textBx">
                    <h3>Project 08</h3>
                </div>
            </div>

            <div class="workBx">
                <div class="imgBx">
                    <img src={img9} />
                </div>
                <div class="textBx">
                    <h3>Project 09</h3>
                </div>
            </div>


        </div>
    </section>
    );
  }
  
  export default Projects;
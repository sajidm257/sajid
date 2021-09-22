import photo from '../img/bg1.jpg'

function About() {
    return (
        <section class="about adjust" id="about">
        <div class="title">
            <h2>About Me</h2>
        </div>
        <div class="content">
            <div class="textBox">
                <p>Talented individual with in-depth knowledge of designing and development tools and coding languages. Desirous of the role of Software Developer work experience in innovating software designs, testing and coding as well as debugging programs and troubleshooting and augmenting the company’s reputation.
                  <br /><br />I am willing to give total support to the organization that i am in, with my talent and capabilities, in order to achieve organization goal and mutual benifits 
                  <br /><br />To utilize my knowledge and skills for an organization, which offers opportunities for personal growth and career development.
                  <br /><br />To seek a highly challenging and working environment in a growing organization, having a culture of teamwork and excellent opportunities for individual and professional growth.</p>
            </div>
            <div class="imgBx">
                <img src={photo} />
            </div>
            </div>
    </section>
    );
  }
  
  export default About;
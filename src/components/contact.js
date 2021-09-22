function Contact() {
    return (
        <section class="contact adjust" id="contact">
        <div class="title">
            <h2>Let's Say Hi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia, delectus repudiandae saepe molestias beatae vitae officia minus voluptates fuga soluta</p>
        </div>
        <div class="contactForm">
            <div class="row">
                <input type="text" name="" placeholder="First Name" />
                <input type="text" name="" placeholder="Last Name" />
            </div>
            <div class="row">
                <input type="text" name="" placeholder="Email Address" />
                <input type="text" name="" placeholder="Mobile No." />
            </div>
            <div class="row2">
                <textarea placeholder="Message"></textarea>
            </div>
            <div class="row2">
                <input type="submit" value="Send" />
            </div>
        </div>
        <div class="copyright">
    <p> copyright 2021 Sajid Ali. All Rights Reserved</p>
</div>
    </section>
    
    );
  }
  
  export default Contact;
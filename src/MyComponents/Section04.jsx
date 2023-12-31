import Pict1 from "../assets/bg-showcase-1.jpg";
import Pict2 from "../assets/bg-showcase-2.jpg";
import Pict3 from "../assets/bg-showcase-3.jpg";


const Section04 = () => {
  return (
    <div className="container-fluid sec4A">
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-4">
          <h6>Full Reponsive Design</h6>
          <p style={{ fontSize: "10px", color: "grey" }}>
            When you use a theme created by Start Bootstrap, you know that the
            theme will look <br /> great on any device, wheather it's phone
            tablet or desktop the page will behave <br /> responsivly.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <img src={Pict1} className="sec4-pict" alt="Picture.jpg" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <img src={Pict2} className="sec4-pict" alt="Picture.jpg" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-4">
          <h6>Updated for Boot Strap 5</h6>
          <p style={{ fontSize: "10px", color: "grey" }}>
            Newly improved and full of great utility classes, Bootstrap 5 is
            leading the way in <br /> mobile responsive web development! All of
            the themese on Start Bootstrap are now <br /> using Bootstrap 5.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-4">
          <h6>Easy to Use & Customize</h6>
          <p style={{ fontSize: "10px", color: "grey" }}>
            Landing page in just HTML & CSS with a splash of SCSS for user who
            demand some
            <br /> deeper customization options. Out of the bix just add your
            content and images and <br /> your new landing page will ready to
            go.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
          <img src={Pict3} className="sec4-pict" alt="Picture.jpg" />
        </div>
      </div>
    </div>
  );
};

export { Section04 };

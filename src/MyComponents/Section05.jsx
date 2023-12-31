import Test1 from "../assets/testimonials-1.jpg"
import Test2 from "../assets/testimonials-2.jpg"
import Test3 from "../assets/testimonials-3.jpg"

const Section05 = () => {
  return (
    <div className="container-fluid sec5A">

        <div className="container" style={{textAlign: "center"}}>

            <h4>What people are saying.....</h4>

            <div className="row sec5B">
        
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <img  className="sec5B" src={Test1} width="100px" height="100px" alt="Picture.jpg" />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <img  className="sec5B" src={Test2} width="100px" height="100px" alt="Picture.jpg" />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <img  className="sec5B" src={Test3} width="100px" height="100px" alt="Picture.jpg" />
                </div>

            </div>

            <div className="row sec5B">
        
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <p><b>Margret E.</b> </p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >This is fantastic. Thank you so much guys! </p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <p><b>Fred S.</b></p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >Bootstrap is amzing. I've been using it</p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >to creat lots of super nice landing</p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >Pages </p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                <p><b>Sarah W.</b></p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >Thank you so much for making these free</p>
                <p style={{fontSize: "10px", marginTop:"-15px" }} >resources available to us.</p>
                </div>

            </div>

        </div>








    </div>
  );
};

export { Section05 };
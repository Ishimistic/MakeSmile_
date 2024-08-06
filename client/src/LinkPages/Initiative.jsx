import image from "../assets/plantation.jpeg";
import Header from "../components/Header";

function AboutUs() {
  return (
    <div className="home-container">
      <Header />
      <div className="heading">Welcome to MakeSmile</div>
        <div className="about-work">
          <div className="welcome-about-us">
            <span>MakeSmile</span> is an initiative by the Drishti Rotaract Club
            of BPIT that connects people with extra toys and books to those in
            need. Our mission is to distribute these resources to children who
            could benefit from them, spreading joy and support within the
            community.
          </div>
          <br />
          <div className="teamImg">
            <img src={image} alt="" width="760" height="300" />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default AboutUs;

import Header from "../components/Header";
import Impact from "../components/impactData";
import process from "../assets/process.png";
import Form from "./Form.jsx";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import s1 from "../assets/images-back/s1.png";
import s4 from "../assets/images-back/s4.png";
import s3 from "../assets/images-back/s3.jpg";
import shadow_img from "../assets/images-back/shadow_img.png";

function Home() {
  const navigate = useNavigate();

  const imagesLandPage = [s1, s3, s4];

  const handleDonateButton = () => {
    navigate("/donate");
  };
  return (
    <>
      <Header />
      <div
        className="landpage_container-1"
        style={{ background: "#f98b8b" }}
      >
        <img src={shadow_img} alt="Decorative shadow" className="hero-image" />
        {/* <ImageCarousel images={imagesLandPage} /> */}
      </div>

      <div className="main_container">
        <div className="landpage_container_impact">
          <div className="landpage_container_impact_heading">
            Community First, Always
          </div>
          <Impact />
        </div>

        <div
          className="landpage_container"
          style={{
            display: "flex",
            justifyContent: "left",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <p className="section_heading">Our Initiative</p>
          <div className="initiative-content">
            <p>
              MakeSmile, an initiative by the Drishti Rotaract Club of BPIT, aims
              to bridge the gap between the privileged and underprivileged by
              connecting people who have extra toys and books with children in
              need. The mission is to redistribute these resources to children who
              may not have access to such items, spreading joy and offering
              support to underprivileged communities. Through this initiative,
              MakeSmile fosters compassion and promotes equality, ensuring that
              every child has the opportunity to enjoy childhood essentials like
              toys and books while contributing to their overall development and
              happiness.
            </p>
            <p
              className="donate-link"
              onClick={handleDonateButton}
              style={{ color: "#ff6b6b", cursor: "pointer" }}
            >
              Donate
            </p>
          </div>
        </div>

        <div className="landpage_container-3">
          <div className="landpage_container-3-left-txt">
            Gift the joy of learning and play:
            <br /> Donate your <span>toys</span> and <span>books</span> to those
            in need
          </div>

          <div className="donateBtn cta-donate">
            <button onClick={handleDonateButton}>Donate Toys/Books</button>
          </div>
        </div>
        <div className="landpage_container-4">
          <img src={process} alt="Process" className="process-image" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
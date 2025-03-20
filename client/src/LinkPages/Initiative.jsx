import study from "../assets/study.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Initiative() {
  return (
    <>
      <Header />
      <div className="initiative-container">
        <h1 className="initiative-heading">Welcome to MakeSmile</h1>
        <div className="initiative-content">
          <div className="initiative-text">
            <p><span className="highlight">MakeSmile</span> is an initiative by the Drishti Rotaract Club
            of BPIT that connects people with extra toys and books to those in
            need. Our mission is to distribute these resources to children who
            could benefit from them, spreading joy and support within the
            community.</p>
          </div>
          
          <div className="initiative-image-container">
            <img src={study} alt="Children studying" className="initiative-image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Initiative;
import Header from "../components/Header";
import Impact from "../components/impactData";
import process from "../assets/process.png";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="landpage_container-1">
        <ImageCarousel />
      </div>
      <div className="landpage_container-2">Community First, Always</div>
      <div className="landpage_container-impact">
        <Impact />
      </div>
      <div className="landpage_container-3">
        <div className="landpage_container-3-left-txt">
          Gift the joy of learning and play:
          <br /> Donate your <span>toys</span> and <span>books</span> to those
          in need
        </div>

        <div className="donateBtn">
          <button>Donate Toys/Books</button>
        </div>
      </div>
      <div className="landpage_container-4">
        {/* Process is quite simple */}
        <img src={process} alt="Process" width="1100" height="400" />
      </div>

      <Footer />
    </>
  );
}

export default Home;

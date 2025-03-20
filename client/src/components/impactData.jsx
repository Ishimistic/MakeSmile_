// import React from "react";
import ImageCarousel2 from "./ImageCarousel2";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import s1 from "../assets/images-back/s1.png";
import s4 from "../assets/images-back/s4.png";
import s3 from "../assets/images-back/s3.jpg";

function impactData() {
  const imagesIntro = [t1, t2, t3, t4, t5, s3, s4];
  return (
    <div className="second">
      <div className="introWorkImg">
        <ImageCarousel2 images={imagesIntro} />
      </div>
      <div className="introWorkContent">
        Serving the community is not just about helping those in need it is about creating a cycle of support that benefits everyone. By sharing what we have, whether it is time, resources, or compassion, we lift each other up and build a community where everyone has the opportunity to flourish. A strong community is rooted in care, and through our collective efforts, we make it stronger every day.
      </div>
    </div>
  );
}

export default impactData;

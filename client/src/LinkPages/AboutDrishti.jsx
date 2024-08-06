import React from "react";
import Header from "../components/Header";

function AboutDrishti() {
  return (
    <div className="drishti-page">
      <Header />
      <div className="drishti-heading">DRISHTI RCBPIT</div>
      <div className="drishti-intro">
        {/* <div className="drishti-boxes"> */}
          <div className="main drishti-box">
            Drishti, the Rotaract Club of BPIT, was founded in 2016 and has
            since grown significantly in both size and impact. Officially
            registered under the Rotaract District 3012 and located in Zone 1,
            Drishti operates under the guidance of its parent club, the Rotary
            Club of Rohini. The club is dedicated to serving the community
            through its various departments, each focusing on different aspects
            of societal well-being.
          </div>
          <div className="education drishti-box">
            The Education Department at Drishti is committed to empowering
            underprivileged children through education. Our volunteers teach
            students at various NGOs, and we have adopted an NGO named Chhoti Si
            Khushi, where we regularly conduct classes. Additionally, we
            organize career counseling sessions at various NGOs and schools,
            helping young minds navigate their future paths and make informed
            decisions about their careers.
          </div>
          <div className="healthcare drishti-box">
            The Health Department has initiated impactful programs to promote
            overall well-being. Under the Healthcare Department, Drishti runs three impactful projects: Project Shakti, Project Khairiyat, and Project Santulan. Project Shakti fosters a positive mental shift and increases awareness of menstrual hygiene through sanitary pad distribution and sessions on teenage pregnancy and good touch/bad touch. Project Khairiyat educates children on diseases, their impact, and prevention. Project Santulan prioritizes childrens physical and mental health.
          </div>
          <div className="environment drishti-box">
            The Environment Department is one of the most active branches of
            Drishti, undertaking numerous cleanliness and sanitation drives.
            Projects such as ECOTOPIA, KUDRAT, and SPARSH, along with the newly
            launched PAW PROTECTION and GREEN CLEAN, highlight our commitment to
            environmental sustainability. Through these diverse initiatives,
            Drishti continues to make a positive difference in the community,
            fostering education, health, and environmental awareness.
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default AboutDrishti;

import React, { useEffect } from "react";
import gsap from "gsap";
import './RequestDemo.scss';

const Page8 = () => {
  // Calendly
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="page8" className="page-container">
      <div className="content">
        <div className="text"><h1 className="head">Request a <br /> demo now!</h1></div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/finace-ops/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=118f0d&primary_color=083a81"
          style={{ minWidth: "320px", height: "700px", marginBottom: "50px", marginTop: "0" }}
        ></div>
      </div>
    </div>
  );
};

export default Page8;
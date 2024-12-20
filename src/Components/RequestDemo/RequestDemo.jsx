import React, { useEffect } from "react";
import './RequestDemo.scss';

const Page8 = () => {
  // HubSpot form
  useEffect(() => {
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "24408272",
            formId: "84ba8311-7202-49ba-94be-dbb30cf465c1",
            target: "#hubspot-form-container",
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "24408272",
        formId: "84ba8311-7202-49ba-94be-dbb30cf465c1",
        target: "#hubspot-form-container",
      });
    }
  }, []);

  return (
    <div id="page8" className="page-container" aria-labelledby="demo-head">
      <h1 id="demo-head" className="head">Request a demo now!</h1>
      <h5 className="subhead">
        Don't wait any longer, let Finace be the first step towards creating a more prosperous future for your organization and employees.
      </h5>
      <div id="hubspot-form-container" className="form-container" aria-label="HubSpot form container for demo request"></div>
    </div>
  );
};

export default Page8;
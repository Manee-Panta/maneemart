import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-main">
      <h3 className="first-txt">WELCOME</h3>
      <h3 className="second-txt">
        At Manee-Mart.com, we believe everyone deserves to have a website or
        online store. Innovation and simplicity makes us happy: our goal is to
        remove any technical or financial barriers that can prevent business
        owners from making their own website. We're excited to help you on your
        journey!
      </h3>
      <h3 className="third-txt">What Makes Manee Mart Different </h3>
      <h3 className="fourth-txt">
        A smooth and friendly user's experience that has been built to ensure
        the user seamless adoption. Fluidity and full integration cover the
        needs of even the most complex companies. The flexibility of Manee Mart
        is such that apps can be added according to the growth of your company,
        adding one app at a time as your needs evolve and your customer base
        grows. Thanks to the open source community, Manee Mart is actively
        maintained by a large base of developers to meet evolving customer needs
        and provide new, innovative applications.
      </h3>
      <h3 className="about-last">We Provide the Best Product</h3>
      <Link to='/' className="about-button">Shop From Us</Link>
    </div>
  );
};

export default About;

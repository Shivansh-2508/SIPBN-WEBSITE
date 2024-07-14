import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import { React } from "react";
import Marqueee from "@/components/common/Marqueee";

const Hero = () => {
  return (
    <>
      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <section className="hero">
        <div className="container">
          <a
            href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TitleLogo title="#CapTech2024" caption="" className="logobg" />
          </a>
          <h1 className="hero-title">DISCOVER . CONNECT . EXECUTE</h1>
          <TitleSm title="Venue: ICC Sydney 14 Darling Drive Sydney, NSW 2000 Australia" />
          <p>Tue, 26 Nov 2024 9:00 AM - Wed, 27 Nov 2024 9:00 PM AEDT</p>
          <a
            href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            {" "}
            Book Your Tickets
          </a>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Message from our President" />
            <div className="presContainer">
              <div className="presImgContainer">
                <img
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719264632/homePage/umjk3phquvd4jwbknig2.png"
                  height="110px"
                  className="presImg"
                />
                <h2> Raman Bhalla</h2>
              </div>
              <p style={{ fontSize: "medium", textAlign: "left" }}>
                The purpose of Sydney Investors, Professionals and Business
                Networking Group Incorporated ("SIPBN") is to connect projects
                with sources of capital and provide a global business platform
                for growing Australian businesses.
                <br />
                <br />
                We are sector agnostic. We facilitate the engagement to and from
                Australia through our extensive contacts in the business,
                private capital and government sectors.
                <br />
                <br />
                With our physical offices in Sydney and Queensland in Australia
                and international offices in India, Middle East and Hong Kong,
                our members have the access to a premium business platform to do
                business in Australia and globally.
                <br />
                <br />
                Our members get the benefit from our regular networking events
                and our yearly flagship summit to foster deal making, business
                connections and innovation.
              </p>
            </div>
            <a
              href="https://forms.gle/GLbvrFiTyUjfmadF7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {" "}
              Apply for Membership
            </a>
          </div>
          <div className="banner2">
            <a
              href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerTitle container"
            >
              <h2>Secure your #CapTech2024 ticket!</h2>
              <br/>
             <p> Early bird discount 20% till 31th July 2024</p>
             <br/>
             <button className="button-primary">Book Tickets</button>
            </a>
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      <div className="container">
        <div className="heading-title">
          <Title title={"Upcoming Events"} />
        </div>
        <div className="eventContainer">
          <a href="https://www.eventbrite.com.au/e/#CapTech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
            <img
              className="eventImg"
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/qo7dq9u1cfptxijtlsly.png"
            />
          </a>
        </div>
      </div>
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  );
};

export default Hero;

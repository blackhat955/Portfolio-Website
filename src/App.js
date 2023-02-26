import React, { Component } from "react";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import data from "./data";
class App extends Component {
  state = data;

  componentDidMount() {
    const myScripts = [
      "/assets/plugins/js/jquery.min.js",
      "/assets/plugins/js/popper.min.js",
      "/assets/plugins/js/bootstrap.min.js",
      "/assets/plugins/js/owl.carousel.js",
      "/assets/plugins/js/validator.min.js",
      "/assets/plugins/js/wow.min.js",
      "/assets/plugins/js/jquery.mixitup.min.js",
      "/assets/plugins/js/circle-progress.js",
      "/assets/plugins/js/jquery.nav.js",
      "/assets/plugins/js/jquery.fancybox.min.js",
      "/assets/plugins/js/isotope.pkgd.js",
      "/assets/plugins/js/packery-mode.pkgd.js",
      "/assets/js/custom-scripts.js",
    ];
    myScripts.forEach((src) => {
      var tag = document.createElement("script");
      tag.async = false;
      tag.src = src;
      document.getElementsByTagName("body")[0].appendChild(tag);
    });
  }

  render() {
    return (
      <>
        <Loader />

        <Header data={this.state.header} />

        <Home data={this.state.home} />

        <About data={this.state.about} />

        <Service data={this.state.service} />

        <Skills data={this.state.skills} />
        <section className='row section-separator'>
          {/* <div> */}
          <div
            className='col-sm-12 text-center section-title wow fadeInUp'
            data-wow-duration='0.8s'
            data-wow-delay='0.2s'>
            <h3>I'm having knowledge of</h3>
          </div>
          <div
            style={{
              padding: "20px",
              width: "100%",
            }}>
            <div id='owl-demo' className='owl-carousel owl-theme'>
              {this.state.techs.map((t, i) => (
                <div
                  className='item'
                  key={i}
                  // style={{ backgroundColor: "white" }}
                >
                  <img src={t.url} alt={t.name} />
                  <div>{t.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
        </section>

        <Experiences data={this.state.experiences} />

        <Portfolio data={this.state.portfolio} />

        {/* <Blog data={this.state.blogs} />

        <Testimonials data={this.state.reviews} /> */}

        <Footer data={this.state.home} />
      </>
    );
  }
}

export default App;

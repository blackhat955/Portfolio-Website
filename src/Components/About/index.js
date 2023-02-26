const About = (props) => {
  return (
    <section className='mh-about' id='mh-about'>
      <div className='container'>
        <div className='row section-separator'>
          <div className='col-sm-12 col-md-6'>
            <div
              className='mh-about-img shadow-2 wow fadeInUp'
              data-wow-duration='0.8s'
              data-wow-delay='0.4s'>
              <img
                src='assets/images/ab-img.png'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='mh-about-inner'>
              <h2
                className='wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.1s'>
                About Me
              </h2>
              <p
                className='wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.2s'>
                {props.data.describe}
              </p>
              <div
                className='mh-about-tag wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.3s'>
                <ul>
                  {props.data.techs.map((t, i) => (
                    <li key={i}>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={props.data.resume}
                className='btn btn-fill wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.4s'
                download>
                Resume <i className='fa fa-download'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

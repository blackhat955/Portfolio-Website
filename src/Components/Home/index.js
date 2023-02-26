const Home = (props) => {
  return (
    <section className='mh-home' id='mh-home'>
      <div className='home-ovimg'>
        <div className='container'>
          <div className='row xs-column-reverse section-separator vertical-middle-content home-padding'>
            <div className='col-sm-6'>
              <div className='mh-header-info'>
                <div
                  className='mh-promo wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.1s'>
                  <span>Hello I'm</span>
                </div>

                <h2
                  className='wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.2s'>
                  {props.data.name}
                </h2>
                <h4
                  className='wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.3s'>
                  {props.data.post}
                </h4>

                <ul>
                  <li
                    className='wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.4s'>
                    <i className='fa fa-envelope'></i>
                    <a href={"mailto:" + props.data.email}>
                      {props.data.email}
                    </a>
                  </li>
                  {props.data.contact != "" ? (
                    <li
                      className='wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.5s'>
                      <i className='fa fa-phone'></i>
                      <a href={"tel:+91" + props.data.contact}>
                        +91 {props.data.contact}
                      </a>
                    </li>
                  ) : null}

                  <li
                    className='wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.6s'>
                    <i className='fa fa-map-marker'></i>
                    <address>{props.data.address}</address>
                  </li>
                </ul>

                <ul
                  className='social-icon wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.7s'>
                  {props.data.social.map((s, i) => (
                    <li key={i}>
                      <a target='_blank' href={s.link}>
                        <i className={s.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-sm-6'>
              <div
                className='hero-img wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.6s'>
                <div className='img-border'>
                  <img
                    src={props.data.image}
                    alt='My Picture'
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

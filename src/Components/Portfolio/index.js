import { useState } from "react";

const Portfolio = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [modelData, setModelData] = useState(null);
  const toggleModel = (index) => {
    setModelData(props.data.projects[index]);
    setShowModel(!showModel);
  };
  return (
    <section className='mh-portfolio' id='mh-portfolio'>
      <div className='container'>
        <div className='row section-separator'>
          <div
            className='section-title col-sm-12 wow fadeInUp'
            data-wow-duration='0.8s'
            data-wow-delay='0.1s'>
            <h3> Portfolio</h3>
          </div>
          <div className='part col-sm-12'>
            <div className='portfolio-nav col-sm-12' id='filter-button'>
              <ul>
                <li
                  data-filter='*'
                  className='current wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.1s'>
                  <span>All Project</span>
                </li>
                {props.data.categories.map((p, i) => (
                  <li
                    key={i}
                    data-filter={`.${p.toLowerCase()}`}
                    className='wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay={`0.${i + 2}s`}>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className='mh-project-gallery col-sm-12 wow fadeInUp'
              id='project-gallery'
              data-wow-duration='0.8s'
              data-wow-delay='0.5s'>
              <div className='portfolioContainer row'>
                {props.data.projects.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => toggleModel(i)}
                    style={{ cursor: "pointer" }}
                    className={`grid-item col-md-4 col-sm-6 col-xs-12 ${p.category.toLowerCase()}`}>
                    <figure>
                      <img
                        src={p.image}
                        alt={p.title}
                        width='350'
                        height='250'
                      />
                      <figcaption className='fig-caption'>
                        <i className='fa fa-search'></i>
                        <h5 className='title'>{p.title}</h5>
                        <span className='sub-title'>{p.subTitle}</span>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modelData ? (
        <div
          className='fancybox-container fancybox-is-open fancybox-can-swipe'
          role='dialog'
          tabIndex='-1'
          id='fancybox-container-5'
          style={{
            transitionDuration: "366ms",
            display: showModel ? "inline-block" : "none",
          }}>
          <div className='fancybox-inner'>
            <div className='fancybox-stage'>
              <div className='fancybox-slide fancybox-slide--html fancybox-slide--current fancybox-slide--complete'>
                <div className='fancybox-bg' onClick={toggleModel}></div>
                <div
                  className='mh-portfolio-modal fancybox-content'
                  style={{ display: "inline-block" }}
                  id='mh'>
                  <div className='container'>
                    <div className='row mh-portfolio-modal-inner'>
                      <div className='col-sm-7'>
                        <div
                          id='myCarouselExampleIndicators'
                          className='carousel slide'
                          data-ride='carousel'>
                          <ol className='carousel-indicators'>
                            {modelData.pics.map((pic, i) => (
                              <li
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "100%",
                                }}
                                key={i}
                                data-target='#myCarouselExampleIndicators'
                                data-slide-to={i}
                                className={i === 0 ? "active" : ""}></li>
                            ))}
                          </ol>
                          <div className='carousel-inner'>
                            {modelData.pics.map((pic, i) => (
                              <div
                                className={
                                  i === 0
                                    ? "carousel-item active"
                                    : "carousel-item"
                                }
                                key={i}>
                                <img
                                  className='d-block w-100'
                                  src={pic.link}
                                  alt={pic.title}
                                />
                                <div className='carousel-caption d-none d-md-block'>
                                  {pic.title !== "" ? (
                                    <h5>{pic.title}</h5>
                                  ) : null}
                                  {pic.info !== "" ? <p>{pic.info}</p> : null}
                                </div>
                              </div>
                            ))}
                          </div>
                          <a
                            className='carousel-control-prev'
                            data-target='#myCarouselExampleIndicators'
                            role='button'
                            data-slide='prev'>
                            <span
                              className='carousel-control-prev-icon'
                              aria-hidden='true'></span>
                            <span className='sr-only'>Previous</span>
                          </a>
                          <a
                            className='carousel-control-next'
                            data-target='#myCarouselExampleIndicators'
                            role='button'
                            data-slide='next'>
                            <span
                              className='carousel-control-next-icon'
                              aria-hidden='true'></span>
                            <span className='sr-only'>Next</span>
                          </a>
                        </div>
                      </div>
                      <div className='col-sm-5'>
                        <h2>{modelData.title}</h2>
                        <h5>{modelData.subTitle}</h5>
                        <p>{modelData.description}</p>
                        <div className='mh-about-tag'>
                          <ul>
                            {modelData.techs.map((tech, i) => (
                              <li key={i}>
                                <span>{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {modelData.link !== "" ? (
                          <a
                            href={modelData.link}
                            target='_blank'
                            className='btn btn-fill'>
                            Live Demo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button
                    type='button'
                    onClick={toggleModel}
                    data-fancybox-close=''
                    className='fancybox-button fancybox-close-small'
                    title='Close'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      version='1'
                      viewBox='0 0 24 24'>
                      <path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;

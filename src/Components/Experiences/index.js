const Experiences = (props) => {
  return (
    <section className='mh-experince' id='mh-experience'>
      <div className='bolor-overlay'>
        <div className='container'>
          <div className='row section-separator'>
            <div className='col-sm-12 col-md-6'>
              <div className='mh-education'>
                <h3
                  className='wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.2s'>
                  Education
                </h3>
                <div className='mh-education-deatils'>
                  {props.data.education.map((e, i) => (
                    <div
                      key={i}
                      className='mh-education-item dark-bg wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay={`0.${3 + 2 * i}s`}>
                      <h4>
                        {e.name}
                        <br />
                        <a>{e.university}</a>
                      </h4>
                      <div className='mh-eduyear'>{e.year}</div>
                      <p>{e.describe}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='mh-work'>
                <h3>Work Experience</h3>
                <div className='mh-experience-deatils'>
                  {props.data.work.map((w, i) => (
                    <div
                      key={i}
                      className='mh-work-item dark-bg wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay={`0.${4 + 2 * i}s`}>
                      <h4>
                        {w.designation}
                        <br />
                        <a>{w.company}</a>
                      </h4>
                      <div className='mh-eduyear'>{w.period}</div>
                      <span>Responsibility :</span>
                      <ul className='work-responsibility'>
                        {w.responsibility.map((r, j) => (
                          <li key={j}>
                            <i className='fa fa-circle'></i>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

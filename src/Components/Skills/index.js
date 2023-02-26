const Skills = (props) => {
  return (
    <section className='mh-skills' id='mh-skills'>
      <div className='container'>
        <div className='row section-separator'>
          <div className='section-title text-center col-sm-12'>
            {/* <h2>Skills</h2> */}
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='mh-skills-inner'>
              <div
                className='mh-professional-skill wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.3s'>
                <h3>Technical Skills</h3>
                <div className='each-skills'>
                  {props.data.technical.map((t, i) => (
                    <div className='candidatos' key={i}>
                      <div className='parcial'>
                        <div className='info'>
                          <div className='nome'>{t.name}</div>
                          <div className='percentagem-num'>{`${t.per}%`}</div>
                        </div>
                        <div className='progressBar'>
                          <div
                            className='percentagem'
                            style={{ width: `${t.per}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div
              className='mh-professional-skills wow fadeInUp'
              data-wow-duration='0.8s'
              data-wow-delay='0.5s'>
              <h3>Professional Skills</h3>
              <ul className='mh-professional-progress'>
                {props.data.professional.map((p, i) => (
                  <li key={i}>
                    <div
                      className='mh-progress mh-progress-circle'
                      data-progress={p.per}></div>
                    <div className='pr-skill-name'>{p.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

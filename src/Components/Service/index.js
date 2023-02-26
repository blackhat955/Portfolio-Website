const Service = (props) => {
  return (
    <section className='mh-service'>
      <div className='container'>
        <div className='row section-separator'>
          <div
            className='col-sm-12 text-center section-title wow fadeInUp'
            data-wow-duration='0.8s'
            data-wow-delay='0.2s'>
            <h3>What I do</h3>
          </div>
          {props.data.map((s, i) => (
            <div style={{ margin: "auto" }} className='col-sm-4' key={i}>
              <div
                className='mh-service-item shadow-1 dark-bg wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay={`0.${3 + 2 * i}s`}>
                <i className={s.icon}></i>
                <h3>{s.title}</h3>
                <p>{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

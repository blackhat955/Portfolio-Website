const Testimonials = ({ data }) => {
  return (
    <section className='mh-testimonial' id='mh-testimonial'>
      <div className='home-v-img'>
        <div className='container'>
          <div className='row section-separator'>
            <div
              className='col-sm-12 section-title wow fadeInUp'
              data-wow-duration='0.8s'
              data-wow-delay='0.2s'>
              <h3>Client Reviews</h3>
            </div>
            <div
              className='col-sm-12 wow fadeInUp'
              id='mh-client-review'
              data-wow-duration='0.8s'
              data-wow-delay='0.3s'>
              {data.map((review, i) => (
                <div className='each-client-item' key={i}>
                  <div className='mh-client-item dark-bg black-shadow-1'>
                    <img src={review.img} alt='' className='img-fluid' />
                    <p>{review.said}</p>
                    <h4>{review.name}</h4>
                    <span>{review.post}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

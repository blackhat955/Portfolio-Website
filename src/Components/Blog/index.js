const Blog = ({ data }) => {
  return (
    <section className='mh-blog' id='mh-blog'>
      <div className='container'>
        <div className='row section-separator'>
          <div
            className='col-sm-12 section-title wow fadeInUp'
            data-wow-duration='0.8s'
            data-wow-delay='0.2s'>
            <h3>Featured Posts</h3>
          </div>
          {data.map((blog, i) => (
            <div className='col-sm-12 col-md-4' key={i}>
              <div
                className='mh-blog-item dark-bg wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay={`0.${3 + 2 * i}s`}>
                <img src={blog.img} alt='' className='img-fluid' />
                <div className='blog-inner'>
                  <h2>
                    <a href={blog.link}>{blog.title}</a>
                  </h2>
                  <div className='mh-blog-post-info'>
                    <ul>
                      <li>
                        <strong>Post On</strong>
                        <a href='#'>{blog.date}</a>
                      </li>
                    </ul>
                  </div>
                  <p>{blog.info}</p>
                  <a href={blog.link}>Read Full Post</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

const Collection = () => {
  return (
    <div className="pro-video">
      <div className="thumb-content row"></div>
      <div className="row">
        <div
          className="col text-end"
          style={{
            backgroundColor: `lightblue`,
            height: `457px`,
          }}
        >
          <div className="mh-100"></div>
        </div>
        <div className="col p-0">
          <div className="thumb-video">
            <video id="video" autoPlay loop muted playsinline width="812">
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-reverse-tour-of-a-library-full-of-books-21595-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

const ChinhSach = (props) => {
  const cs = props.chinhs;
  return (
    <div className="row">
      <div className="col-3 pe-0">
        <div className="border border-dark rounded-circle p-3 pb-4">
          <img src={cs.image} className="img-fluid ps-1" />
        </div>
      </div>
      <div className="col-9">
        <a
          href="#"
          className="link-primary fs-5 text-dark text-decoration-none"
        >
          {cs.title}
        </a>
        <p className="p-0 m-0 fs-6 text-primary">{cs.des}</p>
      </div>
    </div>
  );
};

export default ChinhSach;

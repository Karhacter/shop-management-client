const Coupun = (props) => {
  const coupun = props.coupun;
  return (
    <div className="row border rounded-4 p-3 ps-0 m-0 ms-1">
      <div className="col-3 pe-0">
        <div>
          <img src={coupun.image} className="img-fluid" />
        </div>
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col">
            <h5 className="fs-6 fw-bold">{coupun.title}</h5>
            <p className="ps-0 m-0 fs-6 fw-light">{coupun.des}</p>
          </div>
          <div className="col-12 pt-2  position-relative">
            <p className="p-0 m-0 fs-6 text-primary fw-light">Nhập mã</p>
            <p className="p-0 m-0 fs-6 text-primary fw-bold">{coupun.ma}</p>
            <div className="fs-6 position-absolute top-0 end-0">
              <button className="btn btn-primary rounded-4">Sao chép</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupun;

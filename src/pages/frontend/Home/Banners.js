const Banner = (props) => {
  const banner = props.banner;
  return <img src={banner.image} className="rounded-3 img-fluid" />;
};

export default Banner;

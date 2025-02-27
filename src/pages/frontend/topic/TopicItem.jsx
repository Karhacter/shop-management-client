import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

const TopicItem = (props) => {
  const topic = props.topic;
  return (
    <>
      <div className="col-4 col-md-4">
        <div className="post-item-image">
          <Link to={"/home/blog/" + topic.slug}>
            <img
              src={urlImage + "topics/" + topic.image}
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="col-8 col-md-8">
        <h2 className="post-item-title fs-5 py-1">
          <Link to={"/home/blog/" + topic.slug}>{topic.title}</Link>
        </h2>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                topic?.detail.substring(0, 200) || "No content available.",
            }}
          />
        </p>
      </div>
    </>
  );
};

export default TopicItem;

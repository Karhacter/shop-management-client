import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topicservice from "../../../services/TopicService";

const TopicList = () => {
  const [insertId, setInsertId] = useState(0);
  const [topics, setTopics] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    (async () => {
      const result = await Topicservice.get_list();
      setTopics(result.topics);
      console.log(result.topics);
    })();
  }, [insertId]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setStatus(1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const topic = new FormData();
    topic.append("name", name);
    topic.append("slug", slug);
    topic.append("description", description);
    topic.append("status", status);

    (async () => {
      const result = await Topicservice.store(topic);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.topic.insertId);
        console.log(result);
      }
    })();
    resetForm();
  };
  const handleDelete = async (id) => {
    const result = await Topicservice.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.topic.insertId);
      console.log(result);
      window.location.reload();
    }
  };
  return (
    <div className="maincontent bg-light p-4">
      <section className="content-header my-2">
        <h1 className="d-inline">Chủ đề bài viết</h1>
        <hr className="border-0" />
      </section>

      <section className="content-body my-2">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label>
                  <strong>Tên chủ đề (*)</strong>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Tên chủ để"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Tên slug(*)</strong>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                  placeholder="Tên slug"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>
                    <strong>Mô tả</strong>
                  </strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="form-control"
                  placeholder="Mô tả"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button className="btn btn-sm btn-success" type="submit">
                  <i className="fa fa-save"></i> Lưu[Thêm moi]
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row mt-3 align-items-center">
                <div className="col-12">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link className="text-decoration-none">Tất cả (123)</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="text-decoration-none">
                        Xuất bản (12)
                      </Link>
                    </li>
                    <li className="list-inline-item ">
                      <Link className="text-decoration-none">Rác (12)</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row my-2 align-items-center">
                <div className="col-md-6">
                  <select name="" className="d-inline me-1">
                    <option value="">Hành động</option>
                    <option value="">Bỏ vào thùng rác</option>
                  </select>
                  <button className="btnapply">Áp dụng</button>
                </div>
                <div className="col-md-6 text-end">
                  <input type="text" className="search d-inline" />
                  <button className="d-inline">Tìm kiếm</button>
                </div>
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">
                      <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th>Hinh anh</th>
                    <th>Tên chủ đề</th>
                    <th>Tên slug</th>
                    <th className="text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.length > 0 &&
                    topics.map((topic, index) => {
                      return (
                        <tr className="datarow">
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <img
                              className="img-fluid"
                              src={topic.image}
                              alt={topic.image}
                            />
                          </td>
                          <td>
                            <div className="name">
                              <Link href="#">{topic.name}</Link>
                            </div>
                          </td>
                          <td>{topic.slug}</td>
                          <td className="text-center">
                            <div className="function_style">
                              <Link
                                className="px-1 me-1 text-primary"
                                to={"/admin/topic/edit/" + topic.id}
                              >
                                <i className="btn btn btn-primary fa fa-edit"></i>
                              </Link>
                              <Link className="px-1 me-1 text-danger">
                                <i
                                  className="btn btn btn-danger fa fa-trash"
                                  onClick={() => handleDelete(topic.id)}
                                ></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TopicList;

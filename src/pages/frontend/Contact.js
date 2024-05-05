import { useState } from "react";
import ContactService from "../../services/ContactService";
const Contact = () => {
  const [insertId, setInsertId] = useState(0);
  const [contact, setContact] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setTitle("");
    setContent("");
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const contact = new FormData();
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);


    (async () => {
      const result = await ContactService.store(contact);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.contact.insertId);
        console.log(result);
      }
    })();
    resetForm();
  };
  return (
    <>
      <section class="bg-light">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb py-2 my-0">
              <li class="breadcrumb-item">
                <a class="text-main" href="http://localhost:3000/">
                  Trang chủ
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section class="hdl-maincontent py-2">
        <div class="container">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407468411!3d10.830680489321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgVMSDbmcgTmjGoW4gUGjDuiwgUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692683712719!5m2!1svi!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="name" class="text-main">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    placeholder="Nhập họ tên"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="text-main">
                    Điện thoại
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    id="phone"
                    class="form-control"
                    placeholder="Nhập điện thoại"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="text-main">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="form-control"
                    placeholder="Nhập email"
                  />
                </div>
                <div class="mb-3">
                  <label for="title" class="text-main">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    id="title"
                    class="form-control"
                    placeholder="Nhập tiêu đề"
                  />
                </div>
                <div class="mb-3">
                  <label for="detail" class="text-main">
                    Nội dung
                  </label>
                  <textarea
                    name="detail"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="detail"
                    class="form-control"
                    placeholder="Nhập nội dung liên hệ"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-success" name="GUI">
                    Gửi liên hệ
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

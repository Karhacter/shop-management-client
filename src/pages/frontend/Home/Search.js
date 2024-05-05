import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="row">
      <div className="col fw-normal pb-3">
        <strong>
          HÔM NAY LẠI ĐẾN THẾ
          <br /> GIỚI HUYỀN DIỆU NÀO ĐÂY?
        </strong>
      </div>
      <div className="col-lg-5">
        <div className="py-2 rounded-5 p-3 bg-light">
          <form className="d-flex">
            <input
              className="input-group-field auto-search search-auto form-control bg-light border-0"
              type="search"
              placeholder="Nhập tên sản phẩm..."
              aria-label="Search"
            />
            <button className="border-0 bg-light">
              <IoSearchOutline size={35} color="gray" className="pb-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

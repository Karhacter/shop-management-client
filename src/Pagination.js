import React from "react";

class Pagination extends React.Component {
  pageCurrent() {
    const page = this.props.page ? parseInt(this.props.page) : 1;
    return page <= 0 ? 1 : page;
  }

  pageOffset(page, limit) {
    return (page - 1) * limit;
  }

  pageLinks(total, current, limit, url = "") {
    if (total === 0) return null;
    let numPage = Math.floor(total / limit);
    if (total / limit - numPage > 0) {
      numPage += 1;
    }
    const pages = [];
    if (numPage === 1) {
      return null;
    }
    if (current === 1) {
      pages.push(
        <li className="page-item" key="first">
          <a className="page-link">Đầu </a>
        </li>
      );
      pages.push(
        <li className="page-item" key="prev">
          <a className="page-link">&laquo; </a>
        </li>
      );
    } else {
      pages.push(
        <li className="page-item" key="first">
          <a className="page-link" href={`${url}&page=1`}>
            Đầu
          </a>
        </li>
      );
      pages.push(
        <li className="page-item" key="prev">
          <a className="page-link" href={`${url}&page=${current - 1}`}>
            &laquo;
          </a>
        </li>
      );
    }
    if (current <= 3) {
      for (let i = 1; i <= 5 && i <= numPage; i++) {
        pages.push(
          <li className="page-item" key={i}>
            <a className="page-link" href={`${url}&page=${i}`}>
              {i}
            </a>
          </li>
        );
      }
    } else {
      if (numPage >= current + 2) {
        for (let i = current - 2; i <= current + 2 && i <= numPage; i++) {
          pages.push(
            <li className="page-item" key={i}>
              <a className="page-link" href={`${url}&page=${i}`}>
                {i}
              </a>
            </li>
          );
        }
      } else {
        for (let i = numPage - 4; i <= numPage; i++) {
          if (i > 0) {
            pages.push(
              <li className="page-item" key={i}>
                <a className="page-link" href={`${url}&page=${i}`}>
                  {i}
                </a>
              </li>
            );
          }
        }
      }
    }
    if (current === numPage) {
      pages.push(
        <li className="page-item" key="next">
          <a className="page-link">&raquo; </a>
        </li>
      );
      pages.push(
        <li className="page-item" key="last">
          <a className="page-link">Cuối</a>
        </li>
      );
    } else {
      pages.push(
        <li className="page-item" key="next">
          <a className="page-link" href={`${url}&page=${current + 1}`}>
            &raquo;
          </a>
        </li>
      );
      pages.push(
        <li className="page-item" key="last">
          <a className="page-link" href={`${url}&page=${numPage}`}>
            Cuối
          </a>
        </li>
      );
    }
    return <ul className="pagination justify-content-center">{pages}</ul>;
  }

  render() {
    const { total, limit, url } = this.props;
    const current = this.pageCurrent();
    return this.pageLinks(total, current, limit, url);
  }
}

export default Pagination;

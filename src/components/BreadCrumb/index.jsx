import { Link } from "react-router-dom";
const BreadCrumb = ({ name }) => {
  return (
    <div className="ms-2 d-flex">
      <p className="fs-6 me-2">
        <Link className="text-decoration-none text-black-50" to="/">
          Home
        </Link>
      </p>
      <span className="fs-6 text-black-50 me-2">/</span>
      <p className="fs-6 me-2">
        <Link className="text-decoration-none text-black-50" to="/Products">
          Products
        </Link>
      </p>
      <span className="fs-6 text-black-50 me-2">/</span>
      <p className="fs-6 text-black-50">{name && name}</p>
    </div>
  );
};

export default BreadCrumb;

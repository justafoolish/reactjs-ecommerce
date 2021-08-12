import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./SearchPanel.scss";
import useAnimation from "../../hooks/useAnimation";
import useFetch from "../../hooks/useFetch";
import FormInput from "../FormInput";
import Loading from "../Loading";
import { ProductCard } from "..";

function SearchPanel({ invisible }) {
  const { shouldRender, onAnimationEnd } = useAnimation(invisible);
  const [searchValue, setSearchValue] = React.useState("");
  const getSearchValue = (value) => setSearchValue(value);
  const { data, isPending } = useFetch(searchValue.length ? `https://hactun-ecom.herokuapp.com/api/products?name_like=${searchValue}` : "");

  return (
    shouldRender && (
      <div className={`search--panel${invisible ? "" : " collapsing"}`} key={invisible} onAnimationEnd={onAnimationEnd}>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className={`search--input${invisible ? "" : " expanding"}`}>
            <FormInput type="text" label="Search" submitInput={getSearchValue} custom="mb-0" />
            <button type="submit">
              <Search size={30} />
            </button>
          </Form.Group>
        </Form>
        <div className="container overflow-auto mb-3 border-bottom border-3 border-dark h-100">
          <Loading isPending={isPending} />
          <div className="row">
            {searchValue.length !== 0 &&
              data &&
              data.map((product) => (
                <div className="col-lg-3 col-md-4 col-6" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
}

SearchPanel.propTypes = {
  invisible: PropTypes.bool,
};
SearchPanel.defaultProps = {
  invisible: false,
};

export default SearchPanel;

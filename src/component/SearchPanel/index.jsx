import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./SearchPanel.scss";
import useAnimation from "../../hooks/useAnimation";

function SearchPanel({ invisible }) {
  const { shouldRender, onAnimationEnd } = useAnimation(invisible);
  return (
    shouldRender && (
      <div className={`search--panel${invisible ? "" : " collapsing"}`} key={invisible} onAnimationEnd={onAnimationEnd}>
        <Form>
          <Form.Group className={`search--input${invisible ? "" : " expanding"}`}>
            <Form.Control type="text" placeholder="Search..." />
            <Search size={30} />
          </Form.Group>
        </Form>
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

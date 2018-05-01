import React from "react";
import PropTypes from "prop-types";
const Item = ({ name, color, icon }) => (
  <div>
    <p>{name}</p>
    <i style={{ color: color }} className={"fa fa-10x fa-" + icon} />
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Item;

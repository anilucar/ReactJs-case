import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, url, up, down, count, remove }) => (
  <div className="container box mb-3 pr">
    <div className="row">
      <div className="col-3">
        <div className="point-box">
          <section className="counter">{count}</section>
          <span>POINTS</span>
        </div>
      </div>
      <div className="col-9 content-area">
        <h4>{name}</h4>
        <small>({url})</small>
        <div className="voted mt-3">
          <span className="link" onClick={up}>&uarr; Up</span>
          <span className="link ml-3" onClick={down}>&darr; Down</span>
        </div>
      </div>
      <div className="remove">
        <button onClick={() => remove(name)} className="btn btn-outline-danger btn-sm rounded-circle">&#8259;</button>
      </div>
    </div>
  </div>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.any.isRequired,
  count: PropTypes.number.isRequired,
  up: PropTypes.func,
  down: PropTypes.func,
}

Item.defaultProps = {
  name: "",
  url: "",
  count: 0
}

export default Item;
import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items, arr, onRemove, plus, minus }) => (
  arr.length === 0 ? <div className="alert alert-info">You do not have any data</div> :
    <div>
      {items.length > 0 && <h6>Total: {items.length}</h6>}
      {arr.map(res => <Item key={res.id} {...res} up={() => plus(res.id)} down={() => minus(res.id)} remove={() => onRemove(res)} />)}
    </div>
)

ItemList.defaultProps = {
  arr: [],
  items: [],
  onRemove: () => { },
  plus: () => { },
  minus: () => { }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  arr: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

export default ItemList;
import React from 'react'
import PropTypes from 'prop-types'

const Remove = ({ name, cancel, accept }) => (
  <div className={name !== null ? `modal show fade db` : `modal`} >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title">Remove Link</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onClick={cancel}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
          <p className="text-center">Do you want to remove:</p>
          <hr />
          <h3 className="text-center">{name}</h3>
          <hr />
          <div className="text-center">
            <button className="btn btn-dark mr-5" onClick={accept}>OK</button>
            <button className="btn btn-dark" onClick={cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Remove.defaultProps = {
  name: '',
  cancel: () => { },
  accept: () => { },
}

Remove.prototype = {
  name: PropTypes.string.isRequired,
  cancel: PropTypes.func.isRequired,
  accept: PropTypes.func.isRequired,
}


export default Remove
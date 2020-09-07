import React from 'react'
import PropTypes from 'prop-types'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pager: {} }
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }
  }

  setPage(page) {
    const { items, pageSize, direction } = this.props
    let pager = this.state.pager

    if (page < 1 || page > pager.totalPages) {
      return
    }
    pager = this.getPager(items.length, page, pageSize)
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
    this.setState({ pager: pager })
    this.props.onChangePage(pageOfItems, page)
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1
    const totalPages = Math.ceil(totalItems / pageSize)
    const startPage = 1
    const endPage = totalPages
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    }
  }


  render() {
    const pager = this.state.pager
    if (!pager.pages || pager.totalItems.length < this.state.pageSize) {
      return null
    }

    return (
      <nav>
        <ul className="justify-content-center pagination">
              <li className="page-item">
                    <button className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}  aria-label="Previous">
                        <span aria-hidden="true">&#60;</span>
                        <span className="sr-only">Previous</span>
                    </button>
              </li>
          {
            pager.pages.map((page, index) =>
              <li key={index} className={pager.currentPage === page ? 'active page-item' : 'page-item'} onClick={() => this.setPage(page)}>
                <a className="page-link">{page}</a>
              </li>
            )
          }
           <li className="page-item">
                    <button className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}  aria-label="Next">
                        <span aria-hidden="true"> &#62;</span>
                        <span className="sr-only">Next</span>
                    </button>
            </li>
         
        </ul>
      </nav>
    )
  }
}

Pagination.defaultProps = {
  initialPage: 1,
  pageSize: 6
}

Pagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
}

export default Pagination
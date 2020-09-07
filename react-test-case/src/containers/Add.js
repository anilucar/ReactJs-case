import React from 'react'
import { toast } from 'react-toastify'
import { set, get } from '../utils'

class Add extends React.Component {
	state = {
		id: Date.now(),
		name: '',
		url: '',
		count: 0,
		timer: Date.now(),
		showToast: false,
		level: 'success',
		message: null
	}

	goBack = () => this.props.history.goBack()

	onSubmit = (e) => {
		e.preventDefault()
		this.saveDataToLocalStorage(this.state)
		toast.success(`${this.state.name} added.`)
		this.props.history.push('/')
	}

	saveDataToLocalStorage(data) {
		const oldArray = get('data') || []
		const newArray = [data, ...oldArray]
		set('data', newArray)
	}

	onChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="container">
				<button className="btn btn-xs" onClick={this.goBack}>
					&laquo; List
				</button>
				<div className="container">
					<div className="width600">
						<h2>Add new link</h2>
						<div className="row mb-2">
							<div className="col">
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<label>Name</label>
										<input type="name" required name="name" onChange={this.onChange} className="form-control" placeholder="Enter name" />
									</div>
									<div className="form-group">
										<label>Url</label>
										<input type="url" required name="url" onChange={this.onChange} className="form-control" placeholder="Url name" pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$" />
									</div>
									<div className="float-right">
										<button type="submit" className="btn btn-dark">Add</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Add

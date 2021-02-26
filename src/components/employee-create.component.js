import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            surname: '',
            email: ''
        }
    }

    componentDidMount() {

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        }
        console.log(employee);
        axios.post('http://localhost:5000/employees', employee)
            .then(res => {
                console.log(res.data);
                window.location = '/';
            });
    }

    render() {
        return (
            <div class="m-3">
                <h3>Add Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Surname: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.surname}
                            onChange={this.onChangeSurname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add New" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
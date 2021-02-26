import React, { Component } from 'react';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.surname}</td>
        <td>{props.employee.email}</td>
    </tr>
)

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employees')
            .then(response => {
                this.setState({ employees: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    employeesList() {
        return this.state.employees.map(e => {
            return <Employee employee={e} key={e._id} />;
        })
    }

    render() {
        return (
            <div class="m-3">
                <h3>Employees List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.employeesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
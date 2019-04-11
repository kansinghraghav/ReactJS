import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Assignment = props => (
    <tr>
        <td className={props.assignment.assignment_completed ? 'completed' : ''}>{props.assignment.assignment_description}</td>
        <td className={props.assignment.assignment_completed ? 'completed' : ''}>{props.assignment.assignment_responsible}</td>
        <td className={props.assignment.assignment_completed ? 'completed' : ''}>{props.assignment.assignment_priority}</td>
        <td>
            <Link to={"/edit/"+props.assignment._id}>Edit</Link>
        </td>
    </tr>
)

class AssignmentsList extends Component {
	constructor(props) {
        super(props);
        this.state = {assignments: []};
    }
     componentDidMount() {
        axios.get('http://localhost:4000/assignments/')
            .then(response => {
                this.setState({ assignments: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    componentDidUpdate() {
        axios.get('http://localhost:4000/assignments/')
        .then(response => {
            this.setState({assignments: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    assignmentList() {
        return this.state.assignments.map(function(currentAssignment, i){
            return <Assignment assignment={currentAssignment} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Assignment List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.assignmentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AssignmentsList
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Assignment = props => (
    <tr>
        <td className={props.assignment.completed ? 'completed' : ''}>{props.assignment.assignment}</td>
        <td className={props.assignment.completed ? 'completed' : ''}>{props.assignment.responsible}</td>
        <td className={props.assignment.completed ? 'completed' : ''}>{props.assignment.priority}</td>
        <td>
            <Link to={"/edit/"+props.assignment.id}>Edit</Link>
        </td>
    </tr>
)

class AssignmentsList extends Component {
	constructor(props) {
        super(props);
        this.state = {assignments: []};
    }

    
     componentDidMount() {
        axios.get('http://localhost:8081/assignments/assignments')
            .then(response => {
                this.setState({ assignments: response.data });
                console.log('assignment list', response.data);
            })
            .catch(function (error){
                console.log(error);
            })
    }
    // componentDidUpdate() {
    //     axios.get('http://localhost:8081/assignments/assignments')
    //     .then(response => {
    //         this.setState({assignments: response.data});
    //         console.log('assignment list', response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }

    assignmentList() {
        return this.state.assignments.map(function(currentAssignment, i){
            return <Assignment assignment={currentAssignment} key={i} />;
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Assignment List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Assignment</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.assignmentList() }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default AssignmentsList
import React, { Component } from 'react'
import axios from 'axios'



class EditAssignment extends Component {
	constructor(props) {
        super(props);
		console.log('props in EditAssignment:', props)
		
        this.onChangeAssignmentDescription = this.onChangeAssignmentDescription.bind(this);
        this.onChangeAssignmentResponsible = this.onChangeAssignmentResponsible.bind(this);
        this.onChangeAssignmentPriority = this.onChangeAssignmentPriority.bind(this);
        this.onChangeAssignmentCompleted = this.onChangeAssignmentCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            assignment_description: '',
            assignment_responsible: '',
            assignment_priority: '',
            assignment_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/assignments/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    assignment_description: response.data.assignment_description,
                    assignment_responsible: response.data.assignment_responsible,
                    assignment_priority: response.data.assignment_priority,
                    assignment_completed: response.data.assignment_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeAssignmentDescription(e) {
        this.setState({
            assignment_description: e.target.value
        });
    }

    onChangeAssignmentResponsible(e) {
        this.setState({
            assignment_responsible: e.target.value
        });
    }

    onChangeAssignmentPriority(e) {
        this.setState({
            assignment_priority: e.target.value
        });
    }

    onChangeAssignmentCompleted(e) {
        this.setState({
            assignment_completed: !this.state.assignment_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            assignment_description: this.state.assignment_description,
            assignment_responsible: this.state.assignment_responsible,
            assignment_priority: this.state.assignment_priority,
            assignment_completed: this.state.assignment_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/assignments/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Assignment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.assignment_description}
                                onChange={this.onChangeAssignmentDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.assignment_responsible}
                                onChange={this.onChangeAssignmentResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.assignment_priority==='Low'} 
                                    onChange={this.onChangeAssignmentPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.assignment_priority==='Medium'} 
                                    onChange={this.onChangeAssignmentPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.assignment_priority==='High'} 
                                    onChange={this.onChangeAssignmentPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeAssignmentCompleted}
                                checked={this.state.assignment_completed}
                                value={this.state.assignment_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Assignment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditAssignment
import React, { Component } from 'react'
import axios from 'axios'

class CreateAssignment extends Component {

    constructor(props) {
        super(props);

        this.onChangeAssignmentDescription = this.onChangeAssignmentDescription.bind(this)
        this.onChangeAssignmentResponsible = this.onChangeAssignmentResponsible.bind(this)
        this.onChangeAssignmentPriority = this.onChangeAssignmentPriority.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            Assignment_description: '',
            Assignment_responsible: '',
            Assignment_priority: '',
            Assignment_completed: false
        }
    }

    onChangeAssignmentDescription(e) {
        this.setState({
            Assignment_description: e.target.value
        });
    }

    onChangeAssignmentResponsible(e) {
        this.setState({
            Assignment_responsible: e.target.value
        });
    }

    onChangeAssignmentPriority(e) {
        this.setState({
            Assignment_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Assignment Description: ${this.state.Assignment_description}`);
        console.log(`Assignment Responsible: ${this.state.Assignment_responsible}`);
        console.log(`Assignment Priority: ${this.state.Assignment_priority}`);
        
        const newAssignments = {
            assignment_description: this.state.Assignment_description,
            assignment_responsible: this.state.Assignment_responsible,
            assignment_priority: this.state.Assignment_priority,
            assignment_completed: this.state.Assignment_completed
        };
		
		axios.post('http://localhost:4000/assignments/add', newAssignments)
            .then(res => console.log(res.data));

        this.setState({
            Assignment_description: '',
            Assignment_responsible: '',
            Assignment_priority: '',
            Assignment_completed: false
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Assignment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Assignment_description}
                                onChange={this.onChangeAssignmentDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Assignment_responsible}
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
                                    checked={this.state.Assignment_priority==='Low'} 
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
                                    checked={this.state.Assignment_priority==='Medium'} 
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
                                    checked={this.state.Assignment_priority==='High'} 
                                    onChange={this.onChangeAssignmentPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Assignment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateAssignment
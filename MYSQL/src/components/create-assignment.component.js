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
            assignment: '',
            responsible: '',
            priority: '',
            Completed: false
        }
    }

    onChangeAssignmentDescription(e) {
        this.setState({
            assignment: e.target.value
        });
    }

    onChangeAssignmentResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    onChangeAssignmentPriority(e) {
        this.setState({
            priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Assignment task: ${this.state.assignment}`);
        console.log(`Assignment Responsible: ${this.state.responsible}`);
        console.log(`Assignment Priority: ${this.state.priority}`);
        
        const newAssignments = {
            assignment: this.state.assignment,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.Completed
        };
		
		axios.post('http://localhost:8081/assignments/assignments', newAssignments)
            .then(res => console.log(res.data));

        this.setState({
            assignment: '',
            responsible: '',
            priority: '',
            Completed: false
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Assignment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Assignment: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.assignment}
                                onChange={this.onChangeAssignmentDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.responsible}
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
                                    checked={this.state.priority==='Low'} 
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
                                    checked={this.state.priority==='Medium'} 
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
                                    checked={this.state.priority==='High'} 
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
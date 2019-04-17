import React, { Component } from 'react'
import axios from 'axios'



class EditAssignment extends Component {
	constructor(props) {
        super(props);
		console.log('props in EditAssignment:', props)
		
        this.onChangeAssignmentDescription = this.onChangeAssignmentDescription.bind(this);
        this.onChangeAssignmentResponsible = this.onChangeAssignmentResponsible.bind(this);
        this.onChangeAssignmentPriority = this.onChangeAssignmentPriority.bind(this);
        this.onChangeAssignmentStatus = this.onChangeAssignmentStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            assignment: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/assignments/assignments/'+this.props.match.params.id)
            .then(response => {
                console.log('in edit',response.data);
                this.setState({
                    assignment: response.data.assignment,
                    responsible: response.data.responsible,
                    priority: response.data.priority,
                    completed: response.data.completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeAssignmentStatus(e) {
        this.setState({
            completed: !this.state.completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            assignment: this.state.assignment,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };
        console.log(obj);
        axios.post('http://localhost:8081/assignments/assignments/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Assignment</h3>
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="statusCheckbox"
                                type="checkbox"
                                name="statusCheckbox"
                                onChange={this.onChangeAssignmentStatus}
                                checked={this.state.completed}
                                value={this.state.completed}
                                />
                        <label className="form-check-label" htmlFor="statusCheckbox">
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
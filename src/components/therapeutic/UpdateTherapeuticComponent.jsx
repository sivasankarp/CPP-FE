import React, { Component } from 'react'
import TherapeuticService from '../../services/TherapeuticService';

class UpdateTherapeuticComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: this.props.match.params._id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateTherapeutic = this.updateTherapeutic.bind(this);
    }

    componentDidMount(){
        TherapeuticService.getTherapeuticById(this.state._id).then( (res) =>{
            let therapeutic = res.data;
            this.setState({firstName: therapeutic.firstName,
                lastName: therapeutic.lastName,
                emailId : therapeutic.emailId
            });
        });
    }

    updateTherapeutic = (e) => {
        e.preventDefault();
        let therapeutic = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('therapeutic => ' + JSON.stringify(therapeutic));
        console.log('_id => ' + JSON.stringify(this.state._id));
        TherapeuticService.updateTherapeutic(therapeutic, this.state._id).then( res => {
            this.props.history.push('/therapeutics');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/therapeutics');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="content-wrapper">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Therapeutic</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTherapeutic}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTherapeuticComponent

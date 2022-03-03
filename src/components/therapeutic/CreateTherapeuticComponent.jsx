import React, { Component } from 'react'
import TherapeuticService from '../../services/TherapeuticService';

class CreateTherapeuticComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            _id: this.props.match.params._id,
            title:''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        
        this.saveOrUpdateTherapeutic = this.saveOrUpdateTherapeutic.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state._id === '_add'){
            return
        }else{
            TherapeuticService.getTherapeuticById(this.state._id).then( (res) =>{
                let therapeutic = res.data;
                this.setState({
                    title: therapeutic.data.title
                });
            });
        }        
    }
    
    saveOrUpdateTherapeutic = (e) => {
        e.preventDefault();
        let therapeutic = {
            title: this.state.title
        };
        console.log('therapeutic => ' + JSON.stringify(therapeutic));

        // step 5
        if(this.state._id === '_add'){
            TherapeuticService.createTherapeutic(therapeutic).then(res =>{
                this.props.history.push('/therapeutics');
            });
        }else{
            TherapeuticService.updateTherapeutic(therapeutic, this.state._id).then( res => {
                this.props.history.push('/therapeutics');
            });
        }
    }

    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    cancel(){
        this.props.history.push('/therapeutics');
    }

    getTitle(){
        if(this.state._id === '_add'){
            return <h3 className="text-center">Add Therapeutic</h3>
        }else{
            return <h3 className="text-center">Update Therapeutic</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="content-wrapper p-5">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTherapeutic}>Save</button>
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

export default CreateTherapeuticComponent

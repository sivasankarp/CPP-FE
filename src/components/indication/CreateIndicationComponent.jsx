import React, { Component } from 'react'
import IndicationService from '../../services/IndicationService';

class CreateIndicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            _id: this.props.match.params._id,
            title:''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        
        this.saveOrUpdateIndication = this.saveOrUpdateIndication.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state._id === '_add'){
            return
        }else{
            IndicationService.getIndicationById(this.state._id).then( (res) =>{
                let indication = res.data;
                this.setState({
                    title: indication.data.title
                });
            });
        }        
    }
    
    saveOrUpdateIndication = (e) => {
        e.preventDefault();
        let indication = {
            title: this.state.title
        };
        console.log('indication => ' + JSON.stringify(indication));

        // step 5
        if(this.state._id === '_add'){
            IndicationService.createIndication(indication).then(res =>{
                this.props.history.push('/indications');
            });
        }else{
            IndicationService.updateIndication(indication, this.state._id).then( res => {
                this.props.history.push('/indications');
            });
        }
    }

    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    cancel(){
        this.props.history.push('/indications');
    }

    getTitle(){
        if(this.state._id === '_add'){
            return <h3 className="text-center">Add Indication</h3>
        }else{
            return <h3 className="text-center">Update Indication</h3>
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
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateIndication}>Save</button>
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

export default CreateIndicationComponent

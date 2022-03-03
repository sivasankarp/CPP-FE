import React, { Component } from 'react'
import IndicationService from '../../services/IndicationService';

class ListIndicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { indications: [] }

        this.addIndication = this.addIndication.bind(this);
        this.editIndication = this.editIndication.bind(this);
        this.deleteIndication = this.deleteIndication.bind(this);
    }

    deleteIndication(_id){
        IndicationService.deleteIndication(_id).then( res => {
            this.setState({indications: this.state.indications.filter(indication => indication._id !== _id)});
        });
    }
    editIndication(_id){
        this.props.history.push(`/add-indication/${_id}`);
    }

    componentDidMount(){
        IndicationService.getIndication().then((res) => {
            // this.setState({ indications: res.data});s
            this.setState({ indications: res.data.data});
        });
    }

    addIndication(){
        this.props.history.push('/add-indication/_add');
    }

    render() {
        return (
            <div class="">
                <div className="content-wrapper p-5">
                    <h2 className="text-center">Indication List</h2>
                    <div className = "row">
                        <button className="btn btn-primary" onClick={this.addIndication}> Add Indication</button>
                    </div>
                    <br></br>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.indications.map(
                                        data => 
                                        <tr key = {data.id}>
                                            <td>{ data.title}</td>   
                                            <td>
                                                <button onClick={ () => this.editIndication(data.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteIndication(data.id)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListIndicationComponent

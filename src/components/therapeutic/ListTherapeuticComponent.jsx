import React, { Component } from 'react'
import TherapeuticService from '../../services/TherapeuticService';

class ListTherapeuticComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { therapeutics: [] }

        this.addTherapeutic = this.addTherapeutic.bind(this);
        this.editTherapeutic = this.editTherapeutic.bind(this);
        this.deleteTherapeutic = this.deleteTherapeutic.bind(this);
    }

    deleteTherapeutic(_id){
        TherapeuticService.deleteTherapeutic(_id).then( res => {
            this.setState({therapeutics: this.state.therapeutics.filter(therapeutic => therapeutic._id !== _id)});
        });
    }
    editTherapeutic(_id){
        this.props.history.push(`/add-therapeutic/${_id}`);
    }

    componentDidMount(){
        TherapeuticService.getTherapeutic().then((res) => {
            // this.setState({ therapeutics: res.data});s
            this.setState({ therapeutics: res.data.data});
        });
    }

    addTherapeutic(){
        this.props.history.push('/add-therapeutic/_add');
    }

    render() {
        return (
            <div class="">
                <div className="content-wrapper p-5">
                    <h2 className="text-center">Therapeutic List</h2>
                    <div className = "row">
                        <button className="btn btn-primary" onClick={this.addTherapeutic}> Add Therapeutic</button>
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
                                    this.state.therapeutics.map(
                                        data => 
                                        <tr key = {data.id}>
                                            <td>{ data.title}</td>   
                                            <td>
                                                <button onClick={ () => this.editTherapeutic(data.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTherapeutic(data.id)} className="btn btn-danger">Delete </button>
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

export default ListTherapeuticComponent

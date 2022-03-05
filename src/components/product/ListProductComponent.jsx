import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { products: [] }

        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(_id){
        ProductService.deleteProduct(_id).then( res => {
            this.setState({products: this.state.products.filter(product => product._id !== _id)});
        });
    }
    editProduct(_id){
        this.props.history.push(`/add-product/${_id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            console.log('res',res.data.data);
            this.setState({ products: res.data});
           // this.setState({ products: res.data.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div class="">
                <div className="content-wrapper p-5">
                    <h2 className="text-center">Product List</h2>
                    <div className = "row">
                        <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                    </div>
                    <br></br>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Gs Code</th>
                                    <th>Product Name</th>
                                    <th>Trade Name</th>
                                    <th>Therapeutic Area</th>
                                    <th>Indication</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        data => 
                                        <tr key = {data.id}>
                                            <td>{ data.product_code}</td>   
                                            <td>{data.gs_code}</td>
                                            <td>{data.product_name}</td>
                                            <td>{ data.trade_name}</td>   
                                            <td>{data.therapeutic_area}</td>
                                            <td>{data.indication}</td>
                                            <td>
                                                <button onClick={ () => this.editProduct(data.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(data.id)} className="btn btn-danger">Delete </button>
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

export default ListProductComponent

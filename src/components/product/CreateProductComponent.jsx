import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            _id: this.props.match.params._id,
            product_code:'',
            gs_code:'',
            product_name:'',
            trade_name:'',
            therapeutic_area:'',
            indication:''
        }
        this.changeProductCodeHandler = this.changeProductCodeHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeGsCodeHandler = this.changeGsCodeHandler.bind(this);
        this.changeTradeNameHandler = this.changeTradeNameHandler.bind(this);
        this.changeTherapeuticAreaHandler = this.changeTherapeuticAreaHandler.bind(this);
        this.changeIndicationHandler = this.changeIndicationHandler.bind(this);
        
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state._id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state._id).then( (res) =>{
                let product = res.data;
                this.setState({
                    product_code: product.data.product_code,
                    product_name: product.data.product_name,
                    gs_code : product.data.gs_code,
                    trade_name : product.data.trade_name,
                    therapeutic_area : product.data.therapeutic_area,
                    indication : product.data.indication,
                });
            });
        }        
    }
    
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            product_code: this.state.product_code, 
            product_name: this.state.product_name, 
            gs_code: this.state.gs_code, 
            trade_name: this.state.trade_name, 
            therapeutic_area: this.state.therapeutic_area, 
            indication: this.state.indication
        };
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state._id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state._id).then( res => {
                this.props.history.push('/products');
            });
        }
    }

    
    changeProductCodeHandler= (event) => {
        this.setState({product_code: event.target.value});
    }
    changeGsCodeHandler= (event) => {
        this.setState({gs_code: event.target.value});
    }
    changeProductNameHandler= (event) => {
        this.setState({product_name: event.target.value});
    }
    changeTradeNameHandler= (event) => {
        this.setState({trade_name: event.target.value});
    }
    changeTherapeuticAreaHandler= (event) => {
        this.setState({therapeutic_area: event.target.value});
    }
    changeIndicationHandler= (event) => {
        this.setState({indication: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state._id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
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
                                            <label> Product Code: </label>
                                            <input placeholder="Product Code" name="product_code" className="form-control" 
                                                value={this.state.product_code} onChange={this.changeProductCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="product_name" className="form-control" 
                                                value={this.state.product_name} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> GS Code: </label>
                                            <input placeholder="Gs Code" name="gs_code" className="form-control" 
                                                value={this.state.gs_code} onChange={this.changeGsCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Trade Name: </label>
                                            <input placeholder="Trade Name" name="trade_name" className="form-control" 
                                                value={this.state.trade_name} onChange={this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Therapeutic Area: </label>
                                            <input placeholder="Therapeutic Area" name="therapeutic_area" className="form-control" 
                                                value={this.state.therapeutic_area} onChange={this.changeTherapeuticAreaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Indication: </label>
                                            <input placeholder="Indication" name="indication" className="form-control" 
                                                value={this.state.indication} onChange={this.changeIndicationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default CreateProductComponent

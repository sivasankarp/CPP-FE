import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://main.d5h7r8fqfqlck.amplifyapp.com/";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL+'/product-list');
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+'/product-save', product);
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/product-details/' + productId);
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/product-save/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/product-delete/' + productId);
    }
}

export default new ProductService()
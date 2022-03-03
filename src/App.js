import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import ListProductComponent from './components/product/ListProductComponent'
import CreateProductComponent from './components/product/CreateProductComponent'
import UpdateProductComponent from './components/product/UpdateProductComponent'

import ListIndicationComponent from './components/indication/ListIndicationComponent'
import CreateIndicationComponent from './components/indication/CreateIndicationComponent'
import UpdateIndicationComponent from './components/indication/UpdateIndicationComponent'

import ListTherapeuticComponent from './components/therapeutic/ListTherapeuticComponent'
import CreateTherapeuticComponent from './components/therapeutic/CreateTherapeuticComponent'
import UpdateTherapeuticComponent from './components/therapeutic/UpdateTherapeuticComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
        <Menu />   
        
                    <Switch> 
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/products" component = {ListProductComponent}></Route>
                          <Route path = "/add-product/:_id" component = {CreateProductComponent}></Route>
                          <Route path = "/update-product/:_id" component = {UpdateProductComponent}></Route> 

                          <Route path = "/indications" component = {ListIndicationComponent}></Route>
                          <Route path = "/add-indication/:_id" component = {CreateIndicationComponent}></Route>
                          <Route path = "/update-indication/:_id" component = {UpdateIndicationComponent}></Route> 

                          <Route path = "/therapeutics" component = {ListTherapeuticComponent}></Route>
                          <Route path = "/add-therapeutic/:_id" component = {CreateTherapeuticComponent}></Route>
                          <Route path = "/update-therapeutic/:_id" component = {UpdateTherapeuticComponent}></Route> 
                    </Switch>
              
        <Footer />
        </Router>
      </div>
    )
  }
}

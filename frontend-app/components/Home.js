import React, { Component } from 'react';
import { createFavourite } from '../services/FavouritesService';
import { getAllProducts } from '../services/ProductsService';

class Home extends Component {
    state = {
        favourite: {},
        products: [],
        numberOfProducts: 0,
        numberOfFavourites: 0
    };

    getAllProducts= () => {
        getAllProducts()
          .then(products => {
            this.setState({products: products, numberOfProducts: products.length})
          });
    };

    createFavourite = (itemName) => {
        this.state.favourite.name = itemName;

        createFavourite(this.state.favourite)
          .then(response => {
            this.setState({numberOfFavourites: this.state.numberOfFavourites + 1})
        });
    }

    render() {
        if(this.state.products.length == 0){
            this.getAllProducts();
            if(this.state.products.length == 0){
                return null;
            }
        }

        const ProductCard = (product,index) => {
            return(
                <div className="card col-md-3 d-inline-block mr-5 mt-5">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" name="name" id="name" >{product.name} ID {product.id}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a onClick= {(e) => this.createFavourite(product.name)} className="btn btn-danger">Create</a>
                    </div> 
                </div>
            )
        }; 

        const productCards = this.state.products?.map((product,index) => ProductCard(product,index));

        return(
            <div className="col-md-12 mt-5"> 
                {productCards}
            </div>
        );
    }
       
}

export default Home;
import React, { Component } from 'react';
import { createFavourite } from '../services/FavouritesService';

class Home extends Component {
    state = {
        favourite: {},
        favourites: [],
        numberOfFavourites: 0
    };

    createFavourite = (itemName) => {
        this.state.favourite.name = itemName;

        createFavourite(this.state.favourite)
          .then(response => {
            this.setState({numberOfFavourites: this.state.numberOfFavourites + 1})
        });
    }

    render() {
        return(
            <div className="card-deck">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title" name="name" id="name" >Item 1</h5>
                    <p className="card-text">This is the item 1</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a onClick= {(e) => this.createFavourite("Item 1")} className="btn btn-danger">Create</a>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Item 2</h5>
                    <p className="card-text">This is item 2</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a onClick= {(e) => this.createFavourite("Item 2")} className="btn btn-danger">Create</a>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Item 3</h5>
                    <p className="card-text">This is item 3</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a onClick= {(e) => this.createFavourite("Item 3")} className="btn btn-danger">Create</a>
                    </div>
                </div>
            </div>
        );
    }
       
}

export default Home;
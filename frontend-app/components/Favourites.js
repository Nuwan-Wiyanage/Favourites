import React, { Component } from 'react';
import { getAllFavourites } from '../services/FavouritesService';

class Favourites extends Component {
    state = {
        favourite: {},
        favourites: [],
        numberOfFavourites: 0
    };

    getAllFavourites = () => {
        getAllFavourites()
          .then(favourites => {
            this.setState({favourites: favourites, numberOfFavourites: favourites.length})
          });
    };

    render() {
        if(this.state.favourites.length == 0){
            this.getAllFavourites();
        }

        const FavouriteRow = (favourite,index) => {
            return(
                <tr key = {index} className={index%2 === 0?'odd':'even'}>
                    <td>{index + 1}</td>
                    <td>{favourite.name}</td>
                </tr>
            )
        };

        const favouritesTable = this.state.favourites?.map((favourite,index) => FavouriteRow(favourite,index));
      
        return(
            <div className="container">
                <h2>Favourites</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Favourite Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favouritesTable}
                    </tbody>
                </table>
            </div>
        );
    }
       
}

export default Favourites;
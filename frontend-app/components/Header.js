import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return(
        <div className="header d-inline-block">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link href="/">
                    <a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a>
                </Link>
                <Link href={{ pathname: "/FavouritesPage", query: '', }} passHref>
                    <a className="nav-item nav-link">Favourites</a>
                </Link>
                </div>
            </div>
            </nav>
        </div>
    )
}
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return(
        <div className="header d-inline-block">
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link href="/">
                        <a className="nav-item nav-link active"><FontAwesomeIcon icon={faHome} style={{ fontSize: 15, color: "white" }} /><span className="home-nav"> Home</span></a>
                    </Link>
                    <Link href={{ pathname: "/FavouritesPage", query: '', }} passHref>
                        <a className="nav-item nav-link"><FontAwesomeIcon icon={faHeart} style={{ fontSize: 15, color: "white" }} /><span className="fav-nav"> Favourites</span></a>
                    </Link>
                    </div>
                </div>
            </nav> */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link href="/">
                        <a className="nav-item nav-link active"><FontAwesomeIcon icon={faHome} style={{ fontSize: 15, color: "white" }} /><span className="home-nav"> Home</span></a>
                    </Link>
                    <Link href={{ pathname: "/FavouritesPage", query: '', }} passHref>
                        <a className="nav-item nav-link"><FontAwesomeIcon icon={faHeart} style={{ fontSize: 15, color: "white" }} /><span className="fav-nav"> Favourites</span></a>
                    </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
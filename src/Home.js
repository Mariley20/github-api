import React from 'react';
import './Home.css';
import { NavLink} from 'react-router-dom';
import NavHome from './NavHome';

const Home = ( {model} ) => {

	return (
    <div>
        <NavHome />
        <h1> Github Battle: Battle your friends... and stuff.</h1>
        <NavLink to={'./battle'}>Battle</NavLink>
      </div>
	);
}

export default Home;

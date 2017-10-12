import React, {Component} from 'react';
import './Home.css';
import { NavLink} from 'react-router-dom';
import NavHome from './NavHome';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate : null
    }
  }

render() {
  const { model } = this.props;
  console.log(model);
	return (
    <div>
        <NavHome />
        <h1> Github Battle: Battle your friends... and stuff.</h1>
        <NavLink to={'./battle'}>Battle</NavLink>
      </div>
	);
}
}
export default Home;

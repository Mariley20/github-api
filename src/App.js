import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (
  <BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/battle" render={() => <Battle model={model} />}/>
				<Route  path="/popular" render={() => <Popular model={model} />}/>

			<Route path='/github-api' render={() => <Redirect to="/home"  />}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;

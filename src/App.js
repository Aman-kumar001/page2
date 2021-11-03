import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Create from './components/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Table />
					</Route>
					<Route exact path='/Create'>
						<Create />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

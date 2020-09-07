import './app.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout';
import NotFound from './containers/NotFound'
import Home from './containers/Home';
import Add from './containers/Add';
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/add" component={Add} />
				<Route path="*" component={NotFound} />
			</Switch>
			<ToastContainer position="top-center" />
		</Layout>
	</BrowserRouter>
);

export default App;

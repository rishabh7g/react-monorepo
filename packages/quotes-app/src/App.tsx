import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@rishabh7g/react-components';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Button label='Quotes app' onClick={() => alert('quotes app')}></Button>
			</header>
		</div>
	);
}

export default App;

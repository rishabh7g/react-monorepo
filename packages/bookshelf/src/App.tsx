import { useState } from 'react';
import { Logo } from './components/logo';
import Dialog from '@reach/dialog';
import '@reach/dialog/styles.css';

interface LoginFormProps {
	buttonText: string;
	onSubmit: (submitProps: SubmitProps) => void;
}

const LoginForm = ({ buttonText, onSubmit }: LoginFormProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit({ username, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					value={username}
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						setUsername(e.currentTarget.value)
					}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					type='password'
					value={password}
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						setPassword(e.currentTarget.value)
					}
				/>
			</div>
			<button type='submit'>{buttonText}</button>
		</form>
	);
};

interface SubmitProps {
	username: string;
	password: string;
}

const App = () => {
	const [openModal, setOpenModal] = useState('none');
	const LoginFormSubmitHandle = ({ username, password }: SubmitProps) => {
		console.log({ username, password });
	};

	return (
		<div className='App'>
			<Logo />
			<h3>Bookeshelf</h3>
			<div>
				<button onClick={() => setOpenModal('login')}>Login</button>
			</div>
			<div>
				<button onClick={() => setOpenModal('register')}>Register</button>
			</div>
			<Dialog aria-label='Login form' isOpen={openModal === 'login'}>
				<button onClick={() => setOpenModal('none')}>close</button>
				<LoginForm buttonText='login' onSubmit={LoginFormSubmitHandle} />
			</Dialog>
			<Dialog aria-label='Login form' isOpen={openModal === 'register'}>
				<button onClick={() => setOpenModal('none')}>close</button>
				<LoginForm buttonText='register' onSubmit={LoginFormSubmitHandle} />
			</Dialog>
		</div>
	);
};

export default App;

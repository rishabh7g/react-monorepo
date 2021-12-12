import React from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/svg/Logo.svg';

const TopRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--color-primary-10);
	padding: 1rem 20%;
`;

const SearchForm = styled.div`
	display: flex;
	gap: 1rem;
`;

const SearchButton = styled.button``;

const Navbar = () => {
	return (
		<TopRow>
			<div className='logo'>
				<img src={Logo} alt='Mausam logo' />
			</div>
			<SearchForm>
				<div className='searchbox'>
					<input type='text' placeholder='Enter the city'></input>
				</div>
				<div className='searchbutton'>
					<SearchButton>Search</SearchButton>
				</div>
			</SearchForm>
		</TopRow>
	);
};

export default Navbar;

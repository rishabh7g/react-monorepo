import React, { useState } from 'react';
import Logo from 'src/assets/svg/Logo.svg';
import styled from 'styled-components';

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

interface NavbarProps {
	searchHandler: (city: string) => void;
}

const Navbar = (props: NavbarProps) => {
	const [searchText, setSearchText] = useState('');

	return (
		<TopRow>
			<div className='logo'>
				<img src={Logo} alt='Mausam logo' />
			</div>
			<SearchForm>
				<div className='searchbox'>
					<input
						type='text'
						placeholder='Enter the city'
						value={searchText}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setSearchText(e.target.value);
						}}></input>
				</div>
				<div className='searchbutton'>
					<SearchButton onClick={() => props.searchHandler(searchText)}>
						Search
					</SearchButton>
				</div>
			</SearchForm>
		</TopRow>
	);
};

export default Navbar;

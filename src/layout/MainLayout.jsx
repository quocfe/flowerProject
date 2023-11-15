import React, { useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import HeaderNote from '../components/HeaderNote/HeaderNote';

const MainLayout = ({ children }) => {
	useEffect(() => {
		const menu = document.querySelector('.stk-menu');
		const handleScroll = () => {
			if (menu) {
				if (window.scrollY > 10) {
					menu.classList.add('fixed');
				} else {
					menu.classList.remove('fixed');
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<Nav />
			<Header />
			<main>
				<Menu />
				<HeaderNote />
				{children}
			</main>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;

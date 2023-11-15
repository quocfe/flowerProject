import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../../assets/image/slide1.png';
import { useState } from 'react';

const CarouselCustom = ({ images }) => {
	return (
		<Carousel indicators={false}>
			<Carousel.Item interval={1000}>
				<img src={Slide1} alt="" />
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img src={Slide1} alt="" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={Slide1} alt="" />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselCustom;

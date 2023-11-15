import React from 'react';
import './Carousel.scss';

import Carousel from 'react-bootstrap/Carousel';

const CarouselMuti = () => {
	return (
		<Carousel indicators={false} controls={false}>
			<Carousel.Item interval={1500}>
				<div className="row justify-content-center">
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<div className="row justify-content-center">
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="row justify-content-center">
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
					<div className="col-2 num-items-5 text-center">
						<img
							src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp"
							alt=""
						/>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselMuti;

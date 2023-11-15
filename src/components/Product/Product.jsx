import React from 'react';
import './Product.scss';

const Product = ({ className = '', ...props }) => {
	const { nameProduct, priceOld, priceNew, discount, src } = props;
	return (
		<div className={className}>
			<div id="product">
				<div className="image">
					<img src={src} alt="" />
					<span className="discount">
						{discount}% <br /> Giảm
					</span>
				</div>
				<div className="content">
					<div className="text">
						<h3>
							<a href="">{nameProduct}</a>
						</h3>
						<div className="price">
							<span className="priceNew">{priceNew}VND</span>{' '}
							<span className="priceOld">{priceOld}VND</span>
						</div>
					</div>
					<div className="buynow-button text-center">
						<button>ĐẶT HÀNG</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;

import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<header id="header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-4">
						<div className="socical  justify-content-center">
							<a href="">
								<i className="fa-brands fa-facebook fa-2xl"></i>
							</a>
							<a href="">
								<i className="fa-brands fa-twitter fa-2xl"></i>
							</a>
							<a href="">
								<i className="fa-brands fa-instagram fa-2xl"></i>
							</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="logo">
							<a href="/">
								<img
									src="https://www.flowercorner.vn/image/catalog/common/shop-hoa-tuoi-flowercorner-logo.png.webp"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row align-items-center  ">
							<div className="col-sm-10">
								<div className="search input-group">
									<input type="text" name="search" placeholder="Tìm kiếm" />
									<button type="button" className="search-button">
										<i className="fa-solid fa-magnifying-glass"></i>
									</button>
								</div>
							</div>
							<div className="col-sm-2">
								<div className="header-cart" onClick={() => setShow(!show)}>
									<div className="dropdown">
										<button
											className="btn btn-secondary dropdown-toggle"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i className="fa-solid fa-bag-shopping"></i>
										</button>
										<ul
											className={
												show
													? 'dropdown-menu dropdown-menu-right show'
													: 'dropdown-menu dropdown-menu-right '
											}
										>
											<li>
												<p className="text-center">
													Giỏ hàng của bạn đang trống!
												</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [show, setShow] = useState(false);

	return (
		<nav id="nav">
			<div className="container">
				<div className="flex">
					<div className="left">
						<ul className="list-inline">
							<li className="list-inline-item">
								HOTLINE: <a href="tel:1900633045">1900 633 045</a> |{' '}
								<a href="tel:0865 160 360">0865 160 360</a>
							</li>
						</ul>
					</div>
					<div className="right">
						<ul className="list-inline">
							<li className="list-inline-item">
								<div className="dropdown" onClick={() => setShow(!show)}>
									<a
										href="#"
										className="dropdown-toggle "
										data-bs-toggle="dropdown"
									>
										<i className="fa-solid fa-user"></i>
										<span className="d-none d-md-inline">Tài khoản</span>
										<i className="fa-solid fa-caret-down"></i>
									</a>
									<ul
										className={
											show
												? ' dropdown-menu dropdown-menu-right show'
												: ' dropdown-menu dropdown-menu-right'
										}
									>
										<li>
											<Link to="/register" className="dropdown-item">
												Đăng ký
											</Link>
										</li>
										<li>
											<Link to="/login" className="dropdown-item">
												Đăng nhập
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="list-inline-item">
								<a href="" title="Giỏ hàng">
									<i className="fa-solid fa-bag-shopping"></i>
									<span className="d-none d-md-inline">Giỏ hàng</span>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="" title="Thanh toán">
									<i className="fa-solid fa-share"></i>
									<span className="d-none d-md-inline">Thanh toán</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="container stk-menu ">
			<nav id="menu" className="navbar navbar-expand-lg">
				<div
					className="collapse navbar-collapse justify-content-center"
					id="narbar-menu"
				>
					<ul className="nav navbar-nav">
						<li className="nav-item dropdown">
							<Link to="/hoa-sinh-nhat" className="nav-link dropdown-toggle">
								Hoa Sinh Nhật
							</Link>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<Link to="/hoa-sinh-nhat-sang-trong" className="nav-link">
												Hoa Sinh Nhật Sang Trọng
											</Link>
										</li>
										<li>
											<a className="nav-link">Hoa Sinh Nhật Giá Rẻ</a>
										</li>
										<li>
											<a className="nav-link">Hoa Tặng Sinh Nhật Người Yêu</a>
										</li>
										<li>
											<a className="nav-link">Hoa Tặng Sinh Nhật Mẹ</a>
										</li>
										<li>
											<a className="nav-link">Hoa Tặng Sinh Nhật Bạn</a>
										</li>
										<li>
											<a className="nav-link">Lẵng Hoa Tặng Sinh Nhật</a>
										</li>
										<li>
											<a className="nav-link">Hoa Hồng Tặng Sinh Nhật</a>
										</li>
										<li>
											<a className="nav-link">Giỏ hoa sinh nhật</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle">Hoa Khai Trương</a>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<a className="nav-link">Hoa Khai Trương Để Bàn</a>
										</li>
										<li>
											<a className="nav-link">Kệ Hoa Khai Trương</a>
										</li>
										<li>
											<a className="nav-link">Kệ Hoa Khai Trương Hiện Đại</a>
										</li>
										<li>
											<a className="nav-link">Hoa Khai Trương Giá Rẻ</a>
										</li>
										<li></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a href="#" className="nav-link dropdown-toggle">
								Chủ Đề
							</a>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<a className="nav-link">Hoa Chúc Mừng</a>
										</li>
										<li>
											<a className="nav-link">Hoa Cưới Cầm Tay</a>
										</li>
										<li>
											<a className="nav-link">Hoa tang lễ - Hoa Chia Buồn</a>
										</li>
										<li>
											<a className="nav-link">Hoa tình yêu</a>
										</li>
										<li>
											<a className="nav-link">Hoa Valentine</a>
										</li>
										<li>
											<a className="nav-link">Hoa Kỷ Niệm Ngày Cưới</a>
										</li>
										<li>
											<a className="nav-link">Ngày của mẹ</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a href="#" className="nav-link dropdown-toggle">
								Thiết kế
							</a>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<a href="" className="nav-link">
												Bó hoa
											</a>
										</li>
										<li>
											<a href="" className="nav-link">
												Lẵng hoa
											</a>
										</li>
										<li>
											<a href="" className="nav-link">
												Giỏ Hoa
											</a>
										</li>
										<li>
											<a href="" className="nav-link">
												Kệ hoa
											</a>
										</li>
										<li>
											<a href="" className="nav-link">
												Bình hoa
											</a>
										</li>
										<li>
											<a href="" className="nav-link">
												Hộp hoa
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a href="#" className="nav-link dropdown-toggle">
								HOA TƯƠI
							</a>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<a className="nav-link">Hoa hồng</a>
										</li>
										<li>
											<a className="nav-link">Hoa Baby</a>
										</li>
										<li>
											<a className="nav-link">Hoa hướng dương</a>
										</li>
										<li>
											<a className="nav-link">Hoa Lan Hồ Điệp</a>
										</li>
										<li>
											<a className="nav-link">Hoa tulip</a>
										</li>
										<li>
											<a className="nav-link">Hoa cúc Tana</a>
										</li>
										<li>
											<a className="nav-link">Hoa thạch thảo</a>
										</li>
										<li>
											<a className="nav-link">Hoa mẫu đơn</a>
										</li>
										<li>
											<a className="nav-link">Cúc mẫu đơn</a>
										</li>
										<li>
											<a className="nav-link">Hoa cẩm tú cầu</a>
										</li>
										<li>
											<a className="nav-link">Hoa ly</a>
										</li>
									</ul>
								</div>
								<a href="#" className="see-all">
									Hiển thị tất cả HOA TƯƠI
								</a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a href="#" className="nav-link dropdown-toggle">
								QUÀ TẶNG
							</a>
							<div className="dropdown-menu" style={{}}>
								<div className="dropdown-inner">
									<ul className="list-unstyled">
										<li>
											<a className="nav-link">Gấu bông</a>
										</li>
										<li>
											<a className="nav-link">Socola</a>
										</li>
										<li>
											<a className="nav-link">Bánh kem</a>
										</li>
										<li>
											<a className="nav-link">Giỏ trái cây</a>
										</li>
										<li>
											<a className="nav-link">Giỏ quà tặng</a>
										</li>
										<li>
											<a className="nav-link">Quà Lưu Niệm</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<a href="/khuyen-mai" className="nav-link">
								Hoa Tươi Giảm 30%
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Menu;

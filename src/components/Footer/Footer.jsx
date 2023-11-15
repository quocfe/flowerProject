import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-3 mb-3">
						<img
							className="mb-3"
							src="	https://8384f55340.vws.vegacdn.vn/image/catalog/common/shop-hoa-tuoi-flowercorner-logo.png.webp"
							alt=""
							width="100%"
							height="53"
						/>
						Hotline: 1900 633 045 - 0865 160 360
						<br />
						sales@flowercorner.vn
						<div className="row mt-3 mb-3">
							<div className="col-sm-5">
								<img
									src="	https://8384f55340.vws.vegacdn.vn/image/catalog/common/app/qr.png.webp"
									alt=""
									width="92"
									height="114"
								/>
							</div>
							<div className="col-sm-7 text-end">
								<p>Tải ứng dụng ngay</p>
								<p>
									<a href="">
										<img
											src="https://8384f55340.vws.vegacdn.vn/image/catalog/common/app/appstore.png.webp"
											width="100%"
											height="35"
											alt="FlowerCorner trên app store"
										/>
									</a>
								</p>
								<p>
									<a href="">
										<img
											src="https://8384f55340.vws.vegacdn.vn/image/catalog/common/app/gplay.png.webp"
											width="100%"
											height="35"
											alt="FlowerCorner trên app Google play"
										/>
									</a>
								</p>
							</div>
							<div>
								<p>
									<a>
										<img
											src="https://8384f55340.vws.vegacdn.vn/image/catalog/common/app/logoSaleNoti.png.webp"
											alt="da khai bao"
											width="255"
											height="96"
										/>
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<h5 className="mb-3">CHĂM SÓC KHÁCH HÀNG</h5>
						<ul>
							<li>
								<a href="">Giới thiệu</a>
							</li>
							<li>
								<a href="">Liên hệ</a>
							</li>
							<li>
								<a href="">Chính Sách Vận Chuyển</a>
							</li>
							<li>
								<a href="">Câu Hỏi Thường Gặp</a>
							</li>
							<li>
								<a href="">Hình Thức Thanh Toán</a>
							</li>
							<li>
								<a href="">Bảo Mật Thông Tin</a>
							</li>
							<li>
								<a href="">Chính Sách Hoàn Tiền</a>
							</li>
							<li>
								<a href="">Xử Lý Khiếu Nại</a>
							</li>
							<li>
								<a href="">Tại Sao Nên Chọn FlowerCorner.vn</a>
							</li>
							<li>
								<a href="">Blog</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-2">
						<h5 className="mb-3">THEO DÕI</h5>
						<ul>
							<li>
								<a href="">
									<i
										className="fa-brands fa-facebook me-2"
										aria-hidden="true"
									></i>
									Facebook
								</a>
							</li>
							<li>
								<a href="">
									<i
										className="fa-brands fa-twitter-square me-2"
										aria-hidden="true"
									></i>
									Twitter
								</a>
							</li>
							<li>
								<a href="">
									<i
										className="fa-brands fa-instagram me-2"
										aria-hidden="true"
									></i>
									Instagram
								</a>
							</li>
							<li>
								<a href="">
									<i
										className="fa-brands fa-linkedin me-2"
										aria-hidden="true"
									></i>
									Linkedin
								</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-4">
						<h5 className="mb-3">SHOP HOA FLOWERCORNER</h5>
						<p>
							<b>Cửa Hàng TP HCM</b>:{' '}
							<a className="https://goo.gl/maps/iWYo2zvPormh4Goz9">
								225/3 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
							</a>
						</p>
						<p>
							<b> Văn Phòng TP HCM</b>:{' '}
							<a className="https://goo.gl/maps/qiFtVyQi725jyLVT9">
								412 Lê Hồng Phong, Phường 1, Quận 10, TP.HCM
							</a>
						</p>
						<p>
							<b>Chi nhánh Hà Nội</b>:{' '}
							<a href="https://g.page/flowercornerhanoi" rel="follow">
								65 Trần Phú, Ba Đình, Hà Nội
							</a>{' '}
						</p>
						<p>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ ZAS Mã số thuế: 0313630426</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

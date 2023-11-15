import React from 'react';
import './Home.scss';
import MainLayout from '../../layout/MainLayout';
import CarouselCustom from './components/Carousel';
import Product from '../../components/Product/Product';
import CarouselMuti from './components/CarouselMuti';

const Home = () => {
	return (
		<MainLayout>
			<div id="home">
				<div className="container">
					<div className="row">
						<div className="col-12 slide-home">
							<div className="carousel-container">
								<CarouselCustom />
							</div>
							<h2 className="text-center mb-4 mt-4">ĐANG GIẢM GIÁ</h2>
							<div className="product-list row">
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
							</div>
							<div className="row featured-notes">
								<div className="col-sm-4">
									<div className="feature-img">
										<img
											src="https://www.flowercorner.vn/image/catalog/common/featured-icon/3.png.webp"
											width={100}
											height={100}
										/>
									</div>
									<h3 className="text-center">FREE SHIPPING</h3>
									<p className="text-center">
										Flower Corner giao miễn phí các nội thành TP.HCM đối với tất
										cả bó hoa, lẵng hoa, và kệ hoa trên 1 triệu.
									</p>
								</div>
								<div className="col-sm-4">
									<div className="feature-img">
										<img
											src="https://www.flowercorner.vn/image/catalog/common/featured-icon/2.png.webp"
											width={100}
											height={100}
										/>
									</div>
									<h3 className="text-center">GIAO NHANH TRONG 90 PHÚT</h3>
									<p className="text-center">
										Flower Corner có thể giao nhanh trong 90' khu vực nội thành
										TP.HCM với bó / lẵng hoa đơn giản.
									</p>
								</div>
								<div className="col-sm-4">
									<div className="feature-img">
										<img
											src="https://www.flowercorner.vn/image/catalog/common/featured-icon/1.png.webp"
											width={100}
											height={100}
										/>
									</div>
									<h3 className="text-center">HOA ĐẸP NHƯ HÌNH</h3>
									<p className="text-center">
										Cam kết hoa đẹp như hình và giống đến 90% so với hình chụp
										trên website.
									</p>
								</div>
							</div>
							<h2 className="text-center mb-4 mt-4">ĐẶT NHIỀU NHÂT</h2>
							<div className="product-list row">
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
							</div>
							<h2 className="text-center mb-4 mt-4">SẢN PHẨM MỚI</h2>
							<div className="product-list row">
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
							</div>
							<h2 className="text-center mb-4 mt-4">HOA SINH NHẬT</h2>
							<div className="product-list row">
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
								<Product
									className="col-md-3 col-sm-6 col-xs-6 mb-4"
									nameProduct="Scented Love"
									priceOld="350000"
									priceNew="320000"
									discount="7"
									src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp"
								></Product>
							</div>
							<h3 className="text-center mt-5 mb-5">KHÁCH HÀNG TIÊU BIỂU</h3>
							<CarouselMuti />
							<div className="row" id="about">
								<div className="col-sm-12">
									<div className="row mb-3">
										<div className="col-md-12">
											<h1 className="text-center mb-3">
												Shop Hoa Tươi FlowerCorner.vn
											</h1>
										</div>
										<div className="col-md-6">
											<h2 className="mb-3">Giới Thiệu Về FlowerCorner.vn</h2>
											<p>
												<strong>Shop hoa tươi</strong>
												FlowerCorner.vn là một trong những tiệm hoa tươi uy tín
												nhất tại TP HCM, Việt Nam. FlowerCorner.vn cung cấp dịch
												vụ đặt hoa online giao tận nơi tại TP HCM, Hà Nội và
												trên tất cả các tỉnh – thành phố tại Việt Nam. Với hệ
												thống cửa hàng hoa tươi liên kết rộng khắp tất cả các
												tỉnh – thành phố trên toàn quốc, FlowerCorner.vn có thể
												giúp bạn gửi tặng hoa tươi cho người thân ở bất cứ nơi
												đâu tại Việt Nam. FlowerCorner cam kết mang đến cho bạn
												những sản phẩm hoa tươi chất lượng cao, với mức giá tốt
												nhất và dịch chuyên nghiệp nhất khi sử dụng dịch vụ đặt
												hoa tươi online giao tận nơi tại Flowercorner.vn.
											</p>

											<div className="video">
												<iframe
													className="lozad"
													data-src="//www.youtube.com/embed/slv6L1Bzk14"
													width="100%"
													height={315}
													frameorder={0}
													src="//www.youtube.com/embed/slv6L1Bzk14"
													data-loaded="true"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<br />
											<br />
											<p>
												Shop hoa tươi FlowerCorner Được thành lập từ năm 2017
												với mục tiêu mang đến cho khách hàng trải nghiệm tuyệt
												vời về một dịch vụ <strong>đặt hoa online</strong>{' '}
												chuyên nghiệp. Sau hơn 5 năm hoạt động, cửa hàng hoa
												tươi FlowerCorner đã giúp hàng chục ngàn khách hàng gửi
												tặng những bó hoa tươi đẹp và đầy ý nghĩa đến những
												người thân yêu trong tất cả những dịp đặc biệt trong
												năm.
											</p>
											<h2 className="mt-3 mb-3">
												Đặt hoa online giá tốt – Giao nhanh trong 90p
											</h2>
											<p>
												Nếu bạn đang tìm kiếm một trang website đặt hoa online
												giao tận nơi thì flowercorner.vn là một sự lựa chọn
												tuyệt vời dành cho bạn. Tại{' '}
												<a href="">
													<strong>shop hoa tươi</strong>
												</a>{' '}
												FlowerCorner, bạn có thể dễ dàng lựa chọn một mẫu hoa
												đẹp, ý nghĩa giữa hàng trăm mẫu hoa được thiết kế sẵn để
												gửi tặng người thân, bạn bè, đối tác trong tất cả các
												dịp đặc biệt trong năm hay trong những sự kiện như: khai
												trương, sinh nhật, lễ cưới, lễ tang…
												<br />
												<br />
												Ngoài những mẫu hoa có sẵn trên website, shop hoa tươi
												Flower Corner cũng nhận thiết kế hoa tươi theo yêu cầu
												với mọi mức giá để đáp ứng mọi nhu cầu của khách hàng.
												Nhờ thế, việc đặt hoa online tại Flower Corner trở nên
												nhanh chóng, dễ dàng và đơn giản hơn.
												<br />
												<br />
												Đặc biệt, với dịch vụ giao hoa nhanh trong 90 phút, shop
												hoa tươi FlowerCorner sẽ giúp bạn kịp thời gửi tặng một
												bó hoa tới người thân, bạn bè nếu như bạn cần đặt gấp
												trong ngày.
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<h2 className="mb-3">Đặt Hoa Online – Ưu Đãi Hấp Dẫn</h2>
											<img
												src="https://8384f55340.vws.vegacdn.vn/image/catalog/New_Dec/dat-hoa-online-tai-shop-hoa-tuoi-flowercorner.jpg"
												alt=""
											/>
											<br />
											<p>
												Khi đặt hoa online tại shop hoa tươi FlowerCorner, bạn
												không chỉ được miễn phí giao hàng trong khu vực nội
												thành TP HCM, tặng kèm thiệp chúc mừng, mà còn được giảm
												đến 50k cho đơn hàng đầu tiên. Bên cạnh đó, vào mỗi thứ
												6 hàng tuần, bạn cũng sẽ được giảm ngay 10% tối đa lên
												đến 100k với chương trình ưu đãi Thứ 6 vui vẻ. Đặc biệt,
												những khách hàng cũ cũng sẽ được giảm giá lên đến 10%
												cho các đơn hàng tiếp theo.
											</p>
											<h2 className="mt-3 mb-3">
												Đặt Hoa Online mọi lúc, mọi nơi
											</h2>
											<p>
												Ưu điểm của tiệm hoa FlowerCorner đó là cho phép bạn đặt
												hoa tươi gửi tặng người thân dù bạn đang ở bất cứ nơi
												đâu, vào bất cứ thời điểm nào chỉ với vài thao tác đơn
												giản ngay trên website{' '}
												<a>
													<strong>flowercorne.vn</strong>
												</a>{' '}
												hoặc trên ứng dụng Flower Corner.
											</p>
											<p>
												Nếu bạn đang phân vân không biết nên lựa chọn loài hoa
												nào để phù hợp cho từng sự kiện, bạn có thể chat ngay
												với các nhân viên tư vấn của Flower Corner để được tư
												vấn lựa chọn mẫu hoa phù hợp nhất.
											</p>
											<h2 className="mt-3 mb-3">
												Đặt hoa đơn giản, thanh toán dễ dàng
											</h2>
											<p>
												Với shop hoa tươi Flower Corner, thay vì mất hàng giờ
												chạy xe lòng vòng qua các shop hoa tươi gần đây, thì bạn
												chỉ cần ngồi một chỗ và thực hiện vài thao tác đơn giản
												trên ứng dụng hoặc website là đã có ngay một mẫu hoa
												thật đẹp để tặng vợ, bạn gái, người thân hay đối tác.
												Nếu vẫn cảm thấy chưa yên tâm về chất lượng hoa, bạn có
												thể yêu cầu nhân viên của FlowerCorner chụp và gửi hình
												hoa để duyệt trước khi giao.
											</p>
											<p>
												Shop hoa FlowerCorner cung cấp cho bạn nhiều lựa chọn về
												phương thức thanh toán từ: COD, chuyển khoản ngân hàng,
												thanh toán qua thẻ visa, master card, Paypal… để bạn có
												thể dễ dàng đặt hoa mà không gặp phải bất cứ trở ngại
												nào.
											</p>
										</div>
										<div className="col-md-6">
											<h2 className="mb-3">
												Danh mục sản phẩm của FlowerCorner
											</h2>
											<p>
												Đến với cửa hàng hoa FlowerCorner, bạn có thể thoải mái
												lựa chọn giữa hơn 500+ mẫu hoa tươi được thiết kế sẵn
												theo các chủ đề như:
											</p>
											<ul>
												<li>
													<a href="">
														<strong>Hoa sinh nhật</strong>
													</a>
													: Hoa tặng sinh nhật vợ, bạn gái, ba mẹ, anh chị, bạn
													bè, đối tác hay đồng nghiệp.
												</li>
												<li>
													<a href="">
														<strong>Hoa khai trương</strong>
													</a>
													: hoa chúc mừng khai trương cửa hàng, công ty.
												</li>
												<li>
													<strong>
														<a href="">Hoa cưới</a>
													</strong>
													: hoa cầm tay cô dâu, hoa cài áo chú rể..
												</li>
												<li>
													<a href="">
														<strong>Hoa tốt nghiệp</strong>
													</a>
													: hoa tặng bạn bè, người thân trong lễ tốt nghiệp.
												</li>
												<li>
													<a href="">
														<strong>Hoa tang lễ</strong>
													</a>
													: hoa chia buồn để gửi tới các đám tang.
												</li>
												<li>
													<a href="">
														<strong>Hoa chúc mừng</strong>
													</a>{' '}
													các dịp đặc biệt: Valentine, ngày của mẹ, ngày của
													cha, ngày quốc tế phụ nữ 8-3, ngày nhà giáo Việt Nam
													20/11….
												</li>
											</ul>
											<br />
											<br />
											<p>
												Đặc biệt, ngoài những mẫu hoa được thiết kế từ các loài
												hoa trong nước, <i>shop hoa tươi</i> FlowerCorner cũng
												cung cấp các mẫu hoa nhập khẩu cao cấp, sang trọng.
											</p>
											<h3 className="mt-3 mb-3">
												Tại sao nên chọn shop hoa FlowerCorner
											</h3>
											<p>
												Không khó để bạn tìm được một cửa hàng hoa cung cấp dịch
												vụ đặt hoa online giao tận nơi. Vậy tại sao bạn nên sử
												dụng dịch vụ điện hoa (Flower Delivery) của shop hoa
												tươi Flower Corner?
											</p>
											<ul>
												<li>
													Hoa đẹp, thiết kế đa dạng phù hợp với tất cả sự kiện.
												</li>
												<li>Thiết kế theo yêu cầu của khách hàng.</li>
												<li>Gửi hình hoa trước khi giao.</li>
												<li>
													Đội ngũ florists chuyên nghiệp với nhiều năm kinh
													nghiệm.
												</li>
											</ul>
											<h3 className="mt-3 mb-3">
												Cam kết từ shop hoa tươi Flower Corner
											</h3>
											<p>
												Flower Corner hiểu rằng, hoa tươi dù không mang nhiều
												giá trị về mặt vật chất, nhưng lại có ý nghĩa rất lớn về
												mặt tinh thần. Mỗi một bó hoa gửi đi gửi gắm rất nhiều
												tình cảm, thông điệp yêu thương mà bạn muốn gửi đến
												những người thân. Chính vì thế, Flower Corner luôn nỗ
												lực nâng cao chất lượng sản phẩm và dịch vụ để mang đến
												bạn những trải nghiệm tuyệt vời nhất khi sử dụng dịch vụ
												của Flower Corner. Shop hoa tươi Flower Corner cam kết:
											</p>
											<ul>
												<li>Chỉ sử dụng hoa tươi mới nhập về trong ngày.</li>
												<li>Hoa đẹp và 90% giống như hình.</li>
												<li>Giao hoa nhanh, đúng giờ.</li>
											</ul>
											<p>
												Nếu bạn đang cần đặt hoa để gửi tặng người thân trong
												những dịp đặc biệt, gọi ngay 1900 633 045 để được tư vấn
												hoặc đặt hoa giao nhanh với shop hoa tươi FlowerCorner!
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;

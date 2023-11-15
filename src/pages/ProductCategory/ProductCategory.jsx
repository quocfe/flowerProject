import React, { useState } from 'react';
import './ProductCategory.scss';
import MainLayout from './../../layout/MainLayout';
import Control from '../../components/Control/Control';
import Product from '../../components/Product/Product';

const data = [
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},

	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
	{
		nameProduct: 'Scented Love',
		priceOld: 350000,
		priceNew: 320000,
		discount: 7,
		src: 'https://8384f55340.vws.vegacdn.vn/image/cache/catalog/March%202023/bo-hoa-scented-love-271x271.jpg.webp',
	},
];

const ProductCategory = ({ title, ...props }) => {
	const [show, setShow] = useState(false);

	return (
		<MainLayout>
			<div id="product-category" className="container">
				<div className="row">
					<div className="content">
						<h1>
							<span class="category-title">{title}</span>
						</h1>
						<Control />
						<div className="row">
							{data.map(
								({ nameProduct, priceOld, priceNew, discount, src }) => (
									<Product
										key={nameProduct}
										className="col-md-3 col-sm-6 col-xs-6 mb-4"
										nameProduct={nameProduct}
										priceOld={priceOld}
										priceNew={priceNew}
										discount={discount}
										src={src}
									></Product>
								)
							)}
						</div>
						<div class="row mt-3">
							<div class="col-md-6 text-start ">
								<ul class="pagination">
									<li class="page-item active">
										<span class="page-link">1</span>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=2"
											class="page-link"
										>
											2
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=3"
											class="page-link"
										>
											3
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=4"
											class="page-link"
										>
											4
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=5"
											class="page-link"
										>
											5
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=6"
											class="page-link"
										>
											6
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=7"
											class="page-link"
										>
											7
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=8"
											class="page-link"
										>
											8
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=9"
											class="page-link"
										>
											9
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=2"
											class="page-link"
										>
											&gt;
										</a>
									</li>
									<li class="page-item">
										<a
											href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?page=18"
											class="page-link"
										>
											&gt;|
										</a>
									</li>
								</ul>
							</div>
							<div class="col-md-6 text-end lh-33 ">
								Hiển thị từ 1 đến 24 / 423 (18 Trang)
							</div>
						</div>
						<hr />
						<div className="row mt-4 cate-info">
							<div
								className={
									show
										? 'col-sm-12 cate-info-content mb-2 show'
										: 'col-sm-12 cate-info-content mb-2'
								}
							>
								<h2 style={{ textAlign: 'center' }}>Hoa Tặng Sinh Nhật Mẹ</h2>
								<p style={{ textAlign: 'justify' }}>
									Sinh nhật là một trong những dịp để bạn thể hiện tình cảm và
									sự biết ơn đối với Mẹ. Bên cạnh một món quà tặng, một bó hoa
									tươi là thứ không thể thiếu. Dù không mang nhiều giá trị về
									mặt vật chất, nhưng những bó hoa lại có thể giúp bạn gửi đi
									những thông điệp ý nghĩa đến Mẹ trong ngày sinh nhật. Hãy để
									chúng tôi giúp bạn gửi tới Mẹ những lời chúc tốt lành nhất
									trong ngày sinh nhật bằng những mẫu hoa đẹp sang trọng trong
									bộ sưu tập{' '}
									<span style={{ fontWeight: 'bold' }}>
										hoa tặng sinh nhật mẹ
									</span>{' '}
									được thiết kế bởi{' '}
									<a href="https://www.flowercorner.vn" target="_blank">
										shop hoa tươi
									</a>{' '}
									Flower Corner.
								</p>
								<h3 style={{ textAlign: 'justify' }}>
									Ưu Đãi Khi Đặt Hoa Tặng Sinh Nhật Mẹ
								</h3>
								<p style={{ textAlign: 'justify' }} />
								<ul>
									<li>
										<span style={{ fontStyle: 'italic' }}>
											Giảm đến 50k cho khách hàng lần đầu đặt hoa.
										</span>
									</li>
									<li>
										<span style={{ fontStyle: 'italic' }}>
											Giao hoa trong 3 tiếng - Miễn Phí giao hoa nội thành TP
											HCM.
										</span>
									</li>
									<li>
										<span style={{ fontStyle: 'italic' }}>
											Tặng kèm thiệp chúc mừng trị giá đến 50k
										</span>
									</li>
								</ul>
								<h3>Các loại hoa tặng sinh nhật Mẹ</h3>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa hồng:</span> là loài
									hoa phổ biến nhất trên thế giới, hoa hồng không chỉ là quà
									tặng dành riêng cho các cặp tình nhân, mà còn phù hợp để làm
									quà tặng trong mọi dịp đặc biệt trong năm. Hoa hồng sen, hồng
									vàng hoặc hoa hồng pastel là những lựa chọn hoàn hảo để dành
									tặng sinh nhật mẹ.
									<br />
								</p>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa hướng dương: </span>
									với màu vàng ấm áp hoa hướng dương&nbsp;tượng trưng cho sự
									kính trọng, sức khỏe và hạnh phúc. Loài hoa này là lựa chọn số
									1 để dành tặng mẹ trong ngày sinh nhật.&nbsp;
								</p>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa cẩm chướng:</span>{' '}
									hoa cẩm chướng cũng là một trong những loài hoa phù hợp để
									dành tặng mẹ trong dịp sinh nhật. Loài hoa này tượng trưng cho
									sự biết ơn và cũng là loài hoa được chọn làm hoa chính trong
									ngày lễ của mẹ.
								</p>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa mẫu đơn:</span> loài
									hoa này tượng trưng cho tình mẫu tử, hoa mẫu đơn cũng là loài
									hoa được nhiều người lựa chọn để dành tặng mẹ trong dịp sinh
									nhật. Tuy nhiên, do là hoa nhập khẩu nên hoa mẫu đơn chỉ có
									theo mùa.&nbsp;
								</p>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa cúc:</span>&nbsp;là
									một trong những loài hoa phổ biến tại Việt Nam, hoa cúc cũng
									thường được lựa chọn để làm{' '}
									<span style={{ textDecorationLine: 'underline' }}>
										hoa tặng sinh nhật Mẹ
									</span>
									. Các loại hoa cúc phù hợp nhất để dành tặng mẹ là thạch thảo,
									cúc tana hoặc cúc họa mi.
								</p>
								<p>
									<span style={{ fontWeight: 'bold' }}>Hoa lan hồ điệp:</span>
									&nbsp;Một{' '}
									<a href="https://www.flowercorner.vn/hoa-lan" target="_blank">
										chậu lan hồ điệp
									</a>{' '}
									là lựa chọn hoàn hảo để dành tặng mẹ trong ngày sinh nhật.
									Không chỉ sang trọng, quý phái, loài hoa này còn là biểu tượng
									của sức khỏe, sự trường thọ và tôn kính, rất phù hợp để làm
									quà tặng cho những người lớn tuổi.
								</p>
								<p>
									Trên đây là 6 loài hoa phù hợp để làm quà tặng mẹ trong dịp
									sinh nhật. Gọi ngay&nbsp;0918.491.941 để đặt{' '}
									<a
										href="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat"
										target="_blank"
									>
										hoa tặng sinh nhật
									</a>{' '}
									mẹ giao nhanh trên toàn quốc.&nbsp;
								</p>
								<p />
							</div>
						</div>
						<a className="readMore" onClick={() => setShow(!show)}>
							{!show ? ' Xem thêm ' : 'Đóng'}
						</a>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ProductCategory;

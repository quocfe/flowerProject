import React from 'react';
import './Control.scss';

const Control = () => {
	return (
		<div id="display-control" class="row">
			<div class="col-lg-1 d-none d-lg-block">
				<div class="btn-group">
					<button
						type="button"
						id="button-grid"
						class="btn btn-light active"
						data-bs-toggle="tooltip"
						title="Lưới"
					>
						<i class="fa-solid fa-table-cells"></i>
					</button>
				</div>
			</div>
			<div class="col-lg-4 offset-lg-5 col-6">
				<div class="input-group mb-3">
					<div class="input-group">
						<label for="input-sort" class="input-group-text">
							Sắp xếp theo
						</label>{' '}
						<select
							id="input-sort"
							class="form-select"
							onchange="location = this.value;"
						>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=p.sort_order&amp;order=ASC">
								Mặc định
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=pd.name&amp;order=ASC">
								Tên (A - Z)
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=pd.name&amp;order=DESC">
								Tên (Z - A)
							</option>
							<option
								value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=p.price&amp;order=ASC"
								selected=""
							>
								Giá (Thấp&gt; Cao)
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=p.price&amp;order=DESC">
								Giá (Cao&gt; Thấp)
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=p.model&amp;order=ASC">
								Mô hình (A - Z)
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?sort=p.model&amp;order=DESC">
								Mô hình (Z - A)
							</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-lg-2 col-6">
				<div class="input-group mb-3">
					<div class="input-group">
						<label for="input-limit" class="input-group-text">
							Số lượng
						</label>{' '}
						<select
							id="input-limit"
							class="form-select"
							onchange="location = this.value;"
						>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?limit=12">
								12
							</option>
							<option
								value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?limit=24"
								selected=""
							>
								24
							</option>
							<option value="https://www.flowercorner.vn/hoa-chuc-mung-sinh-nhat?limit=48">
								48
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Control;

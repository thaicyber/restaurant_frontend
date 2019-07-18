import React, {Component} from "react";

class RestaurantItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { name, formatted_address, icon, geometry, place_id } = this.props.restaurant;
		let url = '#';
		if (geometry.location && geometry.location.lat && geometry.location.lng) {
			url = `https://www.google.com/maps/search/?api=1&query=${geometry.location.lat},${geometry.location.lng}&query_place_id=${place_id}`;
		}
		return (
			<div className="col-md-3 col-sm-6 d-flex">
				<div className="card mb-3">
					<div className="card-body">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="img-fluid img-thumbnail" src={icon}/>
							<h5 className="mt-2">{name}</h5>
						</a>
						<p className="title">{formatted_address}</p>
					</div>
				</div>
			</div>

		)
	}
}

export default RestaurantItem;

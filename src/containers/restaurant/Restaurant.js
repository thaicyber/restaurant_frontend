import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantList from "../../components/restaurant/RestaurantList";
import {withRouter} from 'react-router-dom';
import axios from "axios";


class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = { restaurants: null };
	}

	componentDidMount() {
		axios.get("http://localhost:5010/scg").then(response => {
			this.setState({ restaurants: response.data.data });
		});
	}

	render() {
		return (
			<div>
				<Header/>
				<div className="container-fluid ">
					<div className="row">
						<div className="col-6">
							<h1>ร้านอาหาร</h1>
						</div>
					</div>
					<RestaurantList restaurants={this.state.restaurants}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default withRouter(Restaurant);

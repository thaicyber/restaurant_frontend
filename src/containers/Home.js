import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../logo.svg";


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: "" };
	}

	render() {
		return (
			<div>
				<Header />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Hello React.js.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<Footer />
			</div>
		);
	}
}

export default Home;

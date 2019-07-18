import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/error/NotFound";
import Restaurant from "./containers/restaurant/Restaurant";

const arrNum = [3, 5, 9, 15];
// const arrNum = [3, 5, 9, 15, 23, 33];
numberSeries(arrNum);

function numberSeries(arrNumber) {
	console.log('numberSeries => arrNumber', arrNumber);
	if (arrNumber.length >= 3) {
		let intDifficulty1, intDifficulty2, intDifficulty3, intLastNum, x, y, z = 0;
		for (let i = 0; i < arrNumber.length; i++) {
			if (i > 0) {
				intDifficulty1 = intDifficulty2;
				intDifficulty2 = arrNumber[i] - arrNumber[i - 1];
				intDifficulty3 = intDifficulty2 - intDifficulty1;
				intLastNum = arrNumber[i];
			}
		}
		x = intLastNum + (intDifficulty2 + intDifficulty3);
		y = x + (intDifficulty2 + intDifficulty3 + intDifficulty3);
		z = y + (intDifficulty2 + intDifficulty3 + intDifficulty3 + intDifficulty3);
		console.log('numberSeries => X=%s, Y=%s, Z=%s', x, y, z);
	} else {
		console.log('arrNumber.length < 3');
	}
}

class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/scg" component={Restaurant} />
				<Route component={ NotFound } />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;

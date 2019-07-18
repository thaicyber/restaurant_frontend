import React, { Component } from "react";
import RestaurantItem from "./RestaurantItem";

class RestaurantList extends Component {
  showRestaurants() {
    return (
      this.props.restaurants &&
      this.props.restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
      ))
    );
  }

  render() {
    return <div className="row">{this.showRestaurants()}</div>;
  }
}

export default RestaurantList;

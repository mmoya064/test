// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
	render() {
		const { score, onNextQuestion } = this.props;		
		
		if (score == 1){
			let stylist = "Soph";

			return (
				<div>
					<h2>Your Ideal Stylist:</h2>
					<h4>Your stylist: {stylist}</h4>
				</div>
			);
		}

		else if (score == 2){
			let stylist = "Ally";

			return (
				<div>
					<h2>Your Ideal Stylist:</h2>
					<h4>Your stylist: {stylist}</h4>
				</div>
			);
		}

		else if (score == 3 || score == 4){
			let stylist = "Jake";

			return (
				<div>
					<h2>Your Ideal Stylist:</h2>
					<h4>Your stylist: {stylist}</h4>
				</div>
			);
		}

		else{
			let stylist = " Jake or Soph ";

			return (
				<div>
					<h2> Your Ideal Stylist:</h2>
					<h4>Your stylist: {stylist}</h4>
				</div>
			);
		}


	}
}

export default Score;

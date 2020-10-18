/**
 * Created by Arie M. Prasetyo on 2020-01-19
 */
import React, {Component, Fragment} from 'react';
import * as d3 from 'd3';
import styles from './Donut.css';
import {colorRed, colorYellow, colorGreen, colorBlue} from '../constants';

export class Donut extends Component {
	constructor(props) {
		super(props);

		this.dim = {
			w: 60,
			h: 60,
			t: '30, 30'
		};

		// my color scheme
		this.low = `rgb(${colorRed})`;
		this.midlow = `rgb(${colorYellow})`;
		this.midhi = `rgb(${colorGreen})`;
		this.hi = `rgb(${colorBlue})`;

		this.pathColor = '204, 204, 204, 0.3';

		this.state = {
			lineData: null
		};
	}
	
	componentDidMount() {
		const {value} = this.props;
		this.draw(value);
	}

	componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			this.draw(this.props.value);
		}
	}
	
	draw(value) {
    let arcBg = d3.arc()
    .innerRadius(20)
    .outerRadius(30)
    .startAngle(0)
    .endAngle(4 * (Math.PI / 2));

    let arcFg = d3.arc()
    .innerRadius(20)
    .outerRadius(30)
    .startAngle(0)
		.endAngle((value * 4) * (Math.PI / 2));

		let fillColor;
		if (value < .5)
			fillColor = this.low;
		else if (value < .7)
			fillColor = this.midlow;
		else if (value < .8)
			fillColor = this.midhi;
		else
			fillColor = this.hi;
		
		this.setState({
      arcFgData: arcFg(),
			arcBgData: arcBg(),
			fillColor
    });
  }

	render() {
		const {className, textClassName, value} = this.props;
		const {arcFgData, arcBgData, fillColor} = this.state;

		return (
			<div className={`${styles.Donut} ${className || ''}`}>

				<svg xmlns="http://www.w3.org/2000/svg"
					width={this.dim.w}
					height={this.dim.h}>
					<g transform={`translate(${this.dim.t})`}>
            <path
							d={arcBgData}
              fill={`rgba(${this.pathColor})`}
							strokeWidth={0}
						/>
            <path
							d={arcFgData}
              fill={fillColor}
							strokeWidth={0}
						/>
					</g>
				</svg>

				<div className={`${styles.text} ${textClassName || ''}`}>
					{`${value * 100}%`}
				</div>
			</div>
		);
	}
}

export default Donut;
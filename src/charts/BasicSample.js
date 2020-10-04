/**
 * Created by Arie M. Prasetyo on 2019-05-05
 */

import React, {Component, Fragment} from 'react';
import * as d3 from 'd3';
import styles from './BasicSample.css';

export const Documentation = () => (
	<Fragment>
		<BasicSample/>
	</Fragment>
);

export class BasicSample extends Component {
	state = {lineData: null};

	data = [
		{x: 0, y: 0},
		{x: 50, y: 100},
		{x: 100, y: 50},
		{x: 150, y: 200},
		{x: 200, y: 150},
	];

	componentDidMount() {
		const lineGenerator = d3
			.line()
			.curve(d3.curveLinear)
			.x(d => d.x)
			.y(d => 200 - d.y);

		this.setState({lineData: lineGenerator(this.data)});
	}

	render() {
		return (
			<div class={styles.BasicSample}>
				<svg width={200} height={200}>
					<path d={this.state.lineData}/>
				</svg>
			</div>
		);
	}
}

export default BasicSample;

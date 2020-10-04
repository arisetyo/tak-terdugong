/**
 * Created by Arie M. Prasetyo on 2019-06-14
 */
import React, {Component, Fragment} from 'react';
import * as d3 from 'd3';
import styles from './SparkLine.css';

/**
 * Documentation related to the SparkLine component
 */
export const Documentation = () => (
	<Fragment>
		<h3>SparkLine</h3>
		<p>SparkLine is a chart component that can be used for showing a set of data as a small SVG image (eg. student's latest progress).</p>
		<p>SparkLine has a fixed dimension of 24x24 pixels.</p>
		
		<SparkLine data={[15, 5, 20, 10]}/>
		<pre>{'<SparkLine data={[15, 5, 20, 10]}/>'}</pre>
		
		<SparkLine data={[10, 5, 15, 10, 5, 15, 10, 20, 5, 15, 10]}/>
		<pre>{'<SparkLine data={[10, 5, 15, 10, 5, 15, 10, 20, 5, 15, 10]}/>'}</pre>

		<SparkLine data={[1500, 500, 2000]}/>
		<pre>{'<SparkLine data={[1500, 500, 2000]}/>'}</pre>
		
		<SparkLine data={[871, 769, 911, 323, 512]}/>
		<pre>{'<SparkLine data={[871, 769, 911, 323, 512]}/>'}</pre>
	</Fragment>
);

/**
 * SparkLine component
 * @param data  The line data
 * @param min   The lowest possible value in the data
 * @param max   The highest possible value in the data
 */
export class SparkLine extends Component {
	constructor(props) {
		super(props);

		/**
		 * Default size for this chart is 24 x 24 pixels
		 * The data must be extrapolated to this size
		 * */
		this.dim = {
			w: 24,
			h: 24,
			t: '2, -2'
		};

		/** 
		 * Suggested curve styles:
		 * - d3.curveLinear
		 * - d3.curveCatmullRom.alpha(0.5)
		 * - d3.curveMonotoneX
		 * - d3.curveStepAfter
		 * Reference:
		 * http://bl.ocks.org/d3indepth/b6d4845973089bc1012dec1674d3aff8
		 * */
		this.curveStyle = d3.curveMonotoneX;

		this.state = {
			lineData: null
		};
	}
	
	componentDidMount() {
		const {data} = this.props;
		this.draw(data);
	}
	
	/** 
	 * main draw method 
	 * @param data 		array of integer values
	 */
	draw(data) {
		if (data.length <= 1) throw new Error('a minimum of two data points is needed');
		
		/**
		 * 1.
		 * Prepare data domain and range
		 * to make sure the data fits the dimension of the chart.
		 * */
		
		/** Create a scale based on the number of items in the data */
		const xConverter = d3
			.scaleLinear()
			// given any number between `xMin` to `xMax`
			.domain([0, data.length - 1])
			// convert it to 0 to 20 (max value for this chart (24x24 pixels with 2 pixels margin on each sides)
			.range([0, 20]);

		/** Create a scale based on the lowest and highest value in the array */
		const dataExtent = d3.extent(data, d => d);
		const yConverter = d3
			.scaleLinear()
			// given any number between `yMin` to `yMax`
			.domain(dataExtent)
			// convert it to 0 to 20 (max value for this chart (24x24 pixels with 2 pixels margin on each sides)
			.range([0, 20]);

		/**
		 * 2.
		 * Convert data based on the converters.
		 * Create an array of {x, y} objects.
		 * */
		const chartData = data.map((d, i) => (
			{
				x: xConverter(i),
				y: yConverter(d)
			}
		));

		/**
		 * 3.
		 * Create the SVG path data
		 * for the data visualization
		 * */
		const line = d3
			.line()
			.x(d => d.x)
			.y(d => this.dim.h - d.y) //inverse the Y coordinate
			.curve(this.curveStyle);

		/**
		 * 4.
		 * Update React state
		 * */
		this.setState({
			lineData: line(chartData)
		})
	}
	
	render() {
		const {className} = this.props;
		const {lineData} = this.state;

		return (
			<div class={`${styles.SparkLine} ${className || ''}`}>

				<svg xmlns="http://www.w3.org/2000/svg"
					width={this.dim.w}
					height={this.dim.h}>

					<g transform={`translate(${this.dim.t})`}>

						<path
							d={lineData}
							fill={'none'}
							strokeWidth={1}
						/>

					</g>

				</svg>

			</div>
		);
	}
}

export default SparkLine;
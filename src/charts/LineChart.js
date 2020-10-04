/**
 * Created by Arie M. Prasetyo on 2019-05-05
 */
import React, {Component, Fragment} from 'react';
import * as d3 from 'd3';
import styles from './LineChart.css';

/**
 * Documentation related to the LineChart component
 */
export const Documentation = () => (
	<Fragment>
		<h3>LineChart</h3>
		<p>
			A basic line chart SVG component.
		</p>
		<LineChart
			data={[
				{x:10, y:10}, {x:20, y:20}, {x:30, y:15},
				{x:40, y:30}, {x:50, y:20}, {x:60, y:25},
				{x:70, y:14}, {x:80, y:34}, {x:90, y:32}
			]}
		/>
		<pre>
		{
			'<LineChart\n' +
			'\tdata={[\n' +
			'\t\t{x:10, y:10}, {x:20, y:20}, {x:30, y:15},\n' +
			'\t\t{x:40, y:30}, {x:50, y:20}, {x:60, y:25},\n' +
			'\t\t{x:70, y:14}, {x:80, y:34}, {x:90, y:32}\n' +
			'\t]}\n' +
			'/>'
		}
		</pre>
	</Fragment>
);

/**
 * Line chart
 *
 */
export class LineChart extends Component {
	constructor(props) {
		super(props);

		/**
		 * Default size for this chart is 500 x 500 pixels
		 * The data must be extrapolated to this size.
		 * Transform value for the group is 32 pixels.
		 * */
		this.dim = {
			w: 500,
			h: 500,
			t: 32
		};

		this.xAxis = null;
		this.yAxis = null;

		this.state = {
			lineData: null,
			chartData: null
		};
	}

	componentDidMount() {
		const {data} = this.props;
		this.draw(data);

		this.setAxis();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) this.setAxis();
	}

  setAxis = () => {
		d3.select(this.xAxisRef).call(this.xAxis);
		d3.select(this.yAxisRef).call(this.yAxis);
		d3.select(this.xAxisGridRef).call(this.xAxisGrid);
		d3.select(this.yAxisGridRef).call(this.yAxisGrid);
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
		
		const xScale = d3
			.scaleLinear()
			.domain([0, 100]) // use 0 to 100 as domain because we know beforehand the values will be inside this domain
			.range([0, this.dim.w]);

		const yScale = d3
			.scaleLinear()
			.domain([100, 0]) // use 0 to 100 as domain because we know beforehand the values will be inside this domain
			.range([0, this.dim.h]);

		/**
		 * 2.
		 * Convert data based on the scale converters.
		 * Create an array of {x, y} objects.
		 * */
		const chartData = data.map(d => (
			{
				x: xScale(d.x),
				y: yScale(d.y)
			}
		));

		/**
		 * 3.
		 * Create the SVG path data
		 * for the data visualization
		 * */
		const lineGenerator = d3
			.line()
			.curve(d3.curveMonotoneX)
			.x(d => d.x)
			.y(d => d.y);

		const lineData = lineGenerator(chartData);

		this.setState({
			lineData,
			chartData
		});

		// CREATE SCALE BASED ON X/Y SCALES
		this.xAxis = d3
			.axisBottom()
			.scale(xScale)
			.ticks(5);
		this.yAxis = d3
			.axisLeft()
			.scale(yScale)
			.ticks(5);

		this.xAxisGrid = d3
			.axisBottom()
			.scale(xScale)
			.ticks(10)
			.tickSize(-this.dim.h)
			.tickFormat('');
		this.yAxisGrid = d3
			.axisLeft()
			.scale(yScale)
			.ticks(10)
			.tickSize(-this.dim.w)
			.tickFormat('');
	}

	render() {
		const {lineData, chartData} = this.state;

		return (
			<div class={styles.LineChart}>

				<svg xmlns="http://www.w3.org/2000/svg"
					width={this.dim.w + (2 * this.dim.t)}
					height={this.dim.h + (2 * this.dim.t)}>

					<g transform={`translate(${this.dim.t}, ${this.dim.t})`}>

						<path
							d={lineData}
							stroke={'#BF4904'}
							fill={'none'}
							strokeWidth={2}/>

						{
							chartData && chartData.map((d, i) => (
								<circle
									cx={d.x}
									cy={d.y}
									fill="#385273"
									stroke="none">
									<animate
										attributeName="r"
										from="0"
										to="3"
										dur=".5s"
										repeatCount="1"
										fill="freeze"/>
									<animate
										attributeName="opacity"
										from="0"
										to="1"
										dur=".5s"
										repeatCount="1"
										fill="freeze"/>
								</circle>
							))
						}

						<g
							class={styles.grid}
							ref={el => this.xAxisGridRef = el}
							stroke-dasharray='1 2'
							transform={`translate(0, ${this.dim.h})`}/>
						<g
							class={styles.grid}
							ref={el => this.yAxisGridRef = el}
							stroke-dasharray='1 2'
							transform={`translate(0, 0)`}/>

						<g
							ref={el => this.xAxisRef = el}
							transform={`translate(0, ${this.dim.h})`}/>
						<g
							ref={el => this.yAxisRef = el}
							transform={`translate(0, 0)`}/>

					</g>						

				</svg>

			</div>
		);
	}
}

export default LineChart;

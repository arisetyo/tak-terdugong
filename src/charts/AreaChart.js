/**
 * Created by Arie M. Prasetyo on 2019-05-05
 */
import React, {Component, Fragment} from 'react';
import * as d3 from 'd3';
import styles from './AreaChart.css';

/**
 * Documentation related to the AreaChart component
 */
export const Documentation = () => (
	<Fragment>
		<h3>AreaChart</h3>
		<p>
			An area chart SVG component.<br/>
			Displays data with four properties: its position in the X & Y axii, its radius, and its color.
		</p>
		<AreaChart
			data={[
				{x: 20, y: 20, r: 5, f: '#385273'},
				{x: 40, y: 50, r: 15, f: '#F2C84B'},
				{x: 60, y: 40, r: 10, f: '#BF4904'},
				{x: 80, y: 80, r: 5, f: '#487334'}
			]}
		/>
		<pre>
		{
			'<AreaChart\n' +
			'\tdata={[\n' +
			'\t\t{x: 20, y: 20, r: 5, f: \'#385273\'},\n' +
			'\t\t{x: 40, y: 50, r: 15, f: \'#F2C84B\'},\n' +
			'\t\t{x: 60, y: 40, r: 10, f: \'#BF4904\'},\n' +
			'\t\t{x: 80, y: 80, r: 5, f: \'#487334\'}\n' +
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
export class AreaChart extends Component {
	constructor(props) {
		super(props);
		
		this.dim = {
			w: 500,
			h: 500,
			t: 32
		};

		this.state = {
			circleData: null
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
	 *
	 */
	draw(data) {
		if (data.length <= 1) throw new Error('a minimum of two data points is needed');

		const xScale = d3
			.scaleLinear()
			.domain([0, 100]) // use 0 to 100 as domain because we know beforehand the values will be inside this domain
			.range([0, this.dim.w]);

		const yScale = d3
			.scaleLinear()
			.domain([100, 0]) // use 0 to 100 as domain because we know beforehand the values will be inside this domain
			.range([0, this.dim.h]);

		const circleData = data.map(d => (
			{
				x: xScale(d.x),
				y: yScale(d.y),
				r: xScale(d.r),
				actualX: d.x,
				actualY: d.y,
				actualR: d.r,
				f: d.f
			}
		));

		this.setState({circleData});

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
		const {circleData} = this.state;

		return (
			<div class={styles.AreaChart}>

				<svg xmlns="http://www.w3.org/2000/svg"
					width={this.dim.w + (2 * this.dim.t)}
					height={this.dim.h + (2 * this.dim.t)}>

					<g transform={`translate(${this.dim.t}, ${this.dim.t})`}>

						{
		        	circleData && circleData.map((d, i) => (
		        		<Fragment>
		        			<circle
										cx={d.x}
										cy={d.y}
										fill={d.f}
										stroke="none">
										<animate
											attributeName="r"
											from="0"
											to={d.r}
											dur="0.5s"
											repeatCount="1"
											fill="freeze"/>
										<animate
											attributeName="opacity"
											from="0"
											to="1"
											dur="0.5s"
											repeatCount="1"
											fill="freeze"/>
									</circle>

									<text
										x={d.x}
										y={d.y}>
										{`(x = ${d.actualX}, y = ${d.actualY}, r = ${d.actualR})`}
									</text>
		        		</Fragment>
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

export default AreaChart;
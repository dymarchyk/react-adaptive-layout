import { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Layout extends PureComponent {
	/**
	 * @type {{children: function | Object, shouldRender: boolean}}
	 */
	static propTypes = {
		children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		shouldRender: PropTypes.bool
	}
	/**
	 * Screen break points
	 * @type {{xl: number, md: number, sm: number, xs: number, lg: number, xxl: number}}
	 */
	static breakpoints = {
		xs: 480,
		sm: 576,
		md: 990,
		lg: 1024,
		xl: 1280,
		xxl: 1920
	}
	state = {
		width: window.innerWidth,
		height: window.innerHeight
	}
	
	/**
	 * Add or update breakpoints
	 * @param point { Object }
	 * @example Layout.setBreakPoint({custom: 320, sm: 480})
	 */
	static setBreakPoint(point) {
		Layout.breakpoints = { ...Layout.breakpoints, ...point }
	}
	
	/**
	 * Checks if user agent is phone
	 * @return {boolean}
	 */
	static isMobile = () => window.innerWidth <= Layout.breakpoints.sm
	/**
	 * Checks if user agent is table
	 * @return {boolean}
	 */
	static isTablet = () => window.innerWidth >= Layout.breakpoints.sm && window.innerWidth <= Layout.breakpoints.lg
	/**
	 * Checks if user agent is laptop or desktop
	 * @return {boolean}
	 */
	static isDesktop = () => window.innerWidth >= Layout.breakpoints.lg
	
	/**
	 * @param value { number }
	 * @param start { string | number } One of Layout.breakpoints key
	 * @param end { string | number } One of Layout.breakpoints key
	 * @return {boolean}
	 * @example Layout.inRange(1280, 990, 1024) => true
	 */
	static inRange(value, start, end) {
		const pointsNames = Object.keys(Layout.breakpoints)
		let from = start
		let to = end
		// Check if points not number but keys of Layout.breakpoint
		if (typeof start === 'string' && pointsNames.includes(start)) {
			from = Layout.breakpoints[start]
		}
		if (typeof end === 'string' && pointsNames.includes(end)) {
			to = Layout.breakpoints[end]
		}
		// Reverse points if start is bigger than end
		if (from > to) {
			let temp = to
			to = from
			from = temp
		}
		// Check value to be a number
		if (typeof value !== 'number') {
			throw new Error('Value must be an integer.')
		}
		console.log(value, from, to)
		return value >= from && value <= to
	}
	
	handleResize = () => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
	
	render() {
		const {
			children,
			shouldRender
		} = this.props
		const { width, height } = this.state
		
		if (children && typeof children === 'function') {
			return children({ width, height })
		}
		else if (shouldRender) {
			return children
		}
		else {
			return null
		}
	}
}

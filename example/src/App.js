import React, { Component } from 'react'

import Layout from 'react-adaptive-layout'

export default class App extends Component {
	render() {
		return (
			<div>
				<Layout shouldRender={ window.innerWidth > 992.99991 }>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut corporis fugiat maiores optio
						placeat praesentium soluta. Ad beatae, dolorum error est incidunt ipsa nam nulla qui repudiandae
						rerum temporibus.
					</p>
				</Layout>
				<Layout>
					{
						() => {
							if (Layout.isMobile()) return <p>Only on mobile</p>
							if (Layout.isTablet()) return <p>Only on tables</p>
							if (Layout.isDesktop()) return <p>Only on big screens</p>
						}
					}
				</Layout>
				<Layout>
					{
						({ width }) => {
							return width < Layout.breakpoints.md ?
								<img src="http://placekitten.com/g/300/300" alt="Wanna some small kitty"/> :
								<img src="http://placekitten.com/g/800/600" alt="Wanna some big kitty"/>
						}
					}
				</Layout>
				<Layout>
					{
						({ height }) => (
							height < 480 &&
							<img src="http://placekitten.com/g/200/300" alt="Meow!"/>
						)
					}
				</Layout>
			</div>
		)
	}
}

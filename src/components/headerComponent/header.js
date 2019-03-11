// Structure is the same for components and App.js files

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

      		<div className="logo">
      			Logo
      		</div>

      		<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<Link to="/Products">Products</Link>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
      		</nav>

      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './layout/Main';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faChevronDown, faChevronCircleDown, faPhone, faEnvelope, faHome, faPrint, faSearch, faFrown,
					faNotEqual, faComments, faBolt, faSmile, faAsterisk, faUserTie, faHandshake, faHandsHelping, faPercentage,
					faCogs, faMapMarkedAlt, faDollarSign, faVoteYea, faSearchLocation, faMoneyCheckAlt, faPercent, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faChevronCircleDown, faChevronDown, faPhone, faEnvelope, faHome, faPrint, faSearch,
						faFrown, faNotEqual, faComments, faBolt, faSmile, faAsterisk, faUserTie, faHandshake, faHandsHelping,
						faPercentage, faCogs, faMapMarkedAlt, faDollarSign, faVoteYea, faSearchLocation, faMoneyCheckAlt, faPercent, faInfoCircle );

class App extends Component {
	render() {
		return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
		);
	}
}

export default App;
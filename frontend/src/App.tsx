import './App.css';
import React from 'react';

class App extends React.Component<any, any> 
{

	render() 
	{
		return (
			<div className="App">
				<div className="cardFront">
				</div>
				<div className="cardBack">
				</div>
				<div className="buttonFrame">
					<button> Bad </button>
					<button> Good </button>
				</div>
			</div>
		);
	}

}

export default App
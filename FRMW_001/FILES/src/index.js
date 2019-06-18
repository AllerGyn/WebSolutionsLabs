import React, { Component as C } from 'react';
import {render as r} from 'react-dom';


class App extends C {
	constructor() {
		super();
		this.state = {
			exps: ''
		}
	}

	change(v){
		this.setState(({ exps }) => ({ exps: v }))
	}
	render(){
		return (<div>
			<input value={ this.state.exps }
			onChange={({ target: {value: v}}) => this.change(v)}	/>
			<hr/>
			<input value={ this.state.exps }
			onChange={({ target: {value: v}}) => this.change(v)}	/>
		</div>)
	}
}

r(<App/>,
	document.querySelector('.cont'));
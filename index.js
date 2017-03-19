import {createElement, render } from './inferno-renderer/build/inferno-renderer.js';

import actions from './src/actions';
import display from './src/display';
import model from './src/model';
import state from './src/state';
import views from './src/views';


actions.model = model;
model.state = state;
state.views = views;
state.display = display;


// kick off
state.render(model);
_loop();

function _loop(){
	actions.add(model,{});

    // inferno
	render(iview(), document.getElementById('root'));

	setTimeout(_loop, 1000);
}

export {actions};


function iview(){
	var _d = 'hello';
  return (
<div>inferno {_d} {model.counter}
  <button onclick={actions.add}>add</button>
  <input></input>
  <br />
  <br />
</div>
    );
}
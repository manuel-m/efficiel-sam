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
	setTimeout(_loop, 1000);
}

export {actions};
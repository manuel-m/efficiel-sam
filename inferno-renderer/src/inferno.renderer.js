import Inferno from 'inferno';
import createElement from 'inferno-create-element';

function render(view_, node_){
  Inferno.render(view_,node_);
}

export { render, createElement }



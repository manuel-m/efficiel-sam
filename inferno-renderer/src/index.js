import {createElement, render } from './inferno.renderer';

var root = document.getElementById('root')

var model = {
    label: 'test',
    counter: 0
};

_loop();  

function _loop() {
  add();
  setTimeout(_loop, 1000);
}

function add(){
  model.counter += 1;
  render(view(), root);
}


function view(){
  return (
<div>{model.label} {model.counter}
  <button onclick={add}>add</button>
  <input></input>
</div>
    );
}



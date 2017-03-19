var state = {
    render:function (model_) {
        representation(model_)
        nextAction(model_);
    }
};

export default state;

var state_matchers = [{
    id: 'error',
    match: function (model_) {
        return model_.error;
    }
}, {
    id: 'ready',
    match: function (model_) {
        return !model_.error;
    }
}];


function representation(model_) {
    var _found = state_matchers.find(function (matcher_) {
        return matcher_.match(model_);
    });

    state.display(state.views[_found ? _found.id : 'internal_error'](model_));
}

function nextAction(model_) {}

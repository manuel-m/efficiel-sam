var state = {
    render: render
};

export default state;

var _state_matchers = [{
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

function render(model_) {

    update_representation(model_)
    trigger_nextaction(model_);

    function update_representation(model_, display) {
        var _matched_state = _state_matchers.find(function (matcher_) {
            return matcher_.match(model_);
        });
        _matched_state = _matched_state || 'internal_error';

        _representation = state.view[_matched_state.id](model_);

        display(_representation);
    }
    
    function trigger_nextaction(model_) {}

};

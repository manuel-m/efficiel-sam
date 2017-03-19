var model = {
    counter: 0,
    error: false,
    present: present
};

export default model;

var effector = {
    'add': function(model_) { model_.counter += 1; },
    'error': function(model_) { model_.error = true; },
    'sub': function(model_) { model_.counter -= 1; }
};

function present(submittedActionData_) {
    var _sad = submittedActionData_ || 'add';

    if (!_sad in effector) {
        _sad = 'error';
    }

    effector[_sad](model);
    model.state.render(model);
}

var model = {
    count: 0,
    error: false,
    present: present
};

export default model;

var _model_actionsAppliers = {
    'add': function(model_) { model_.count += 1; },
    'error': function(model_) { model_.error = true; },
    'sub': function(model_) { model_.count += 1; }
};

function present(submittedActionData_, render) {
    var _sad = submittedActionData_ || 'add';

    if (!_sad in _model_apply) {
        _sad = 'error';
    }

    _model_actionsAppliers(model)[_sad];
    render(model);
}

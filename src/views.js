import actions from './actions';

export default {
    error: function (model_) {
        return '<p>error</p>';
    },
    internal_error: function (model_) {
        return '<p>internal error</p>';
    },
    ready: function (model_) {
        return [
            '<button onclick="sam.actions.add()">add</button>',
            '<button onclick="sam.actions.sub()">sub</button>',
            '<p>counter:', model_.counter, '</p>'
        ].join('');
    }
};


var actions = {
	add:function(model_, data_){
		actions.model.present('add');		
	},
	error:function(model_, data_){
		actions.model.present('error');
	},	
	sub:function(model_, data_){
		actions.model.present('sub');
	}
};

export default actions;
 


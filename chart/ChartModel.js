FbApp.ChartModel = Backbone.Model.extend({

	defaults:{
		chartData:[]
	},

	initialize:function(options){
		_.extend(this,options || {});
		this.collection.on('reset',this.processData,this);
	},

	processData:function(){
		
		//console.log('chartData' + chartData);
		// ajout
		//this.set('chartData',array);
		throw new Error(".processData NOT IMPLEMENTED.");
	}

});
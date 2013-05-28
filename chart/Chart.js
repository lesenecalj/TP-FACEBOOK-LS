FbApp.Chart = Backbone.Model.extend({
  defaults:{
    chartData: []  
  },

  initialize: function(options){
    _.extend(this, options || {});
    this.collection.on('reset', this.processData, this);
  },

  // méthode implémentée par les classes filles
  processData: function(){
    throw new Error('.processData NOT IMPLEMENTED');
  }
});
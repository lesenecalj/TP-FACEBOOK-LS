FbApp.Friends = Backbone.Collection.extend({
  model: FbApp.Friend,

  initialize: function(){
    this.sortField ='name';
    this.filteredColl = this;
  },

  search: function(searchToken){
    searchToken = searchToken.toLowerCase();

    // Normalement on devrait avoir recourt à _.memoize pour ce genre
    // de traitement "lourd" http://underscorejs.org/#memoize
    console.time('flatten');
    var friends = this._flatten(this.toJSON());
    console.timeEnd('flatten');

    console.time('search');
  this.filteredColl = _(this.filter(function(friend){
      return _.find(_.keys(friend.attributes), function(attr){
        if(!_.isString(friend.attributes[attr])){return false;}
        return (friend.attributes[attr] ||'').toLowerCase().indexOf(searchToken) !== -1;
      }) !== undefined;
    }, this));

     console.timeEnd('search');

   /* this.getSortedCollection(this.filteredColl);*/
    this.setSortBy(this.sortedField);
    this.trigger('reset', this.filteredColl);
  },

  _flatten: _.memoize(function(root){
    // Since sometimes "bithday" is null, it won't be available in the finale object
    // however, since the template requires it we have to define a default value.
    var defaultValue = '';

    function valueSelector(value){
      return _.isString(value) && value.length > 0;
    }

    return root.map(function(friend){
      return _.flattenObject(friend, valueSelector, defaultValue);
    }, this);

  }),

  sortByName: function(){
    var sortedArray = this.sortBy(function(friend){
      return friend.get('name');
    });

    this.trigger('reset', sortedArray);
  },

  sortByBirthday: function(){
    var sortedArray = this.sortBy(function(friend){
      return Date.parse(friend.get('birthday_date'));
    });

    this.trigger('reset', sortedArray);
  },

  setSortBy: function(what){
    this.sortedField = what;
    this.filteredColl = _(this.filteredColl.sortBy(this._visitor[what]));
    this.trigger('reset', this.filteredColl);
  },

sortCollection:function(){
  if(!this._visitor(this.sortField)){
    alert("erreur");
  }
},

  _visitor:{
    name:function(friendModel){return friendModel.get('name');},
    birthday:function(friendModel){  
      var date =(friendModel.get('birthday_date') || "01/01/1000").split('/');
       date[2] = date [2] || '1000';
       console.log(date[2]);
        return new Date(Date.parse(date));
    },
  }

});

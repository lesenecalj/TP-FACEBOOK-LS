FbApp.RelationShipModel = FbApp.ChartModel.extend({

  processData: function(){
     var data=[];
        this.collection.forEach(function(friend){
          data[friend.get('relationship_status')] += 1;     
        });

        for(var i in data)
        {
            data[i] = 0;
        }

        this.collection.forEach(function(friend){
          data[friend.get('relationship_status')] += 1;     
        });

        var dataTemp = [];

        for(var i in data)
        {
          if(i != "null"){
            dataTemp.push([i, data[i]]);
          }else if(i == "NaN"){
            dataTemp.push(['Non divulgé', data[i]]);
          }
          
            console.log(i + "=" + data[i]);
        }
        this.set('chartData', dataTemp);
        console.log("test"  + this.get('chartData'));
 }
});

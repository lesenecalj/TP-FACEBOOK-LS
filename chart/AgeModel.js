FbApp.AgeModel = FbApp.ChartModel.extend({
	processData: function(){
		var data=[];
		this.collection.forEach(function(friend){
			var datestr = friend.get('birthday_date');
			if(datestr != null){
				var date = datestr.split("/");
				date[2] = new Date().getFullYear() - date[2];
				data[date[2]] += 1;				
			} else {
				data["null"] += 1;
			}
		});

		for(var i in data)
		{
		    data[i] = 0;
		}

		this.collection.forEach(function(friend){
			var datestr = friend.get('birthday_date');
			if(datestr != null){
				var date = datestr.split("/");
				date[2] = new Date().getFullYear() - date[2];
				data[date[2]] += 1;			
			} else {
				data["null"] += 1;
			}
		});
		var dataTemp = [];

		for(var i in data)
		{
			if(i != "null"){
				dataTemp.push([i, data[i]]);
			}
      		 else{
      			dataTemp.push(['non Divulgé',data[i]]);
      		}
			
		    console.log(i + "=" + data[i]);
		}
		this.set('chartData', dataTemp);
	}
});
FbApp.LikeModel = FbApp.ChartModel.extend({
		processData: function(){
		var data=[];
		this.collection.forEach(function(friend){
			data[friend.get('likes_count')] += 1;			
		});

		for(var i in data)
		{
		    data[i] = 0;
		}

		this.collection.forEach(function(friend){
			data[friend.get('likes_count')] += 1;			
		});

		var dataTemp = [];

		for(var i in data)
		{
			if(i != "null"){
				dataTemp.push([i, data[i]]);
			} else {
				dataTemp.push(['non Divulgé', data[i]]);
			}

		    console.log(i + "=" + data[i]);
		}

		this.set('chartData', dataTemp);
		console.log(this.get('chartData'));
	}
});

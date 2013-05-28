function chartbyRelationShip(){
	var myFriends = new FbApp.Friends();
   var relationShip = new FbApp.RelationShipModel({collection:myFriends
        });

        var relationShipView = new FbApp.RelationShipView({
          model:relationShip,
          el:$('#chart')[0]
        });
	myFriends.reset(getFriends());
}

function chartbySexe(){
    var myFriends = new FbApp.Friends();
      var sexe = new FbApp.SexModel({collection:myFriends
      });

      var sexeView = new FbApp.SexView({
        model:sexe,
        el:$('#chart')[0]
      });
    myFriends.reset(getFriends());
}

function chartbyAge(){
	var myFriends = new FbApp.Friends();
    var age = new FbApp.AgeModel({
       collection:myFriends
    });

    var ageView = new FbApp.AgeView({
      model:age,
      el:$('#chart')[0]
    });
    myFriends.reset(getFriends());
}

function chartbyLikes(){
  var myFriends = new FbApp.Friends();
    var like = new FbApp.LikeModel({
       collection:myFriends
    });

    var likeView = new FbApp.LikeView({
      model:like,
      el:$('#chart')[0]
    });
    myFriends.reset(getFriends());
}
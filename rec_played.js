(function(){
    var countPlayed = 0;
    var recPlayed = $("#rec_played").text();
    setInterval(function(){
        var recPlayedNow = $("#rec_played").text();
        if(recPlayed !== recPlayedNow){
            ++countPlayed;
            console.log("countPlayed is : " + countPlayed +" , and recPlayed is : " + recPlayedNow);
            recPlayed = recPlayedNow;
        }
    },1000*30);
})();
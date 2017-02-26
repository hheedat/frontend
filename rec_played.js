(function(){
    var countPlayed = 0;
    var startTime = new Date();
    var recPlayed = $("#rec_played").text();
    setInterval(function(){
        var recPlayedNow = $("#rec_played").text();
        if(recPlayed !== recPlayedNow){
            ++countPlayed;
            console.log("收听了 : " + countPlayed +" , 累积播放了 : " + recPlayedNow +
            " , 现在是 : " + new Date() + " , 本次已经听了 : " + Math.floor((new Date()-startTime)/1000/60) + " 分钟");
            recPlayed = recPlayedNow;
        }
    },1000*30);
})();

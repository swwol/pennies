function goScreen2(coin){
console.log("here");	
window.chosenCoin = coin;

if (coin !="coin4"){

$("#result_blurb")[0].innerHTML  = $("#sorry")[0].innerHTML;

}else{

$("#result_blurb")[0].innerHTML  = $("#congrats")[0].innerHTML;

}


console.log("screen2 "+coin);

//fade off screen1 text

TweenMax.allTo ([$("#trythis"),$("#blurb1")],.5,{autoAlpha:0});

//fade up screen2 bits
TweenMax.to ($("#screen2"),.5,{autoAlpha:1,delay:.5});

// move your choice to left 369 top -135





TweenMax.to ( $("#"+coin),0,{top:-135, left:369});


//kill filters on coin
    
    if (!isIOS6()){

	$("#"+coin).css('webkitFilter','brightness(1)','saturate(1)','contrast(1)');
        
    }

//drop both coins

TweenMax.to ($("#real"),.5,{top:224,left:554,ease:Bounce.easeOut,delay:.1});

TweenMax.to ($("#"+coin),.5,{top:224,left:369,ease:Bounce.easeOut,onComplete:killFilters,onCompleteParams:[coin]});


//your choice to left 739 top 448

//real penny to left 1107

}

function killFilters (c){

console.log ("kill filters");


//kill filters on coin
    
    if (!isIOS6()){

	$("#"+c).css('webkitFilter','brightness(1)','saturate(1)','contrast(1)');
        
    }


}


function resetCoins(){
	TweenMax.to($("#screen2"),.5,{autoAlpha:0});
	TweenMax.allTo ([$("#trythis"),$("#blurb1")],.5,{autoAlpha:1,delay:1});

console.log ("resetting coins");


TweenMax.to ( $("#coin1"),0,{ left:264, top:337});
TweenMax.to ( $("#coin2"),0,{ left:400, top:337});

TweenMax.to ( $("#coin3"),0,{ left:535, top:337});

TweenMax.to ( $("#coin4"),0,{ left:666, top:337});

TweenMax.to ( $("#coin5"),0,{ left:264, top:450});
TweenMax.to ( $("#coin6"),0,{ left:400, top:450});

TweenMax.to ( $("#coin7"),0,{ left:535, top:450});

TweenMax.to ( $("#coin8"),0,{ left:666, top:450});

TweenMax.to ( $("#coin9"),0,{ left:264, top:563});
TweenMax.to ( $("#coin10"),0,{ left:400, top:563});
TweenMax.to ( $("#coin11"),0,{ left:535, top:563});
TweenMax.to ( $("#coin12"),0,{ left:666, top:563});

TweenMax.to ( $("#real"),0,{ left:553, top:-135});

window.pressed = false;










}
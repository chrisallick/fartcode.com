/**
 * Returns a random number between min and max
 */
function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nextOrFirst() {
	var next = $('#instructions .instruction.on').next(".instruction").length;
	if( next ) {
		$('#instructions .instruction.on').removeClass("on").next(".instruction").addClass("on");	
	} else {
		// start over
		$('#instructions .instruction.on').removeClass("on");
		$("#instructions .instruction").first().addClass("on");
	}
}

function previousOrLast() {
	var prev = $('#instructions .instruction.on').prev(".instruction").length;
	if( prev ) {
		$('#instructions .instruction.on').removeClass("on").prev(".instruction").addClass("on");
	} else {
		$('#instructions .instruction.on').removeClass("on");
		$("#instructions .instruction").last().addClass("on");
	}
}

$(window).load(function(){	
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 10);

	$("#wrapper").animate({
		opacity: 1
	});
});

var player, done, ready = false;
var mobile = false;
$(document).ready(function() {

	$("#play").css({
		left: $(document).width()/2 - $("#play").width()/2
	});

	$("#videocontainer").css({
		left: $(document).width()/2 - $("#videocontainer").width()/2
	});

	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$("#instructions .leftarrow").click(function(event){
		previousOrLast();
	});

	$("#instructions .rightarrow").click(function(event){
		nextOrFirst();
	});

	$("#howitworks").click(function(event){
		event.preventDefault();

		$("#video").removeClass("on");
		$("#instructions").addClass("on");

		$("#videocontainer").hide();

		$(this).hide();
		$("#play").hide();
		$("#videobutton").show();
	});

	$("#videobutton").click(function(event){
		event.preventDefault();

		$("#video").addClass("on");
		$("#instructions").removeClass("on");

		$(this).hide();
		$("#play").show();
		$("#howitworks").show();
	});

	$("#play").click(function(event){
		event.preventDefault();

		$("#videocontainer").show();

		$(this).hide();
	});
});
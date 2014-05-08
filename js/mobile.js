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
var section = "video";
$(document).ready(function() {

	$("#logo").css({
		left: $("#video").width()/2 - $("#logo").width()/2
	});

	$("#playbutton").css({
		left: $("#video").width()/2 - $("#playbutton").width()/2
	});

	$("#videocontainer").css({
		left: $(document).width()/2 - $("#videocontainer").width()/2
	});

	$("#about").css({
		left: $(document).width()/2 - $("#about").width()/2,
	});

	$("#legal").css({
		left: $(document).width()/2 - $("#legal").width()/2,
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

		section = "howitworks";

		$(".section.on").removeClass("on");
		$("#instructions").addClass("on");
		nextOrFirst();

		$("#videocontainer").hide();

		$(this).hide();
		$("#logo, #playbutton").hide();
		$("#videobutton").show();
	});

	$("#videobutton").click(function(event){
		event.preventDefault();

		section = "video";

		$(".section.on").removeClass("on");
		$("#video").addClass("on");
		nextOrFirst();

		$(this).hide();
		$("#logo, #playbutton").show();
		$("#howitworks").show();
	});

	$("#logo, #playbutton").click(function(event){
		event.preventDefault();

		$("#videocontainer").show();

		$("#logo, #playbutton").hide();
	});

	$("#aboutlink").click(function(event){
		event.preventDefault();

		$(".section.on").removeClass("on");
		$("#about").addClass("on");
	});

	$("#legallink").click(function(event){
		event.preventDefault();

		$(".section.on").removeClass("on");
		$("#legal").addClass("on");
	});

	$("#about .close, #legal .close").click(function(event) {
		event.preventDefault();

		$(".section.on").removeClass("on");

		if( section == "howitworks" ) {
			$("#instructions").addClass("on");
			$("#howitworks").hide();
			$("#videobutton").show();
			nextOrFirst();
		} else if( section == "video" ) {
			$("#videocontainer").hide();
			$("#video").addClass("on");
			$("#howitworks").show();
			$("#videobutton").hide();
		}
	});
});
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

	$("#logo").css({
		left: $(document).width()/2 - $("#logo").width()/2,
		top: $(document).height()/2 - $("#logo").height()/2
	});

	$(window).resize(function(){
		$("#logo").css({
			left: $(document).width()/2 - $("#logo").width()/2,
			top: $(document).height()/2 - $("#logo").height()/2
		});
	})

	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$("#video .logo").click(function(){
		$("#videocontainer").show();
		$("#player").attr("src","http://www.youtube.com/embed/mCSd9GA0ndc?autoplay=1");
	});

	$("#videocontainer .close").click(function() {
		$("#player").attr("src","");
		$("#videocontainer").hide();
	})

	$("#store").click(function(event){
		_gaq.push(['_trackEvent', 'landingPage', 'click', 'store']);

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$("#howitworksbutton").click(function(event){
		$("#sections .section").removeClass("section-on");

		$("#video").removeClass("section-on");
		$("#instructions").addClass("section-on");
		$(this).hide();
		$("#videobutton").show();

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$("#howitworksbuttonmobile").click(function(event){
		$("#sections .section").removeClass("section-on");

		$("#video").removeClass("section-on");
		$("#instructions").addClass("section-on");
		$(this).hide();
		$("#videobuttonmobile").show();

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$("#videobutton").click(function(){
		$("#sections .section").removeClass("section-on");

		$("#instructions").removeClass("section-on");
		$("#video").addClass("section-on");
		$(this).hide();
		$("#howitworksbutton").show();
	});

	$("#videobuttonmobile").click(function() {
		$("#sections .section").removeClass("section-on");

		$("#instructions").removeClass("section-on");
		$("#video").addClass("section-on");
		$(this).hide();
		$("#howitworksbuttonmobile").show();
	});

	$(".home").click(function(event) {
		event.preventDefault();
		_gaq.push(['_trackEvent', 'landingPage', 'click', 'home']);
		$("#sections .section").removeClass("section-on");
		$("#footer .links a").removeClass("on");

		$("#video").addClass("section-on");
		$("#footer .links .home").addClass("on");

		if( $(".break").css("display") == "inline" ) {
			$("#videobutton").hide();
			$("#howitworksbutton").show();
		} else {
			$("#videobuttonmobile").hide();
			$("#howitworksbuttonmobile").show();
		}

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$(".legal").click(function(event) {
		event.preventDefault();
		_gaq.push(['_trackEvent', 'landingPage', 'click', 'legal']);
		$("#sections .section").removeClass("section-on");
		$("#footer .links a").removeClass("on");

		$("#legal").addClass("section-on");
		$("#footer .links .legal").addClass("on");

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$(".about").click(function(event){
		event.preventDefault();
		_gaq.push(['_trackEvent', 'landingPage', 'click', 'about']);
		$("#sections .section").removeClass("section-on");
		$("#footer .links a").removeClass("on");

		$("#about").addClass("section-on");
		$("#footer .links .about").addClass("on");

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$(".contact").click(function(event){
		_gaq.push(['_trackEvent', 'landingPage', 'click', 'contact']);

		$("#player").attr("src","");
		$("#videocontainer").hide();
	});

	$("#instructions .leftarrow").click(function(event){
		previousOrLast();
	});

	$("#instructions .rightarrow").click(function(event){
		nextOrFirst();
	});
});
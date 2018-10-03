var parser = document.createElement('a');
parser.href = window.location;

var page = parser.hash.substr(1);
if (page=="") {
	page = "/index2.html";
}

$(window).load(function() {
	$("#main").attr("src",page);
});

console.log(page);

var canstopfade = false;

/*setTimeout(function() {
	canstopfade = true;
}, 400);*/

var content_start_loading = (iframe)=>function() {
	console.log("Change page from (Old url) : "+iframe.contentWindow.location);
	//start fade black (will do onunload (on change page and old page destroying))
	
	$("#fader").css('display',"block");
	$("#fader").css('opacity',0.3);
	canstopfade = false;
	
	setTimeout(function() {
		canstopfade = true;
	}, 400);
	
	//fix mystery bug
	setTimeout(function() {
		var newparser = document.createElement('a');
		newparser.href = iframe.contentWindow.location;
		var compactloc = newparser.pathname+newparser.search+newparser.hash;
		if (compactloc=="blank") compactloc = page;
		window.location = '#'+compactloc;
	}, 10);
	
};

function stopfade() {
	
	var iframe = $("#main")[0];
	
	//console.log("Stop fade (New url) : "+iframe.contentWindow.location);
	
	var stopfadeinterval = setInterval(function() {
		if (canstopfade) {
			$("#fader").css('opacity',0);
			setTimeout(function() {$("#fader").css('display',"none");}, 250);
			canstopfade = false;
			clearInterval(stopfadeinterval);
		}
		//console.log("aaa");
	} , 10);
	
	//mystery bug
	/*var newparser = document.createElement('a');
	newparser.href = iframe.contentWindow.location;
	var compactloc = newparser.pathname+newparser.search+newparser.hash;
	console.log("Compact loc : "+compactloc);
	if (compactloc=="blank") compactloc = page;
	//window.location = '#'+compactloc;*/
}

var content_finished_loading = function(iframe) {
	console.log("Finish load (New url) : "+iframe.contentWindow.location);
	//stop fade black (finish load)
	
	//stopfade();
	
	// inject the start loading handler when content finished loading
	// don't change
	iframe.contentWindow.onunload = content_start_loading(iframe);
};
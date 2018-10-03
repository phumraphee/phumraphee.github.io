//fade transition
function stopfade() {
  $("#fader").animate({opacity:0},500,function() {
    $("#fader").css("display","none");
  });
  console.log("Stop fade");
}

function stopfade_force() {
  $("#fader").css("display","none");
  console.log("Stop fade (force)");
}

function startfade() {
  $("body").append('<link rel="stylesheet" href="/css/fade.css">');
  $("body").append('<div id="fader"></div>');
  console.log("Start fade");
}

$(document).ready(function() { //don't change
  if (window.parent==window) startfade(); //run for first time (for page without iframe)
});

$(window).on("load",function() { //don't change
    console.log(window.location+" loaded");
    window.parent.stopfade();
    if (window != window.parent) window.stopfade();
});

//new version fade (modern fade transition -> secret of programming world)
function isPathAbsolute(path) { //library function
  return /^(?:\/|[a-z]+:\/\/)/.test(path);
}

function changepage(href,nopushstate) {
  //if in iframe -> do change page in root instead
  //will do only in iframe that has this script
  //if iframe to google it won't do change page
  if (window.parent!=window) {
    window.parent.changepage(href,nopushstate);
    return;
  }
  
  //if not in iframe -> do change page
  if (!nopushstate) nopushstate = false;
  console.log("Change page : "+href);
  if (isPathAbsolute(href)) {
    window.location = href;
    return;
  }
  if (!nopushstate) { window.history.pushState(href, "", href); console.log("Push state: "+href); }
  $("html").html("");
  console.log("Code deleted but continue to run");
  $("html,body").css("width","100%");
  $("html,body").css("height","100%");
  $("html,body").css("margin","0");
  $("html,body").css("overflow","hidden");
  startfade();
  $.get(href,function(data) {
    console.log("New page source code loaded");
    $("body").append('<iframe id="main" src='+href+' style="border:none;width:100%;height:100%;"></iframe>');
  });
}

$(document).ready(function() { //don't change
  if (window.parent!=window) {
    window.parent.document.title = document.title;
    //window.parent.stopfade();
    //startfade();
  } else {
    var href = window.location.pathname;
    window.history.pushState(href, "", href); console.log("Push state: "+href);
  }
});

$(window).on('popstate', function (e) {
    var state = e.originalEvent.state;
    if (state !== null) {
        changepage(state,true);
        console.log("Back : "+state);
    }
});

$(document).ready(function() {
  $("a").not(".normal-a").click(function(e) {
    e.preventDefault();
    changepage($(this).attr("href"));
  });
});
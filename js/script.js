function textChange(){
	document.getElementById('para2').innerHTML="THANK YOU";
}

function colorChange(){
	document.getElementById('para2').style.color="red";
}
function changeSize(){
	document.getElementById('para2').style.fontSize="50px";
}
function changeImage(){
	document.getElementById('para3').src="image/p3.jpg";
}
function changePicture(){
	document.getElementById('para3').src="image/p1.jpg";
}

$(document).ready(function(){

	$('#hide').click(function(){
		$('.lorem').hide();
	})

	$('#show').click(function(){
		$('.lorem').show();
	})

	$('#fadeIn').click(function(){
		$('.lorem').fadeIn();
	})

	$('#fadeOut').click(function(){
		$('.lorem').fadeOut();
	})

	$('#fadeToggle').click(function(){
		$('.lorem').fadeToggle();
	})

	$('#Toggle').click(function(){
		$('.lorem').toggle();
	})
})

$(document).ready(function(){
	$( ".box" ).css( "border", "2px solid red" )
  .add( ".add" )
  .css( "background", "yellow" );
})

$(document).ready(function(){
	$( "div.left, div.right" ).find( "div, div > .adbck" ).addClass( "border" );
 
// First Example
$( "div.before-addback" ).find( ".adbck" ).addClass( "background" );
 
// Second Example
$( "div.after-addback" ).find( ".adbck" ).addBack().addClass( "background" );
})


$( function() {
    $( "#accordion" ).accordion();
  } );


$( function() {
    $( "#draggable" ).draggable();
  } );


 $( function() {
    $( "#draggable2" ).draggable();
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( ".box2" )
            .html( "Dropped!" );
      }
    });
  } );


 $( function() {
    $( "#resizable" ).resizable();
  } );

 $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );



 $( function() {
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );




 $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );


 $(document).ready(function(){

	
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

 })



 window.addEventListener('load', function () {
    // console.log("Windows loading");

    //Getting dashboard  ( Checking if we are in dashboard or not)
    var dashboard = document.getElementById("page_name");
    //Start button 
    var start_button = document.getElementById("start_button");
    //Stop button
    var stop_button = document.getElementById("timer_submit");
    //timer 
    var hour = document.getElementById("hour");
    var mint = document.getElementById("min");
    var secd = document.getElementById("sec");

    // console.log(timer.innerHTML);

    if (dashboard != null && localStorage.getItem('start_button') == null) {
        // console.log("in Dashboard and start button not clicked");
        //Declaring variable  
        var hr = 0;
        var min = 0;
        var sec = 0;

    } else if ((dashboard != null && localStorage.getItem('start_button') != null)) {
        $("#start_button").prop("disabled", true);
        $("#start_button").removeClass("btn-outline-success");
        $("#start_button").addClass("btn-light");
        start_button.innerHTML = "Running";

    }




    if (start_button) {
        start_button.addEventListener('click', function () {
            // console.log('start button working');
            localStorage.setItem('start_button', 'clicked');
            $("#start_button").prop("disabled", true);
            $("#start_button").removeClass("btn-outline-success");
            $("#start_button").addClass("btn-light");
            start_button.innerHTML = "Running";
            var total_time = document.getElementById("total_time");
            if (total_time) {
                total_time.innerHTML = "Counting...";
            }
            timerCycle();

        })
    }
    if (stop_button) {
        stop_button.addEventListener('click', function () {

            // saveData(hr, min, sec);                          To get data after stop button active this fuction
            localStorage.clear();
            hour.innerHTML = '00';
            mint.innerHTML = '00';
            secd.innerHTML = '00';
            var total_time = document.getElementById("total_time");
            if (total_time) {
                total_time.innerHTML = hr + ':' + min + ':' + sec;
            }
            //Stopping the cycle
            clearTimeout(cycle);
            hr = 0;
            min = 0;
            sec = 0;
            $("#start_button").prop("disabled", false);
            $("#start_button").addClass("btn-success");
            $("#start_button").removeClass("btn-light");
            start_button.innerHTML = "Start";


        })
    }
    //continue timer on other pages 
    if (dashboard == null && localStorage.getItem('start_button') != null) {
        sec = localStorage.getItem('sec');
        min = localStorage.getItem('min');
        hr = localStorage.getItem('hr');
        timerCycle();
        //continue timer on coming back Dashboard
    } else if (dashboard != null && localStorage.getItem('start_button') != null) {
        sec = localStorage.getItem('sec');
        min = localStorage.getItem('min');
        hr = localStorage.getItem('hr');
        timerCycle();
    }
    function timerCycle() {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        localStorage.setItem('hr', hr);
        localStorage.setItem('min', min);
        localStorage.setItem('sec', sec);
        // console.log(timer);
        // console.log(timer.innerHTML);

        hour.innerHTML = hr;
        mint.innerHTML = min;
        secd.innerHTML = sec;

        // if (dashboard == null && localStorage.getItem('start_button') != null) {
        //     var side_timer = document.getElementById('time_title');
        //     if (side_timer) {
        //         handling other counter changeing URL        [Put Where you want to show your counter after URL change]
        //         hour.innerHTML = hr;
        //         min.innerHTML = min;
        //         sec.innerHTML = sec;
        //     }

        // } else {

        // }


        cycle = setTimeout(timerCycle, 1000);
    }

    //AJax funtion to save the data


    // function saveData(hr, min, sec) {

    //     $.ajax({
    //         headers: {
    //             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //         },
    //         type: 'POST',
    //         url: '/timer',
    //         data: {

    //             'hr': hr,
    //             'min': min,
    //             'sec': sec,

    //         },
    //         success: function (data) {
    //             document.getElementById("time_msg").innerHTML = data.msg;
    //             $("#time_msg").slideDown(1000);
    //             $("#time_msg").delay(3000).slideUp(1000);
    //         },
    //         error: function (data, textStatus, errorThrown) {
    //             console.log("Error:");
    //             console.log(data);

    //         },
    //     });

    // }

})


$(document).ready(function(){

	
new WOW().init();




 })

$(".gallery").flipping_gallery({
    direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
    selector: "> a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
    spacing: 10, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
    showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
    enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
    flipDirection: "bottom", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
    autoplay: false // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.
  });

$(document).ready(function(){
	$(".gallery").flipForward();
$(".gallery").flipBackward();
})


$('.some-list').simpleLoadMore({
  item: 'div'
});
$('.some-list').simpleLoadMore({
  count: 10
});
$('.some-list').simpleLoadMore({
  btnHTML: '<a href="#" class="load-more__btn">View More <i class="fas fa-angle-down"></i></a>'
});
$('.some-list').simpleLoadMore({
  cssClass: 'load-more'
});
$('.some-list').simpleLoadMore({
  itemsToLoad: 2
});



$(function() {

  // items to show
  var increment = 3;

  var startFilter = 0;
  var endFilter = increment;

  // item selector
  var $this = $('.items');

  var elementLength = $this.find('div').length;
  $('.listLength').text(elementLength);

  // show/hide the Load More button
  if (elementLength > 2) {
    $('.buttonToogle').show();
  }

  $('.items .item').slice(startFilter, endFilter).addClass('shown');
  $('.shownLength').text(endFilter);
  $('.items .item').not('.shown').hide();
  $('.buttonToogle .showMore').on('click', function() {
    if (elementLength > endFilter) {
      startFilter += increment;
      endFilter += increment;
      $('.items .item').slice(startFilter, endFilter).not('.shown').addClass('shown').toggle(500);
      $('.shownLength').text((endFilter > elementLength) ? elementLength : endFilter);
      if (elementLength <= endFilter) {
          $(this).remove();
      }
    }
  });

});

$('.owl-carousel').owlCarousel({
    items:5,
    nav: true,
    center: true,
    loop:true,
    margin:20
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
  
});

$(document).ready(function(){
  $('.owl-carousel, .slide').owlCarousel({
        items:4,
        loop:false,
        center:true,
        // margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });
  
});


	$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.img-slide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});



// $(document).ready(function(){
//     $(".afisha").hover(function(){
// 		$("#layer2").attr("src", "images/layer2hover.svg");
//     },function(){
//     $("#layer2").attr("src", "images/layer2.svg");
//     });
// });


$(document).ready(function(){
    $(".cardabout").hover(function(){
	  $(".about1").css("color", "white");
    },function(){
    $(".about1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardafisha").hover(function(){
	  $(".afisha1").css("color", "white");
    },function(){
    $(".afisha1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardmerch").hover(function(){
	  $(".merch1").css("color", "white");
    },function(){
    $(".merch1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardpotions").hover(function(){
	  $(".potions1").css("color", "white");
    },function(){
    $(".potions1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardbook").hover(function(){
	  $(".book1").css("color", "white");
    },function(){
    $(".book1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardcontacts").hover(function(){
	  $(".contacts1").css("color", "white");
    },function(){
    $(".contacts1").css("color", "#7D7D7D");
    });
});

$(document).ready(function(){
    $(".cardmerch").hover(function(){
	  $(".cardmerch").css("z-index", "9999");
    },function(){
    $(".cardmerch").css("z-index", "2");
    });
});

$(document).ready(function(){
    $(".cardcontacts").hover(function(){
	  $(".cardcontacts").css("z-index", "9999");
    },function(){
    $(".cardcontacts").css("z-index", "-1");
    });
});

$(document).ready(function(){
    $(".cardbook").hover(function(){
	  $(".cardbook").css("z-index", "9999");
    },function(){
    $(".cardbook").css("z-index", "1");
    });
});

$(document).ready(function(){
    $(".cardafisha").hover(function(){
	  $(".cardafisha").css("z-index", "9999");
    },function(){
    $(".cardafisha").css("z-index", "0");
    });
});


$(document).ready(function(){
    $(".cardabout").hover(function(){
	  $(".cardabout").css("z-index", "9999");
    },function(){
    $(".cardabout").css("z-index", "3");
    });
});

$(document).ready(function(){
    $(".cardpotions").hover(function(){
	  $(".cardpotions").css("z-index", "9999");
    },function(){
    $(".cardpotions").css("z-index", "4");
    });
});





$(document).ready(function(){
  var zindex = 10;

  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }

  });
});



$(document).ready(function(){
    $(".circle1").click(function(){
		$(".1").attr("src", "images/1.svg");
    });
});
$(document).ready(function(){
    $(".circle2").click(function(){
		$(".1").attr("src", "images/2.svg");
    });
});
$(document).ready(function(){
    $(".circle3").click(function(){
		$(".1").attr("src", "images/3.svg");
    });
});
$(document).ready(function(){
    $(".circle4").click(function(){
		$(".1").attr("src", "images/4.svg");
    });
});
$(document).ready(function(){
    $(".circle5").click(function(){
		$(".1").attr("src", "images/5.svg");
    });
});
$(document).ready(function(){
    $(".circle6").click(function(){
		$(".1").attr("src", "images/6.svg");
    });
});
$(document).ready(function(){
    $(".circle7").click(function(){
		$(".1").attr("src", "images/7.svg");
    });
});
$(document).ready(function(){
    $(".circle8").click(function(){
		$(".1").attr("src", "images/8.svg");
    });
});
$(document).ready(function(){
    $(".circle9").click(function(){
		$(".1").attr("src", "images/9.svg");
    });
});

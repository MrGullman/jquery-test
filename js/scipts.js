$(document).ready(function(){
  
  $("#header-text").addClass("text-xs-center display-4 pb-2 pt-2");
  $("ul").addClass("list-group");
  $("ul").children().addClass("list-group-item");
  $("i").css("padding-right", "5px");
  
  // Change the text of left-content list items
  
  $("#left-content li:nth-child(1)").html("Klicka Här!");
  $("#left-content li:nth-child(2)").html("Eller Här...");
  $("#left-content li:nth-child(3)").html("Eller varför inte här?")
  
  var orginalState = $("#header-text").clone().html();
  var item1 = $("#left-content li:nth-child(1)").clone().html();
  
  // Footer hide or show
  
  console.log($("#left-content li").get(0).textContent)
  
  $("#right-content li:nth-child(1)").html("Visa Footrn!");
  $("#right-content li:nth-child(2)").html("Göm Footrn!");
  
  $("#right-content li:nth-child(1)").on('click', function(){
    $("#footer-wrapper").css("transform", "translateY(0)")
  });
  
  $("#right-content li:nth-child(2)").on('click', function(){
    $("#footer-wrapper").css("transform", "translateY(100%)");
  });
  
  $("#left-content").children().on('mousedown', function(){
    $("#header-text").html("Detta Funkar Ju!");
  });
  
  $("li").on('mouseup', function(){
    $("#header-text").html(orginalState);
  });
  
  // Arrow moseeover function
  
  $("#arrow").on('mouseover', function(){
    $("#arrow").css("transition", "500ms");
    $("#arrow").css("transform", "rotate(0deg)");
    //$("#inner-content").css("visibility","visible");
    $("#inner-content").css("transform","translateY(0)");
  });
  
  $("#arrow").on('mouseleave', function(){
    $("#arrow").css("transition", "500ms");
    $("#arrow").css("transform", "rotate(-90deg)");
    //$("#inner-content").css("visibility","hidden");
    $("#inner-content").css("transform","translateY(-130%)")
  });
  
  // Inner content mouseover function
  
  $("#inner-content").on('mouseover', function(){
    $("#arrow").css("transform","rotate(0deg)");
    $("#inner-content").css("transform","translateY(0)");
  });
  
  $("#inner-content").on('mouseleave', function(){
    $("#arrow").css("transform","rotate(-90deg)");
    $("#inner-content").css("transform","translateY(-130%)");
  });
  
  $("#right-content li:nth-child(3)").html("Stäng Pil Knapp!");

  darkTheme.background;

  
});
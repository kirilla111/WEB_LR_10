$(document).ready(function () {

    $("#addClassButton").click(function () {
        $("#addClassObject").addClass("italic");
    });

    $("#removeClassButton").click(function () {
        $("#addClassObject").removeClass("italic");
    });

    $("#hideButton").click(function () {
        $("#hideObject").hide();
    });


    $("#showButton").click(function () {
        $("#hideObject").show();
    });

    $("#hoverObject").hover(function () {
            $("#father").find("#hoverText").css({
                "color": "blue",
                "font-size": "20px"
            });
        },
        function () {
            $("#father").find("#hoverText").css({
                "color": "black",
                "font-size": "14px"
            });
        });
    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$( function() {
    $( "#draggable" ).draggable();
  } );
$( function() {
    $( "#menu" ).menu();
  } );

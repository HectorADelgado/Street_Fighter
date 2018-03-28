$(document).ready(function () {
    //wireframe 1
    
    $("button").hover(function () {
            // on
            var extension = $(this).attr("id") +".jpg";
            $("#wrapper").css("background-image", "url('images/" + extension + "')");
            $("#wrapper").css("background-size", "100% 100%");
            $("#wrapper").css("background-repeat", "no-repeat");

            //wireframe 2

            if ($("button").click(function () { 
                $('#selectOuter').children().remove();
                $('#selectOuter').append("<h2 class='selectText'>Select Player</h2>");
                $('#selectOuter').append("<form><select class='player_left'><option value='' selected disabled hidden>Select Ninja</option><option value='donny'>Donny</option><option value='leo'>Leonardo</option><option value='raphael'>Raphael</option><option value='mikey'>Michaelangelo</option></select><select class='player_right'><option value='' selected disabled hidden>Select Ninja</option><option value='donny'>Donny</option><option value='leo'>Leonardo</option><option value='raphael'>Raphael</option><option value='mikey'>Michaelangelo</option></select></form>");
                $('#selectOuter').css("opacity", "0.9");
            }));

        }, function () {
            // off
            $("#wrapper").css("background-image", "none");
        }
    );

    $(document).on('change', '.player_left', function(){
        var choice = $('.player_left').val();
        $('#player_left').css('background-image', "url('images/"+choice+".png')");
    });

    $(document).on('change', '.player_right', function(){
        var choice = $('.player_right').val();
        $('#player_right').css('background-image', "url('images/"+choice+".png')");
    });








});
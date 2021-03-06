var playerId = 0;

$(document).ready(function() {
    $.get( "get-users", function(data) {
        var playerOne = data.players[0];
        var playerTwo = data.players[1];
        $(".player1-name").text(playerOne.nickname);
        $(".player2-name").text(playerTwo.nickname);
      });

      $(".icon-wrapper .icon-div").click(function(event) {
        event.preventDefault();
        var clickedIconName = $(this).attr("id");
        console.log(clickedIconName);

        if (playerId === "0") {
            // todo give warning to the user that they havent joined and don't change the css
        } else {
            var url = "choose/" + clickedIconName + "?playerId=" + playerId;

            // todo use ajax to create a get request to the server side method that corresponds to the url above

            $("#rock").css("color", "black");
            $("#paper").css("color", "black");
            $("#scissors").css("color", "black");
    
            $(this).css("color", "yellow");
        }


      });

});

$("form").submit(function(event) {
    event.preventDefault();
    var playerIdInput = $(".player-selection").val();
    var chosenNickname = $(".chosen-nickname").val();

    var data = {
            "playerId": playerIdInput,
            "choosenNickname": chosenNickname
    };

    $.ajax({
        type: "POST",
        url: "register-user",
        data: data
      }).done(function(response) {
        playerId = playerIdInput;
        $(".chosen-nickname").val("");
        var playerOne = response.players[0];
        var playerTwo = response.players[1];
        $(".player1-name").text(playerOne.nickname);
        $(".player2-name").text(playerTwo.nickname);
      });
});



$(document).ready(function() {
    setInterval(function() {
        $.get("get-results", function(data) {
            //data.winner exists... 0 (blue), 1, 2, or "no one"  
            if (playerId !== 0) {
                if (data.winner === "no one") {
                    $("body").css("background-color", "transparent");                
                }
                if (data.winner === 0) {
                    $("body").css("background-color", "blue");
                }

                if (data.winner === 1 && playerId === "1") {
                    $("body").css("background-color", "green");
                } else if (data.winner === 1 && playerId === "2") {
                    $("body").css("background-color", "red");
                }

                if (data.winner === 2 && playerId === "2") {
                    $("body").css("background-color", "green");
                } else if (data.winner === 2 && playerId === "1") {
                    $("body").css("background-color", "red");
                }
            }

        });
    }, 3000);


});
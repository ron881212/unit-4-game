// Character Objects

var playerRey = {
    name: "Rey",
    gender: "Female",
    affiliation: "Resistance",
    homeworld: "Jakku",
    hp: 150,
    atck1: function(){
        var thisNotYetDefind;
    }
};

var playerFinn = {
    name: "Finn",
    gender: "Male",
    affiliation: "Resistance",
    homeworld: "Artorias",
    hp: 200,
    hp: 150,
    atck1: function(){
        var thisNotYetDefind;
    }
};

var playerPhasma = {
    name: "Captain Phasma",
    gender: "Female",
    affiliation: "First Order",
    homeworld: "Parnassos",
    hp: 300,
    hp: 150,
    atck1: function(){
        var thisNotYetDefind;
    }
};

var playerSnoke = {
    name: "Supreme Leader Snoke",
    gender: "Male",
    affiliation: "First Order",
    homeworld: "Unknown",
    hp: 400,
    hp: 150,
    atck1: function(){
        var thisNotYetDefind;
    }
};

// Hover effects over Rey and Finn including logos

$("#reyPlayer").mouseover(function(){
    $(this).css("border", "4px solid red");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});
$("#reyLogo").mouseover(function(){
    $(this).css("border", "4px solid red");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});

$("#finnPlayer").mouseover(function(){
    $(this).css("border", "4px solid red");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});
$("#finnLogo").mouseover(function(){
    $(this).css("border", "4px solid red");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});

// Hover effeects over Phasma and Snoke

$("#capPlayer").mouseover(function(){
    $(this).css("border", "4px solid black");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});
$("#capLogo").mouseover(function(){
    $(this).css("border", "4px solid black");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});

$("#snokePlayer").mouseover(function(){
    $(this).css("border", "4px solid black");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});
$("#snokeLogo").mouseover(function(){
    $(this).css("border", "4px solid black");
    $(this).mouseout(function(){
        $(this).css("border", "none")
    });
});


$("#reyPlayer").on("click", function(){
    $("#fightCard").append('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">');
    $("#fightCard").append('<div class="card-body">');
    $("#fightCard").append('<h3 class="card-text">Rey</h3>');
    $("#fightCard").append('<h4>Gender: Female</h4>');
    $("#fightCard").append('<h4>Affiliation: Resistance<h4>');
    $("#fightCard").append('<h4> Homeworld: Jakku</h4>');
    $("#fightCard").append('<h4>HP: 150</h4>');
    break;
});

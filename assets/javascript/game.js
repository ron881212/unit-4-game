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

// Displays Rey info when you click on her

$("#reyPlayer").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 150</h4>');
});

// Displays Finn info when you click on him

$("#finnPlayer").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
});

// Displays Phasma info when you click on her

$("#capPlayer").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
});

// Displays Surpreme Leader Snoke info when you click on him

$("#snokePlayer").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
});

//Displays The Resistances info when you click on the logo

$("#reyLogo, #finnLogo").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
});

//Displays First Order info when you click on the logo

$("#capLogo, #snokeLogo").on("click", function(){
    $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
});

// Character Objects

var playerRey = {
    name: "Rey",
    gender: "Female",
    affiliation: "Resistance",
    homeworld: "Jakku",
    hp: 150,
    atck1: function () {
        var thisNotYetDefind;
    }
};

var playerFinn = {
    name: "Finn",
    gender: "Male",
    affiliation: "Resistance",
    homeworld: "Artorias",
    hp: 200,
    atck1: function () {
        var thisNotYetDefind;
    }
};

var playerPhasma = {
    name: "Captain Phasma",
    gender: "Female",
    affiliation: "First Order",
    homeworld: "Parnassos",
    hp: 300,
    atck1: function () {
        var thisNotYetDefind;
    }
};

var playerSnoke = {
    name: "Supreme Leader Snoke",
    gender: "Male",
    affiliation: "First Order",
    homeworld: "Unknown",
    hp: 400,
    atck1: function () {
        var thisNotYetDefind;
    }
};

// Hover effects over Rey and Finn including logos

$("#reyPlayer").mouseover(function () {
    $(this).css("border", "4px solid red");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});
$("#reyLogo").mouseover(function () {
    $(this).css("border", "4px solid red");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});

$("#finnPlayer").mouseover(function () {
    $(this).css("border", "4px solid red");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});
$("#finnLogo").mouseover(function () {
    $(this).css("border", "4px solid red");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});

// Hover effects over Phasma and Snoke

$("#capPlayer").mouseover(function () {
    $(this).css("border", "4px solid black");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});
$("#capLogo").mouseover(function () {
    $(this).css("border", "4px solid black");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});

$("#snokePlayer").mouseover(function () {
    $(this).css("border", "4px solid black");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});
$("#snokeLogo").mouseover(function () {
    $(this).css("border", "4px solid black");
    $(this).mouseout(function () {
        $(this).css("border", "none")
    });
});

// Displays Rey info when you click on her

$("#reyPlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 150</h4>');
});

// Displays Finn info when you click on him

$("#finnPlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
});

// Displays Phasma info when you click on her

$("#capPlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
});

// Displays Surpreme Leader Snoke info when you click on him

$("#snokePlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
});

//Displays The Resistances info when you click on the logo

$("#reyLogo, #finnLogo").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
});

//Displays First Order info when you click on the logo

$("#capLogo, #snokeLogo").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
});

//variables needed to keep track of player pogress

var stage = 0;

// Chosing Rey at the begaining of the game

$(".rey").dblclick(function () {
    if (stage === 0) {
        $(".players:not(.rey)").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".playersInHolding3").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".pickPlayer").text("You Chose Rey");
        $(".pickOpponent").text("Choose Your Opponent");
        stage++;
        if (stage === 1) {
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".finn").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
            });
            $("#reyLogo, #finnLogo").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
            });
            $(".cap").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $("#capLogo").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".cap").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
            });
            $(".logo2").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
            });
            $(".snoke").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo2").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".snokePlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
            });
            stage++;
        }
        if(stage === 2){
            $(".finnPlayer").dblclick(function(){
            stage++;
            $(".finn").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
            $(".cap").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">')
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
            });
        }
        if(stage === 2){
            $(".capPlayer").dblclick(function () {
            stage++;
            $(".cap").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">')
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
            });   
        }
        if(stage === 2){
            $(".snokePlayer").dblclick(function () {
                stage++;
                $(".snoke").css("display", "none");
                $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
                });
        }
    }
});

// Chosing Finn at the begaining of the game

$(".finn").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img     src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img   src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img     src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".playersInHolding3").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img   src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".pickPlayer").text("You Chose Finn");
        $(".pickOpponent").text("Choose Your Opponent");
        // Needed to keep Finn Character interactive 
        $(".finn").mouseover(function () {
            $(this).css("border", "4px solid red");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $(".finn").mouseover(function () {
            $(this).css("border", "4px solid red");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $("#reyLogo, #finnLogo").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
        });
        $("#finnPlayer").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
        });
        stage++;
        if (stage === 1) {
            console.log("okay");
            $(".reyPlayer").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $("#reyLogo").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".reyPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 150</h4>');
            });
            $("#capLogo").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".cap").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo2").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
            });
            $(".capPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
            });
            $("#snokeLogo").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".snoke").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".snokePlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
            });
        }
        stage++;
    }
});

// Chosing Captian Phasma at the begaining of the game

$(".cap").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding3").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".pickPlayer").text("You Chose Captian Phasma");
        $(".pickOpponent").text("Choose Your Opponent");
        // Needed to keep Captain Phasma Character interactive
        $("#capPlayer").mouseover(function () {
            $(this).css("border", "4px solid black");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $("#capLogo").mouseover(function () {
            $(this).css("border", "4px solid black");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $("#capLogo, #snokeLogo").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
        });
        $("#capPlayer").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
        });
        stage++;
        if (stage === 1) {
            console.log("made it");
            $(".snokePlayer").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo2").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".snokePlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
            });
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo1").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
            });
            $(".finnPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
            });
            $("#reyPlayer").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo1").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".reyPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 150</h4>');
            });
            stage++;
        }

    }
});

// Chosing Supreme Leader Snoke at the begaining of the game

$(".snoke").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding3").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".pickPlayer").text("You Chose Supreme Leader Snoke");
        $(".pickOpponent").text("Choose Your Opponent");

        // Needed to keep Snoke Character interactive
        $("#snokePlayer").mouseover(function () {
            $(this).css("border", "4px solid black");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $("#snokeLogo").mouseover(function () {
            $(this).css("border", "4px solid black");
            $(this).mouseout(function () {
                $(this).css("border", "none")
            });
        });
        $("#capLogo, #snokeLogo").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/logo2.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">First Order</h3>' + '<h4>The First Order is an autocratic military dictatorship. It is the canonical counterpart of the Dark Empire.<h4>');
        });
        $("#snokePlayer").on("click", function () {
            $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 400</h4>');
        });
        stage++;
        if (stage === 1) {
            console.log("2nd snoke stage");
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".finn").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo1").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/logo1.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">The Resistance</h3>' + '<h4> Resistance movement is a private paramilitary force led by General Leia Organa that opposes the First Order<h4>');
            });
            $(".finnPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 200</h4>');
            });
            $("#reyPlayer").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".logo1").mouseover(function () {
                $(this).css("border", "4px solid red");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".reyPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 150</h4>');
            });
            $("#capLogo").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".cap").mouseover(function () {
                $(this).css("border", "4px solid black");
                $(this).mouseout(function () {
                    $(this).css("border", "none")
                });
            });
            $(".capPlayer").on("click", function () {
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 300</h4>');
            });
        }
    }
});

console.log("1st stage");

// Character Objects

var playerRey = {
    name: "Rey",
    gender: "Female",
    affiliation: "Resistance",
    homeworld: "Jakku",
    counterAp: 6,
    hp: 100,
    ap: 5
};

// console.log(playerRey.ap);
var playerFinn = {
    name: "Finn",
    gender: "Male",
    affiliation: "Resistance",
    homeworld: "Artorias",
    counterAp: 5,
    hp: 120,
    ap: 6
    
};

var playerPhasma = {
    name: "Captain Phasma",
    gender: "Female",
    affiliation: "First Order",
    homeworld: "Parnassos",
    counterAp: 8,
    hp: 150,
    ap: 8
};

var playerSnoke = {
    name: "Supreme Leader Snoke",
    gender: "Male",
    affiliation: "First Order",
    homeworld: "Unknown",
    counterAp: 10,
    hp: 180,
    ap: 10
};

// Players HP is conencted to thier Badge
$(".reyHp").text(playerRey.hp);
$(".finnHp").text(playerFinn.hp);
$(".capHp").text(playerPhasma.hp);
$(".snokeHp").text(playerSnoke.hp);

// Fight function should return attack vaule

function fight(attacker, defender, defender2, attacker2){
    // If the user is Rey
    if(attacker === playerRey.hp){    
        opponHp = defender2 - (playerRey.ap = playerRey.ap + 10);
        yourHp = attacker - defender;
        playerRey.hp = yourHp;
        if(defender2 === playerFinn.hp){
            playerFinn.hp = opponHp;
        } else if(defender2 === playerPhasma.hp){
            playerPhasma.hp = opponHp;     
        } else if(defender2 === playerSnoke.hp){
            playerSnoke.hp = opponHp;}  
        $(".reyHp").text(playerRey.hp);
        $(".finnHp").text(playerFinn.hp);
        $(".capHp").text(playerPhasma.hp);
        $(".snokeHp").text(playerSnoke.hp);
        var group = [playerRey.hp, playerFinn.hp, playerPhasma.hp, playerSnoke.hp, playerRey.ap];
        return group[0,1,2,3,4];
    }
    // If the user is Finn
    if(attacker === playerFinn.hp){    
        yourHp = attacker - defender;
        opponHp = defender2 - (playerFinn.ap = playerFinn.ap + 8);
        playerFinn.hp = yourHp;
        if(defender2 === playerRey.hp){
            playerRey.hp = opponHp;
        } else if(defender2 === playerPhasma.hp){
            playerPhasma.hp = opponHp;     
        } else if(defender2 === playerSnoke.hp){
            playerSnoke.hp = opponHp;}
        $(".reyHp").text(playerRey.hp);
        $(".finnHp").text(playerFinn.hp);
        $(".capHp").text(playerPhasma.hp);
        $(".snokeHp").text(playerSnoke.hp);
        var group = [playerRey.hp, playerFinn.hp, playerPhasma.hp, playerSnoke.hp, playerFinn.ap];
        return group[0,1,2,3,4];
    }
    // If the user is Phasma
    if(attacker === playerPhasma.hp){    
        yourHp = attacker - defender;
        opponHp = defender2 - (playerPhasma.ap = playerPhasma.ap + 3);
        playerPhasma.hp = yourHp;
        if(defender2 === playerFinn.hp){
            playerFinn.hp = opponHp;
        } else if(defender2 === playerRey.hp){
            playerRey.hp = opponHp;     
        } else if(defender2 === playerSnoke.hp){
            playerSnoke.hp = opponHp;}
        $(".reyHp").text(playerRey.hp);
        $(".finnHp").text(playerFinn.hp);
        $(".capHp").text(playerPhasma.hp);
        $(".snokeHp").text(playerSnoke.hp);
        var group = [playerRey.hp, playerFinn.hp, playerPhasma.hp, playerSnoke.hp, playerPhasma.ap];
        return group[0,1,2,3,4];
    }
    // If the user is Snoke
    if(attacker === playerSnoke.hp){    
        yourHp = attacker - defender;
        opponHp = defender2 - (playerSnoke.ap = playerSnoke.ap);
        playerSnoke.hp = yourHp;
        if(defender2 === playerFinn.hp){
            playerFinn.hp = opponHp;
        } else if(defender2 === playerPhasma.hp){
            playerPhasma.hp = opponHp;     
        } else if(defender2 === playerRey.hp){
            playerRey.hp = opponHp;}
        $(".reyHp").text(playerRey.hp);
        $(".finnHp").text(playerFinn.hp);
        $(".capHp").text(playerPhasma.hp);
        $(".snokeHp").text(playerSnoke.hp);
        var group = [playerRey.hp, playerFinn.hp, playerPhasma.hp, playerSnoke.hp, playerSnoke.ap];
        return group[0,1,2,3,4];
    }

}

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
    $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 100</h4>');
});

// Displays Finn info when you click on him

$("#finnPlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 120</h4>');
});

// Displays Phasma info when you click on her

$("#capPlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 150</h4>');
});

// Displays Surpreme Leader Snoke info when you click on him

$("#snokePlayer").on("click", function () {
    $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 180</h4>');
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
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 100</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 150</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 180</h4>');
            });
            stage++;
        }
        // Rey fighting Finn
        if(stage === 2){
            $(".finnPlayer").dblclick(function(){
            stage++;
            $(".finn").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
            $(".cap").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerRey.hp, playerFinn.counterAp, playerFinn.hp, playerRey.ap);
                if(playerRey.hp < 1){
                    playerRey.hp = 0;
                    $(".reyHp").text(playerRey.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text('You Won');
                } else if(playerFinn.hp < 1 && stage === 3){
                    $(".finn").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        ReyfightingCapAfterFinn();
                        ReyfightingSnokeAfterFinn();
                    }
                } 
                
            });
            });
        }
        // Rey fighing Captain Phasma
        if(stage === 2){
            $(".capPlayer").dblclick(function () {
            stage++;
            $(".cap").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
            $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
            fight(playerRey.hp, playerPhasma.counterAp, playerPhasma.hp, playerRey.ap);
            if(playerRey.hp < 1){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && stage === 3){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 4){
                    ReyfightingFinnAfterCap();
                    ReyfightingSnokeAfterCap();
                }
                
            }
            });   
            });   
        }
        // Rey fighting Snoke
        if(stage === 2){
            $(".snokePlayer").dblclick(function () {
                stage++;
                $(".snoke").css("display", "none");
                $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
                $(".finn").css("display", "none");
                $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
                $(".cap").css("display", "none");
                $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
                $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>'); $(".fightButton").removeClass("disabled");
                $(".fightButton").on("click", function(){
                fight(playerRey.hp, playerSnoke.counterAp, playerSnoke.hp, playerRey.ap);
                if(playerRey.hp < 1){
                    playerRey.hp = 0;
                    $(".reyHp").text(playerRey.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerSnoke.hp < 1 && stage === 3){
                    $(".snoke").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        ReyfightingFinnAfterSnoke();
                        ReyfightingCapAfterSnoke();
                    }
                }
                });
            });
        }
    }
    
});


// Chosing Finn at the begaining of the game

$(".finn").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">'+'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".playersInHolding3").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' +'<img   src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".pickPlayer").text("You Chose Finn");
        $(".pickOpponent").text("Choose Your Opponent");
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 100</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 150</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 180</h4>');
            });
            stage++;
        }
        // Finn fighting Rey
        if(stage === 2){
            $(".reyPlayer").dblclick(function(){
            stage++;
            $(".rey").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
            $(".cap").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">'+'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey  Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerFinn.hp, playerRey.counterAp, playerRey.hp, playerFinn.ap);
                if(playerFinn.hp < 1){
                    playerFinn.hp = 0;
                    $(".finnHp").text(playerFinn.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerRey.hp < 1 && stage === 3){
                    $(".rey").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4)
                    finnFightingCapAfterRey();
                    finnFightingSnokeAfterRey();
                }
                });
            
            });
        }
        // Finn fighting Phasma
        if(stage === 2){
            $(".capPlayer").dblclick(function () {
            stage++;
            $(".cap").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".rey").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerFinn.hp, playerPhasma.counterAp, playerPhasma.hp, playerFinn.ap);
                if(playerFinn.hp < 1){
                    playerFinn.hp = 0;
                    $(".finnHp").text(playerFinn.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerPhasma.hp < 1 && stage === 3){
                    $(".cap").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        finnFightingReyAfterCap();
                        finnFightingSnokeAfterCap();
                    } 
                }
                });
            });   
        }
        // Finn fighting Snoke
        if(stage === 2){
            $(".snokePlayer").dblclick(function () {
                stage++;
                $(".snoke").css("display", "none");
                $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
                $(".cap").css("display", "none");
                $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
                $(".rey").css("display", "none");
                $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
                $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
                $(".fightButton").removeClass("disabled");
                $(".fightButton").on("click", function(){
                    fight(playerFinn.hp, playerSnoke.counterAp, playerSnoke.hp, playerFinn.ap);
                    if(playerFinn.hp < 1){
                        playerFinn.hp = 0;
                        $(".finnHp").text(playerFinn.hp);
                        $(".fightButton").addClass('disabled');
                        $(".fightButton").text("Game Over");
                    } else if(playerSnoke.hp < 1 && stage === 3){
                        $(".snoke").css("display", "none");
                        $(".fightButton").addClass('disabled');
                        $(".fightButton").text("Choose next opponent");
                        stage++;
                        if(stage === 4){
                            finnFightingCapAfterSnoke();
                            finnFightingReyAfterSnoke();
                        }
                    }
                });
            });
        }
    }
});

// Chosing Captian Phasma at the begaining of the game

$(".cap").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding3").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".pickPlayer").text("You Chose Captian Phasma");
        $(".pickOpponent").text("Choose Your Opponent");
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/snoke.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Surpreme Leader Snoke</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Unknown</h4>' + '<h4>HP: 180</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 120</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 100</h4>');
            });
            stage++;
        }
        // Phasma fighting Rey
        if(stage === 2){
            $(".reyPlayer").dblclick(function(){
            stage++;
            $(".rey").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">'); 
            $(".cap").css("display", "none");
            $(".playersAtStart1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerPhasma.hp, playerRey.counterAp, playerRey.hp, playerPhasma.ap);
                if(playerPhasma.hp < 1){
                    playerPhasma.hp = 0;
                    $(".capHp").text(playerPhasma.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerRey.hp < 1 && stage === 3){
                    $(".rey").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        capFightingFinnAfterRey();
                        capFightingSnokeAfterRey();
                    }    
                }
            });
            });
        }
        // Phasma fighting Finn
        if(stage === 2){
            $(".finnPlayer").dblclick(function () {
            stage++;
            $(".finn").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
            $(".rey").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
            $(".snoke").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
            $(".cap").css("display", "none");
            $(".playersAtStart1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerPhasma.hp, playerFinn.counterAp, playerFinn.hp, playerPhasma.ap);
                if(playerPhasma.hp < 1){
                    playerPhasma.hp = 0;
                    $(".capHp").text(playerPhasma.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerFinn.hp < 1 && stage === 3){
                    $(".finn").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        capFightingReyAfterFinn();
                        capFightingSnokeAfterFinn();
                    } 
                }
            });
            });   
        }
        // Phasma fighting Snoke
        if(stage === 2){
            $(".snokePlayer").dblclick(function () {
                stage++;
                $(".snoke").css("display", "none");
                $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
                $(".rey").css("display", "none");
                $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer"  id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
                $(".finn").css("display", "none");
                $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
                $(".fightButton").removeClass("disabled");
                $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
                $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerPhasma.hp, playerSnoke.counterAp, playerSnoke.hp, playerPhasma.ap);
                if(playerPhasma.hp < 1){
                    playerPhasma.hp = 0;
                    $(".capHp").text(playerPhasma.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerSnoke.hp < 1 && stage === 3){
                    $(".snoke").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        capFightingReyAfterSnoke();
                        capFightingFinnAfterSnoke();
                    }
                }
            });
            });
        }

    }
});

// Chosing Supreme Leader Snoke at the begaining of the game

$(".snoke").dblclick(function () {
    if (stage === 0) {
        $(".players").css("display", "none");
        $(".playersAtStart1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".playersInHolding3").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".pickPlayer").text("You Chose Supreme Leader Snoke");
        $(".pickOpponent").text("Choose Your Opponent");
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/finn.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Finn</h3>' + '<h4>Gender: Male</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Artorias</h4>' + '<h4>HP: 120</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/rey.png" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Rey</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: Resistance<h4>' + '<h4> Homeworld: Jakku</h4>' + '<h4>HP: 100</h4>');
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
                $("#fightCard").html('<img class="card-img-top" src="assets/images/captain_phasma.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Captain Phasma</h3>' + '<h4>Gender: Female</h4>' + '<h4>Affiliation: First Order<h4>' + '<h4> Homeworld: Parnassos</h4>' + '<h4>HP: 180</h4>');
            });
            stage++;
        }
        // Snoke fighting Rey 
        if(stage === 2){
            $(".reyPlayer").dblclick(function(){
            stage++;
            $(".rey").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
            $(".cap").css("display", "none");
            $(".snoke").css("display", "none");
            $(".playersAtStart1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">')
            $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">')
            $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">')
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerSnoke.hp, playerRey.counterAp, playerRey.hp, playerSnoke.ap);
                if(playerSnoke.hp < 1){
                    playerSnoke.hp = 0;
                    $(".snokeHp").text(playerSnoke.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerRey.hp < 1 && stage === 3){
                    $(".rey").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        SnokefightingFinnAfterRey();
                        snokeFightingCapAfterRey();
                    }
                }
            });
            });
        }
        // Snoke fighting Finn
        if(stage === 2){
            $(".finnPlayer").dblclick(function () {
            stage++;
            $(".finn").css("display", "none");
            $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">')
            $(".cap").css("display", "none");
            $(".playersInHolding2").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
            $(".rey").css("display", "none");
            $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
            $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
            $(".fightButton").removeClass("disabled");
            $(".fightButton").on("click", function(){
                fight(playerSnoke.hp, playerFinn.counterAp, playerFinn.hp, playerSnoke.ap);
                if(playerSnoke.hp < 1){
                    playerSnoke.hp = 0;
                    $(".snokeHp").text(playerSnoke.hp);
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Game Over");
                } else if(playerFinn.hp < 1 && stage === 3){
                    $(".finn").css("display", "none");
                    $(".fightButton").addClass('disabled');
                    $(".fightButton").text("Choose next opponent");
                    stage++;
                    if(stage === 4){
                        snokeFightingReyAfterFinn();
                        snokeFightingCapAfterFinn();
                    }
                }
            });
            });   
        }
        // Snoke fighting Phasma 
        if(stage === 2){
            $(".capPlayer").dblclick(function () {
                stage++;
                $(".cap").css("display", "none");
                $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">')
                $(".rey").css("display", "none");
                $(".playersInHolding1").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer"  id="reyPlayer">'+'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
                $(".finn").css("display", "none");
                $(".playersInHolding2").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
                $(".fightButton").removeClass("disabled");
                $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
                $(".fightButton").removeClass("disabled");
                $(".fightButton").on("click", function(){
                    fight(playerSnoke.hp, playerPhasma.counterAp, playerPhasma.hp, playerSnoke.ap);
                    if(playerSnoke.hp < 1){
                        playerSnoke.hp = 0;
                        $(".snokeHp").text(playerSnoke.hp);
                        $(".fightButton").addClass('disabled');
                        $(".fightButton").text("Game Over");
                    } else if(playerPhasma.hp < 1 && stage === 3){
                        $(".cap").css("display", "none");
                        $(".fightButton").addClass('disabled');
                        $(".fightButton").text("Choose next opponent");
                        stage++;
                        if(stage === 4){
                            snokeFightingReyAfterCap();
                            snokeFightingFinnAfterCap();
                        }
                    }
                });
            });
        }
    }
});

console.log("1st stage");

// All Rey fights

function ReyfightingFinnAfterSnoke(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".cap").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">'+'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerPhasma.hp < 1){
            $(".cap").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerRey.hp, playerFinn.counterAp, playerFinn.hp, playerRey.ap);
            if(playerRey.hp < 1){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    ReyfightingCapAfterSnoke();
                }
            } 
        });
    });
}

function ReyfightingCapAfterSnoke(){
    $(".capPlayer").dblclick(function () {
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerRey.hp, playerPhasma.counterAp, playerPhasma.hp, playerRey.ap);
        if(playerRey.hp < 1){
            playerRey.hp = 0;
            $(".reyHp").text(playerRey.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
            $(".cap").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerPhasma.hp < 1 && stage === 4){
            playerPhasma.hp = 0;
            $(".capHp").text(playerPhasma.hp);
            $(".cap").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent");   
            stage++;
            if(stage === 5){
                ReyfightingFinnAfterSnoke();
            }     
        } 
        });   
    });   
}

function ReyfightingFinnAfterCap(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 5 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerRey.hp, playerFinn.counterAp, playerFinn.hp, playerRey.ap);
            if(playerRey.hp < 1){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    ReyfightingSnokeAfterCap();
                }
            } 
        });
    });
}

function ReyfightingSnokeAfterCap(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerRey.hp, playerSnoke.counterAp, playerSnoke.hp, playerRey.ap);
        if(playerRey.hp < 1){
            playerRey.hp = 0;
            $(".reyHp").text(playerRey.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
            $(".cap").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerSnoke.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent");      
            stage++;
            if(stage === 5){
                ReyfightingFinnAfterCap();
            }  
        } 
        });   
    });   
}

function ReyfightingCapAfterFinn(){
    $(".capPlayer").dblclick(function(){
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerRey.hp, playerPhasma.counterAp, playerPhasma.hp, playerRey.ap);
            if(playerRey.hp < 1){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerPhasma.hp < 1 && stage === 4){
                playerPhasma.hp = 0;
                $(".capHp").text(playerFinn.hp);
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    ReyfightingSnokeAfterFinn();
                }
            } 
        });
    });
}

function ReyfightingSnokeAfterFinn(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Rey Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerRey.hp, playerSnoke.counterAp, playerSnoke.hp, playerRey.ap);
        if(playerRey.hp < 1){
            playerRey.hp = 0;
            $(".reyHp").text(playerRey.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerPhasma.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent"); 
            stage++;  
            if(stage === 5){
                ReyfightingCapAfterFinn();
            }  
        } 
        });   
    });   
}

// All Finn fights

function finnFightingCapAfterRey(){
    $(".capPlayer").dblclick(function(){
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerFinn.hp, playerPhasma.counterAp, playerPhasma.hp, playerFinn.ap);
            if(playerFinn.hp < 1){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerPhasma.hp < 1 && stage === 4){
                playerPhasma.hp = 0;
                $(".capHp").text(playerFinn.hp);
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    finnFightingSnokeAfterRey();
                }
            } 
        });
    });
}

function finnFightingSnokeAfterRey(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 5 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerFinn.hp, playerSnoke.counterAp, playerSnoke.hp, playerFinn.ap);
        if(playerFinn.hp < 1){
            playerFinn.hp = 0;
            $(".finnHp").text(playerFinn.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerPhasma.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent"); 
            stage++;
            if(stage === 5){
                finnFightingCapAfterRey();
            }       
        } 
        });   
    });   
}

function finnFightingReyAfterCap(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerFinn.hp, playerRey.counterAp, playerRey.hp, playerFinn.ap);
            if(playerFinn.hp < 1){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                console.log("rey gone")
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    finnFightingSnokeAfterCap();
                }
            } 
        });
    });
}

function finnFightingSnokeAfterCap(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerFinn.hp, playerSnoke.counterAp, playerSnoke.hp, playerFinn.ap);
        if(playerFinn.hp < 1){
            playerFinn.hp = 0;
            $(".finnHp").text(playerFinn.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerSnoke.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent");   
            stage++;
            if(stage === 5){
                finnFightingReyAfterCap();
            }     
        } 
        });   
    });   
}

function finnFightingCapAfterSnoke(){
    $(".capPlayer").dblclick(function(){
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Phasma Deals 8 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerRey.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerFinn.hp, playerPhasma.counterAp, playerPhasma.hp, playerFinn.ap);
            if(playerFinn.hp < 1){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerPhasma.hp < 1 && stage === 4){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    finnFightingReyAfterSnoke();
                }
            } 
        });
    });
}

function finnFightingReyAfterSnoke(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".cap").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Finn Deals 6 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerPhasma.hp < 1){
            $(".cap").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerFinn.hp, playerRey.counterAp, playerRey.hp, playerFinn.ap);
            if(playerFinn.hp < 1){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage == 5){
                    finnFightingCapAfterSnoke();
                }
            } 
        });
    });
}

// All Phasma fights

function capFightingFinnAfterRey(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerPhasma.hp, playerFinn.counterAp, playerFinn.hp, playerPhasma.ap);
            if(playerPhasma.hp < 1){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerRey.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    capFightingSnokeAfterRey();
                }
            } 
        });
    });
}

function capFightingSnokeAfterRey(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerPhasma.hp, playerSnoke.counterAp, playerSnoke.hp, playerPhasma.ap);
        if(playerPhasma.hp < 1){
            playerPhasma.hp = 0;
            $(".capHp").text(playerPhasma.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerSnoke.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent");   
            stage++;
            if(stage === 5){
                capFightingFinnAfterRey();
            }     
        } 
        });   
    });   
}

function capFightingReyAfterFinn(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".snoke").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerPhasma.hp, playerRey.counterAp, playerRey.hp, playerPhasma.ap);
            if(playerPhasma.hp < 1){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    capFightingSnokeAfterFinn();
                }
            } 
        });
    });
}

function capFightingSnokeAfterFinn(){
    $(".snokePlayer").dblclick(function () {
        $(".snoke").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/snoke.jpg" alt="snoke" class="img-thumbnail rounded-circle snoke players player-img snokePlayer" id="snokePlayer">' + '<span class="badge badge-pill badge-dark snoke players snokeHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo snoke players logo2" id="snokeLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        $(".fightButton").on("click", function(){
        fight(playerPhasma.hp, playerSnoke.counterAp, playerSnoke.hp, playerPhasma.ap);
        if(playerPhasma.hp < 1){
            playerPhasma.hp = 0;
            $(".capHp").text(playerPhasma.hp);
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Game Over");
        } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text('You Won');
        } else if(playerSnoke.hp < 1 && stage === 4){
            playerSnoke.hp = 0;
            $(".snokeHp").text(playerSnoke.hp);
            $(".snoke").css("display", "none");
            $(".fightButton").addClass('disabled');
            $(".fightButton").text("Choose next opponent");   
            stage++;
            if(stage === 5){
                capFightingReyAfterFinn();
            }     
        } 
        });   
    });   
}

function capFightingReyAfterSnoke(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".finn").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerFinn.hp < 1){
            $(".finn").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerPhasma.hp, playerRey.counterAp, playerRey.hp, playerPhasma.ap);
            if(playerPhasma.hp < 1){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerSnoke.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                console.log("rey gone")
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    capFightingFinnAfterSnoke();
                }
            } 
        });
    });
}

function capFightingFinnAfterSnoke(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Phasma Deals 8 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Snoke Deals 10 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerRey.hp < 1){
            $(".rey").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerPhasma.hp, playerFinn.counterAp, playerFinn.hp, playerPhasma.ap);
            if(playerPhasma.hp < 1){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerRey.hp < 1 && playerFinn.hp < 1 && playerSnoke.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    capFightingReyAfterSnoke();
                }
            } 
        });
    });
}

// All Snoke fights

function SnokefightingFinnAfterRey(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $(".cap").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerPhasma.hp < 1){
            $(".cap").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerFinn.counterAp, playerFinn.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerRey.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    snokeFightingCapAfterRey();
                }
            } 
        });
    });
}

function snokeFightingCapAfterRey(){
    $(".capPlayer").dblclick(function(){
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">180</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $(".finn").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerFinn.hp < 1){
            $(".finn").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerPhasma.counterAp, playerPhasma.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerRey.hp < 1){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerPhasma.hp < 1 && stage === 4){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    SnokefightingFinnAfterRey();
                }
            } 
        });
    });
}

function snokeFightingReyAfterFinn(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".cap").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerPhasma.hp < 1){
            $(".cap").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerRey.counterAp, playerRey.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerPhasma.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                console.log("rey gone")
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    snokeFightingCapAfterFinn();
                }
            } 
        });
    });
}

function snokeFightingCapAfterFinn(){
    $(".capPlayer").dblclick(function(){
        $(".cap").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/captain_phasma.jpg" alt="phasma" class="img-thumbnail rounded-circle cap players player-img capPlayer" id="capPlayer">' + '<span class="badge badge-pill badge-dark cap players capHp">150</span>' +'<img src="assets/images/logo2.jpg" alt="logo2" class="img-thumbnail rounded-circle logo cap players logo2" id="capLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerRey.hp < 1){
            $(".rey").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerPhasma.counterAp, playerPhasma.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerPhasma.hp < 1 && playerFinn.hp < 1 && playerRey.hp < 1){
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerPhasma.hp < 1 && stage === 4){
                playerPhasma.hp = 0;
                $(".capHp").text(playerPhasma.hp);
                $(".cap").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    snokeFightingReyAfterFinn();
                }
            } 
        });
    });
}

function snokeFightingReyAfterCap(){
    $(".reyPlayer").dblclick(function(){
        $(".rey").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/rey.png" alt="rey" class="img-thumbnail rounded-circle rey players player-img reyPlayer" id="reyPlayer">' + '<span class="badge badge-pill badge-danger rey players reyHp">100</span>' +'<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo rey players logo1" id="reyLogo">');
        $(".finn").css("display", "none");
        $(".playersInHolding1").html('<img src="assets/images/finn.jpg" alt="finn" class="img-thumbnail rounded-circle finn players player-img finnPlayer" id="finnPlayer">' + '<img src="assets/images/logo1.jpg" alt="logo1" class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Rey Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerFinn.hp < 1){
            $(".finn").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerRey.counterAp, playerRey.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerFinn.hp < 1 && playerRey.hp < 1 && playerPhasma.hp < 1){
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerRey.hp < 1 && stage === 4){
                playerRey.hp = 0;
                $(".reyHp").text(playerRey.hp);
                $(".rey").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    snokeFightingFinnAfterCap();
                }
            } 
        });
    });
}

function snokeFightingFinnAfterCap(){
    $(".finnPlayer").dblclick(function(){
        $(".finn").css("display", "none");
        $(".fightingArea").html('<img src="assets/images/finn.jpg" alt="finn"  class="img-thumbnail rounded-circle finn players player-img finnPlayer"  id="finnPlayer">' + '<span class="badge badge-pill badge-danger finn players finnHp">120</span>' +'<img src="assets/images/logo1.jpg" alt="logo1"  class="img-thumbnail rounded-circle logo finn players logo1" id="finnLogo">');
        $("#fightCard").html('<img class="card-img-top" src="assets/images/duel.jpg" alt="logo img">' + '<div class="card-body">' + '<h3 class="card-text">Fight!!!</h3>' + '<h4>Snoke Deals 10 Damage</h4>' + '<h4>Your Damage Increases</h4>' +  '<h4>With Each Blow Landed</h4>' + '<h4>Finn Deals 6 Damage<h4>' + '<h4>Fight Stats Here</h4>');
        $(".fightButton").removeClass("disabled");
        $(".fightButton").text("Attack");
        if(playerRey.hp < 1){
            $(".rey").css("display", "none");
        }
        $(".fightButton").on("click", function(){
            fight(playerSnoke.hp, playerFinn.counterAp, playerFinn.hp, playerSnoke.ap);
            if(playerSnoke.hp < 1){
                playerSnoke.hp = 0;
                $(".snokeHp").text(playerSnoke.hp);
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Game Over");
            } else if(playerRey.hp < 1 && playerFinn.hp < 1 && playerPhasma.hp < 1){
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text('You Won');
            } else if(playerFinn.hp < 1 && stage === 4){
                playerFinn.hp = 0;
                $(".finnHp").text(playerFinn.hp);
                $(".finn").css("display", "none");
                $(".fightButton").addClass('disabled');
                $(".fightButton").text("Choose next opponent");
                stage++;
                if(stage === 5){
                    snokeFightingReyAfterCap();
                }
            } 
        });
    });
}
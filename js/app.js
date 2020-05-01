
// je cree mon modure pour ranger mon code spageties a l'interieur

var app = {
    
    askNumberDies : document.querySelector("#dice-number-input"),

    init : function() {
         // je place le tout dans une init function 
        // je demande a l'utilisateur un nombre de des
        // callback : de "handlesNumberChange" (si je najoute pas les "()"" celui ci est pas executer, cette metode est en attente)
           app.askNumberDies.addEventListener('input', app.handlesNumberChange);

        var bouttonplay = document.querySelector('#play');
            bouttonplay.addEventListener("click", app.play);

    },

    handlesNumberChange: function() {
        /* cette fonction permet de modifier le output a coter de ma batte pour choisire les de */
        
        // je recupere la valeure de "valueAsNumber " je place dams ma variable Valeur
        var valeur = app.askNumberDies.valueAsNumber;


        // je recupere mon dice number du output que je place dans ma variable 
        var output = document.querySelector("#dice-number");

        // je remplace la ligne Value de mon objet output par la variable definie plus haut "valeur"
        output.value = valeur;

           console.log(); 
    },

    //----------
    play : function() {
    //je clear avant chanque lancement de partis
        app.clearAll();
        
        var ask = app.askNumberDies.value;
    
        // je relance la fonction createDie dans ma boucle.
         for (let i = 1; i <= ask; i++) {
            app.creatDie("player"); 
            app.creatDie("dealer"); 
        }
    },

    //----------

    // je cree ma function pour clear tout la partis d'avant 
    clearAll : function() {
      var board = document.querySelectorAll(".board")
      for(var index= 0; index < board.length; index++){
        // je vide chaque board 
        board[index].innerHTML = "";
        // on le redefinit comme etant une chaine vide... ce qui la netoie 
      }
    },
    //ici je recupere une fonction qui tire un nombres  entre
    // un  min et un max
    /*attention*/
    // => une fonction dois rester ouvert a d'autre nombre c'est
    // pourquoi on laisse les parametre libre
     getRandom : function (minValue, maxValue) {
        return Math.round(Math.random() * (maxValue - minValue)) + minValue;
    },


    //-----------------

    creatDie : function (target) {
        // je cree une div que je stock dans la variable *var die
    //(pour le moment elle comporte rien c'est juste une Div)
    var die = document.createElement('div');
    
    
    // je lui ajoute une class 
    die.className = "dice";
    
    // recupere le id: player deja en place dans html 
    // *ceci equivaut a document.getElementById("#" + target);
    var player = document.querySelector("#" + target);
    
      //  pour Rappel "querySelector" => utilise toujours 
      // les selecteur CSS"
      //  querySelectorAll => utilise aussi un selecteur CSS mais  // celui ci Retourne toujours un Array.
    
    // je rajoute le De a mon id player
    player.appendChild(die);
    
    
    // j'appel ma fonction qui tire un de et je recupere la Valeur //retourner.  
    //je range la valeur dans ma variable ci dessou
     var dieValue = app.getRandom(1, 6);
    
    // cree le decalage du sprite pour afficher le De via 
    //le chiffre qui a etait tirer par na fonction dieValue
    
    var lagBackground = ((dieValue - 1) * -100);
    
     die.style.backgroundPositionX = lagBackground + "px";
    
    
    },
    //--------------------------

  
}


app.init();
// 10. Créez une fonction "say_my_name" qui prend en paramètre une chaine de caractères et qui affiche "My name is [name] !" où "[name]" est remplacé par la variable passée en paramètre. Il doit être possible d’appeler la fonction sans paramètre auquel cas elle affichera "My name is Toto !"

function say_my_name(x){

    if (x != undefined){

        console.log("My name is " + x + " !");

    }
    else{
        console.log("My name is Toto !")
    }

}

say_my_name("Asmaa");
say_my_name();
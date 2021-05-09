function uselessGame(){

    for (let x = 0; x <= 10; x++) {

        let result = window.prompt("Hello bro, guess the mystery number :')  you have 10 times  ")
        
        if ( result > 100 ) {
            alert("Your result is too big");
        }

        else if ( result < 100 ) {
            alert("Your result is too small");
        }

        else if (isNaN(result)) {
           alert("Writte a Number you piece of shit");
        }

     
        else {
           return alert("Congratulation !! you got the good number !! :DD ");
        }

    }

    alert("You loose, little sh.. ! ");

}

uselessGame();




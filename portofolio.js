const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=900) {
        header.classList.add('navbarDark');

    }
    else {
        header.classList.remove('navbarDark');
    }
}

function kontrollo(){

    var emri = document.getElementById("emri").value;
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;



    if(emri == ""){      
        
        document.getElementById("p1").innerHTML= "Ju lutem plotesoni emrin!*";

        return false;
    }

    else{
        document.getElementById("p1").innerHTML= "";
    }

    if(mail == ""){      
        
        document.getElementById("p2").innerHTML= "Ju lutem plotesoni emailin!*";

        return false;
    }

    else{
        document.getElementById("p2").innerHTML= "";
    }

    if(pass == ""){      
        
        document.getElementById("p3").innerHTML= "Ju lutem plotesoni passwordin!*";

        return false;
    }

    else{
        document.getElementById("p3").innerHTML= "";
    }

    if(pass.length<=8){

        document.getElementById("p3").innerHTML= "Password duhet te permbaje 8 karaktere!*";

        return false;


    }

    var a =/[a-z]/;

     if( pass.search(a) == -1 ){

        document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje shkronje te vogel!*";

        return false;


    }

    var a =/[A-Z]/;

     if( pass.search(a) == -1 ){

     document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje shkronje te madhe!*";

     return false;


     }

    var a =/[0-9]/;

      if( pass.search(a) == -1 ){

   document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje numer!*";

   return false;


     }

     var a =/[@]/;

     if( pass.search(a) == -1 ){ 

      document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje karakter special!*";

     return false;


    }

    document.getElementById("p3").innerHTML= "<br>Te dhenat u derguan me sukses!";
    document.getElementById("p3").style.color="green";
    return true;
}


function display1(){

    document.getElementById("l1").style.visibility= "visible";
    document.querySelector('#deldel').style.visibility = "hidden";
}

function display2(){

    document.getElementById("l2").style.visibility= "visible";
    document.querySelector('#ledled').style.visibility = "hidden";
}

function display3(){

    document.getElementById("l3").style.visibility= "visible";
    document.querySelector('#dledle').style.visibility = "hidden";
}

function kliko(){

    window.alert("Yes , thats me!");
}

// const header = document.querySelector('.navbar');

// window.onscroll = function() {
//     var top = window.scrollY;
//     if(top >=900) {
//         header.classList.add('navbarDark');

//     }
//     else {
//         header.classList.remove('navbarDark');
//     }
// }

// function kontrollo(){

//     var emri = document.getElementById("emri").value;
//     var pass = document.getElementById("pass").value;
//     var mail = document.getElementById("mail").value;



//     if(emri == ""){      
        
//         document.getElementById("p1").innerHTML= "Ju lutem plotesoni emrin!*";

//         return false;
//     }

//     else{
//         document.getElementById("p1").innerHTML= "";
//     }

//     if(mail == ""){      
        
//         document.getElementById("p2").innerHTML= "Ju lutem plotesoni emailin!*";

//         return false;
//     }

//     else{
//         document.getElementById("p2").innerHTML= "";
//     }

//     if(pass == ""){      
        
//         document.getElementById("p3").innerHTML= "Ju lutem plotesoni passwordin!*";

//         return false;
//     }

//     else{
//         document.getElementById("p3").innerHTML= "";
//     }

//     if(pass.length<=8){

//         document.getElementById("p3").innerHTML= "Password duhet te permbaje 8 karaktere!*";

//         return false;


//     }

//     var a =/[a-z]/;

//      if( pass.search(a) == -1 ){

//         document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje shkronje te vogel!*";

//         return false;


//     }

//     var a =/[A-Z]/;

//      if( pass.search(a) == -1 ){

//      document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje shkronje te madhe!*";

//      return false;


//      }

//     var a =/[0-9]/;

//       if( pass.search(a) == -1 ){

//    document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje numer!*";

//    return false;


//      }

//      var a =/[@]/;

//      if( pass.search(a) == -1 ){ 

//       document.getElementById("p3").innerHTML= "Password duhet te permbaje te pakten nje karakter special!*";

//      return false;


//     }

//     document.getElementById("p3").innerHTML= "<br>Te dhenat u derguan me sukses!";
//     document.getElementById("p3").style.color="green";
//     return true;
// }


//clients
// Select the first element with a class of "card"
// var div1 = document.querySelector(".card");

// // Add a scroll event listener to the window object
// window.addEventListener("scroll", ndrysho);

// function ndrysho() {
//     // Get the height of the viewport
//     var lartesia = window.innerHeight;
//     // Get the position of the div1 element relative to the viewport
//     var lartesiadiv1 = div1.getBoundingClientRect().top;
  
//     // If the top position of div1 is less than or equal to the height of the viewport minus 200 pixels
//     if (lartesiadiv1 <= 600) {
//       // Set an interval to animate the number counter
//       var koha = setInterval(numra, 80);
//       var nr = 0;
  
//       function numra() {
//         nr++;
//         // Set the text content of an element with an id of "numri1"
//         document.getElementById("numri1").textContent = nr;
  
//         // If nr reaches the value of 36, clear the interval
//         if (nr == 36) {
//           clearInterval(koha);
//         }
//       }
//     }
//   }
  




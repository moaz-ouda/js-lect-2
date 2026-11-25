





/*document.addEventListener("copy" , function(){
    let url = window . location.href;
    let selectedtext = window.getSelection().toString();
    let fulltext = selectedtext + "\n read more : " + url ; 
    
    
    if(fulltext.length <= 200){

        navigator . clipboard .writeText(fulltext);
        console.log(fulltext);

    }else if(fulltext.length >200 ){

        navigator.clipboard.writeText( " you cant select more than 200 letter ");

        console.log(" you cant select more than 200 letter ");
        
    }

});*/

let name1 = prompt("enter your name : ");
let email = prompt("enter your email : ");
let age = prompt("enter your age : ");
let num = age*365 ; 
const information = document.getElementById(" forma ") ; 
var info = name1 + "\n" + email + "\n" +  age  ;

if( num >= 10000 ){

    console.log("your age more than 10000 days : \n  "+info);
    information.textContent= ("your age more than 10000 days :  " + " \n   " + info + "  your  " +num+ "  days" ) ;
}else{
    console.log("your age less than 10000 days : \n "+info);
    information.textContent= ("your age less than 10000 days :  "  +  " \n   " + info  +  "  your  " +num+ "  days" ) ;

}

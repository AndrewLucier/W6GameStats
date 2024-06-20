// create a function to grab the form inputs and display them in the text box
function submitForm(){
    // prevent the form from actually submitting and refreshing the page
    event.preventDefault();

    // get our form inputs
    var userName =  document.getElementById("txtUserName").value;
    var weapon = doucment.getElementById("txtWeapon").value;
    var health = document.getElementById("txtHealth").value;
    var points = document.getElementById("txtPoints").value;

    // create a string to hold the information
    var output = "User Name: " + userName + "\n\n"; // \n is the newline character
    output += "Weapon: " + weapon + "\n\n";
    output += "Health/Damage: " + health + "\n\n";
    output += "Point Total: " + points;

    // add our formatted string to the textarea
    document.getElementById("txtAOutput").value = output;
}
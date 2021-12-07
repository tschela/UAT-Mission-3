function myFunction() {
    // First Name of the user
    var firstname = document.getElementById("firstname").value;
    // Last Name of the user
    var lastname = document.getElementById("lastname").value;
    // users full name
    var fullName = firstname + " " + lastname;
    //loop for number of characters
    document.getElementById("here").innerHTML = fullName;
    if (fullName.length > 20) {
        // alert name too long
        alert("Invalid name. Full name must be less than 20 letters");
    } else {
        // prompt for badge number
        var badgeNumber = prompt("Enter a three digit badge number", 3);
        //loop for badge number
        if (badgeNumber.length > 3) {
            //alert for invalid number of digits
            alert("Invalid entry. Badge number must be three digits");
        } else {
            //welcome alert
            alert("Welcome " + fullName);
        }
    }
}
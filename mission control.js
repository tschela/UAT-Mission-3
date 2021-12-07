function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var fullName = firstname + " " + lastname;
    document.getElementById("here").innerHTML = fullName;
    if (fullName.length > 20) {
        alert("Invalid name. Full name must be less than 20 letters");
    } else {
        var badgeNumber = prompt("Enter a three digit badge number", 3);
        if (badgeNumber.length > 3) {
            alert("Invalid entry. Badge number must be three digits");
        } else {
            alert("Welcome " + fullName);
        }
    }
}
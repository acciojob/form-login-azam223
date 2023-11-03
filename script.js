function getFormvalue() {
    // Get the form elements by their name attributes
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;
    
    // Display the first and last names using an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from submitting and refreshing the page
    return false;
}

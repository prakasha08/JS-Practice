var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup when cancel button is clicked
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book functionality
var addbook = document.getElementById("add-book");
addbook.addEventListener("click", function(event) {
    event.preventDefault();
    // Hide popup after adding the book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Get input values
    var booktitleinput = document.getElementById("book-title-input").value;
    var bookauthorinput = document.getElementById("book-author-input").value;
    var bookdescriptioninput = document.getElementById("book-description-input").value;

    // Create a new book container
    var container = document.querySelector(".container");
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Corrected innerHTML assignment
    div.innerHTML = `
        <h2>${booktitleinput}</h2>
        <h5>${bookauthorinput}</h5>
        <p>${bookdescriptioninput}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    container.appendChild(div);

    // Clear the input fields
    document.getElementById("book-title-input").value = '';
    document.getElementById("book-author-input").value = '';
    document.getElementById("book-description-input").value = '';

    // Add event listener to the delete button
    div.querySelector(".delete-button").addEventListener("click", function() {
        div.remove();
    });
});
function deletebook(event)
{
event.target.parentElement.remove()
}
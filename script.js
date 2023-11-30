function addComment() {
  // Get the message of the new recommendation
  let comment = document.getElementById("new_comment");
  //  Display a pop-up
  if (comment.value != null && comment.value.trim() != "") {
    console.log("New comment added");
    showPopup(true);

    

    // Create a new 'recommendation' element 
    var element = document.createElement("div");
    element.setAttribute("class","comment");
    element.innerHTML = "\<span\>&#8220;\</span\>" + comment.value + "\<span\>&#8221;\</span\>";
    
    document.getElementById("all_comments").appendChild(element); 
    
    
    comment.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
var paragraph = document.getElementById('hover-paragraph');

// Add event listeners for mouseover and mouseout

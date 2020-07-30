function newItem(){
    console.log("Inside newItem fnxn");
    // (find element with specified id, obtain value of element,)
    var input = document.getElementById ("input").value;
    console.log("input is " + input);
    var ul = document.getElementById("list");
    //make a new item in the list
    var li = document.createElement("li")
    // populate that new item with the latest input entry
    li.innerHTML = input;
    // append that new, populate list item to the existing unordered list
    document.body.appendChild(li);
    li.onclick = removeItem;
    
  } 

document.body.onkeyup = function(e){

if (e.keyCode == 13){
  console.log("'enter' clicked");   
  // document.createElement("li");
  newItem();

 //*Clear the text in the box*/
document.getElementById("input").value = " ";

  }
}

function removeItem(e){
e.target.remove();
}



// EXTRA 1 

window.onload = function(){
    document.querySelector(".blog-sidebar div:last-child li:nth-child(2)").remove();
    
    // document.querySelector(".mb-0").remove();
    
}
// EXTRA 2

let linkOff = document.getElementsByClassName("stretched-link");
console.log(linkOff);

for (let deleteItem of linkOff) {
    deleteItem.addEventListener("click", (event)=>{
        event.target.parentNode.parentNode.parentNode.remove();
    })
    
}
//EXTRA 3

let linkAuthor = document.querySelectorAll(".blog-post-meta a");

for ( let aurthorAlert of linkAuthor){
    aurthorAlert.addEventListener("mouseover", (event)=>{
        alert( event.target.innerText);
    })
}


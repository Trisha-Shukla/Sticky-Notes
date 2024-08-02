let color_text=document.getElementById("color-text").children;
let but=document.querySelector("#alert");
let container_2=document.getElementById("container2");
let notes=document.querySelector(".notes-added");
let grid=document.querySelector(".grid-added");

// console.log(container_2);
but.addEventListener("click",function(e){
let ele=document.getElementById("color-text");
let tot=grid.children;
if(ele.children[0].value===""){
    alert("Please enter a note");
    return;
}
addnotes(color_text[0].value,color_text[1].value);
color_text[0].value="";
notes.style.display="none";
removeele();
console.log(grid.children.length);

})

function addnotes(notes,color){
    grid.style.display="grid";
    let div1=document.createElement("div");
    div1.innerHTML=`<p>${notes}</p>
    <button class="button">X</button> `;
    div1.children[0].classList.add("para");
    div1.children[1].classList.add("positioning");
    div1.style.position="relative";
    div1.style.padding="10px 5px";
    div1.style.height="200px";
    grid.appendChild(div1);
    // console.log(div1);
    div1.style.backgroundColor=`${color}`;


}
function removeele(){
    let btn1=document.querySelectorAll(".button");
    // console.log(btn1);
    btn1.forEach(val=>{
        val.addEventListener("click",()=>{
            console.log(val.parentElement);
            val.parentElement.remove();
            if(grid.children.length==0){
                notes.style.display="flex";
                grid.style.display="none";
            }
        })
    })
}


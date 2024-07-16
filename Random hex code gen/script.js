const randCode = () =>{
    const randNumber = Math.floor(Math.random()*16777215);
    let initHex = "#" + randNumber.toString(16);
    let hex = initHex.toUpperCase();
    if(hex.length === 6 ){
        hex= hex + "0";
        return hex;
    }
    else{
        return hex;
    }  
}

//executed first time
// const area = document.querySelectorAll(".box");
// area.forEach(area => {
//     const hex = randCode();
//     area.querySelector(".color-area").style.backgroundColor=hex;
//     area.querySelector(".text").innerText = hex;
// })



//Executed on btn click
const colorCode = () =>{
    const colorArea = document.querySelectorAll(".box");
    colorArea.forEach(box => {
        const hex = randCode();
        box.querySelector(".color-area").style.backgroundColor=hex;
        box.querySelector(".text").innerText = hex;
    })
}

colorCode();

document.getElementById("reset").addEventListener('click',colorCode);



function copy(){
    let copyText = document.querySelectorAll(".text");

    let text = copyText.innerText;
    navigator.clipboard.writeText(text);
    console.log(text);
   
}

document.getElementById("copy").addEventListener('click',copy);
let btn=document.querySelector("button")
let i=document.querySelector("#lasti")
let div1=document.querySelector(".div3")
let h3=document.querySelector("h3")
let a=40
let b=0
btn.onclick = () => {
    a += 40;
    b+=1
    i.style.fontSize = `${a}px`;
    if(b==11){
        i.style.display = "none";
        h3.style.display="inline"

    }
}

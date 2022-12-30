
let hrtime;

function timer(){
    let hour=document.getElementById("hrs");
    let minute=document.getElementById("mins");
    let second=document.getElementById("secs");

    let tym=new Date();
    let hr= tym.getHours();
    // hr = (hr % 12) || 12;

    hrtime=hr; 
    // console.log(hrtime)
    let min=tym.getMinutes();
    let sec=tym.getSeconds();
    // console.log(hr,min,sec);
    hour.innerText= `${hr} \n hour`;
    // console.log(hour);
    minute.innerText= `${min} \n mins`;
    second.innerText= `${sec} \n secs`;


    let ampm=document.getElementById("AM_PM");

if(hr>=12){
    ampm.innerText="PM";

}
else{
    // let ampm=document.getElementById("AM_PM");
    ampm.innerText="AM";

}
// let image=document.getElementById("image")
let message=document.getElementById("sidebox");
if(hr>=00 && hr<8 ){
    message.innerText="IT'S TOO EARLY GO AND SLEEP AGAIN";
    document.getElementById("image").src = "./Component 30 – 1.svg";
    wishtext.style.fontSize="25px"
    wishtext.innerText="EARLY MORNING !!" 
}
else if(hr>=08 && hr<12 ){
    message.innerText="GRAB SOME HEALTHY BREAKFAST";
    document.getElementById("image").src = "./Component 30 – 1.svg";
    wishtext.style.fontSize="25px"
    wishtext.innerText="GOOD MORNING !! WAKE UP !!" 
}
else if(hr>=12 && hr<16 ){
    message.innerText="LET'S HAVE SOME LUNCH";
    document.getElementById("image").src = "./Group 5183.png";
    wishtext.style.fontSize="22px"
    wishtext.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
}
else if(hr>=16 && hr<20 ){
    message.innerText="STOP YAWING, GET SOME TEA..ITS JUST EVENING";
    document.getElementById("image").src = "./lunch_image.png";
    wishtext.innerText="GOOD EVENING !!";


}
else if(hr>=20 && hr<=24){
    message.innerText="close your eyes and to go sleep";
    document.getElementById("image").src = "./Group 5194.png";
    wishtext.innerText="GOOD NIGHT !!";
}

}
setInterval(function(){
    timer();
},1000);

// Alarm Button
let d=document.getElementById("dropdown");
let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");

let dropdown;
let dropdown2;
let dropdown3;
let dropdown4;
d.addEventListener("change",function(event){
const select=event.target;
const value=select.value;
 dropdown=select.selectedOptions[0].text;
console.log(dropdown);

})

d1.addEventListener("change",function(event){
    const select=event.target;
    // const value=select.value;
     dropdown2=select.selectedOptions[0].text;
    console.log(dropdown2);
})

d2.addEventListener("change",function(event){
    const select=event.target;
    // const value=select.value;
   dropdown3=select.selectedOptions[0].text;
   console.log(dropdown3);
})

d3.addEventListener("change",function(event){
    let select=event.target;
    // let value=select.value;
    dropdown4=select.selectedOptions[0].text;
})


let sa=document.getElementById("sa");
sa.addEventListener("click",function(){

    let dvalue=document.getElementById("dropdown").value
    let dvalue1=document.getElementById("d1").value
    let dvalue2=document.getElementById("d2").value
    let dvalue3=document.getElementById("d3").value


    let message=document.getElementById("sidebox");
    let wishtext1=document.getElementById("wishtext");


    let wake=document.getElementById("wktxt");
    wake.innerText= dropdown;
    let lunch=document.getElementById("ltxt");
    lunch.innerText=dropdown2;
    let nap=document.getElementById("ntxt");
    nap.innerText=dropdown3;
    let night=document.getElementById("nightxt");
    night.innerText=dropdown4;
   



    // functioning - if dropdown and live time matches
    // function imgtxtChng(){

        if(dvalue==hrtime){
            console.log(dvalue)
            console.log(hrtime)
            // message.innerText="GRAB SOME HEALTHY BREAKFAST";
            document.getElementById("image").src = "./Component 30 – 1.svg";
            wishtext1.style.fontSize="25px"
            wishtext1.innerText="GOOD MORNING !! WAKE UP !!"
            // console.log(wishtext1.innerText);
            // console.log(hrtime);
         }

         else if(dvalue1==hrtime){
            console.log(dvalue2)
            console.log(hrtime.toString())
            message.innerText="LET'S HAVE SOME LUNCH";
            document.getElementById("image").src = "./Group 5183.png";
            wishtext.style.fontSize="22px"
            wishtext.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
            console.log(hrtime);

         }

         else if(dvalue2==hrtime){
            message.innerText="STOP YAWING, GET SOME TEA..ITS JUST EVENING";
            document.getElementById("image").src = "./lunch_image.png";
            wishtext.innerText="GOOD EVENING !!";
            console.log(hrtime);

         }

         else if(dvalue3==hrtime){
            message.innerText="close your eyes and to go sleep";
            document.getElementById("image").src = "./Group 5194.png";
            wishtext.innerText="GOOD NIGHT !!";
            console.log(hrtime);

         }

         else{
            timer();
            console.log("asdfg");
         }
    // }
    // imgtxtChng();

})


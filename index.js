
let hrtime=0;

// default image and text 
wishtext.innerText="Hye..How are you";
document.getElementById("image").src="./Derek Lunsford.jpg";


// clock
function timer(){
    let hour=document.getElementById("hrs");
    let minute=document.getElementById("mins");
    let second=document.getElementById("secs");

    let tym=new Date();
    let hr=tym.getHours();
    // hr = (hr % 12) || 12;

    hrtime=hr; 
    console.log(hrtime)
    let min=tym.getMinutes();
    let sec=tym.getSeconds();
    // console.log(hr,min,sec);
    hour.innerText= `${hr} \n hour`;
    minute.innerText= `${min} \n mins`;
    second.innerText= `${sec} \n secs`;


    let ampm=document.getElementById("AM_PM");

if(hr>=12){
    ampm.innerText="PM";

}
else{
    ampm.innerText="AM";
}


let message=document.getElementById("sidebox");
if(hr>=00 && hr<8 ){
    message.innerText="IT'S TOO EARLY GO AND SLEEP AGAIN";
    // document.getElementById("image").src = "./Component 30 – 1.svg";
    wishtext.style.fontSize="23px"
    // wishtext.innerText="EARLY MORNING !!" 
}
else if(hr>=08 && hr<12 ){
    message.innerText="GRAB SOME HEALTHY BREAKFAST";
    // document.getElementById("image").src = "./Component 30 – 1.svg";
    wishtext.style.fontSize="25px"
    // wishtext0.innerText="GOOD MORNING !! WAKE UP !!"
}
else if(hr>=12 && hr<16 ){
    message.innerText="LET'S HAVE SOME LUNCH";
    // document.getElementById("image").src = "./Group 5183.png";
    wishtext.style.fontSize="22px"
    // wishtext.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
}
else if(hr>=16 && hr<20 ){
    message.innerText="STOP YAWING, GET SOME TEA..ITS JUST EVENING";
    // document.getElementById("image").src = "./lunch_image.png";
    // wishtext.innerText="GOOD EVENING !!";


}
else if(hr>=20 && hr<=24){
    message.innerText="close your eyes and to go sleep";
    // document.getElementById("image").src = "./Group 5194.png";
    // wishtext.innerText="GOOD NIGHT !!";
}

}
setInterval(function(){
    timer()
},1000);




// Getting Values from dropdown and print inside box in right of Alarm button
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
    const value=select.value;
    console.log(value);
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
    const select=event.target;
    // let value=select.value;
    dropdown4=select.selectedOptions[0].text;
    console.log(dropdown4);

})


// Alarm Button

let sa=document.getElementById("sa");
sa.addEventListener("click",function(){


    let message=document.getElementById("sidebox");
    let wishtext1=document.getElementById("wishtext");


    let wake=document.getElementById("wktxt");
    wake.innerText= dropdown;
    if(wake.innerText!=dropdown){
        wake.innerText="N/A";
    }
    let lunch=document.getElementById("ltxt");
    lunch.innerText=dropdown2;
    if(lunch.innerText!=dropdown2){
        lunch.innerText="N/A";
    }
    let nap=document.getElementById("ntxt");
    nap.innerText=dropdown3;
    if(nap.innerText!=dropdown3){
        nap.innerText="N/A";
    }
    let night=document.getElementById("nightxt");
    night.innerText=dropdown4;
    if(night.innerText!=dropdown4){
        night.innerText="N/A";
    }
    

    // functioning - if dropdown and live time matches

    let dvalue=document.getElementById("dropdown").value
    let dvalue1=document.getElementById("d1").value
    let dvalue2=document.getElementById("d2").value
    let dvalue3=document.getElementById("d3").value


        if(dvalue==hrtime){
            // console.log(dvalue)
            // console.log(hrtime)
            document.getElementById("image").src = "./Component 30 – 1.svg";
            wishtext1.style.fontSize="25px"
            wishtext1.innerText="GOOD MORNING !! WAKE UP !!"

         }

         else if(dvalue1==hrtime){
            // console.log(dvalue2)
            // console.log(hrtime)
            document.getElementById("image").src = "./Group 5183.png";
            wishtext1.style.fontSize="20px"
            wishtext1.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
            console.log(hrtime);

         }

         else if(dvalue2==hrtime){
            document.getElementById("image").src = "./lunch_image.png";
            wishtext1.innerText="GOOD EVENING !!";
            console.log(hrtime);

         }

         else if(dvalue3==hrtime){
            document.getElementById("image").src = "./Group 5194.png";
            wishtext1.innerText="GOOD NIGHT !!";
            console.log(hrtime);

         }

         else{
            timer();
         }
})


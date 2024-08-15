//! login page functionality 

const login_btn=document.querySelector(".login-btn")
const login_page=document.querySelector(".login-page")
const cls_btn=document.querySelector(".cls-btn")
const main_box=document.querySelector("#main-box")

//! open the login page
login_btn.addEventListener("click",()=>{
    login_page.style.display="block"
})
//! close the login page
cls_btn.addEventListener("click",()=>{
     login_page.style.display="none"
})

//! Backend data
const usermail="admin@gmail.com"
const password="Admin123"


//! form handling in js

const login_form=document.querySelector("#login-form")
const mailid=document.querySelector("#mailid")
const userpassword=document.querySelector("#userpassword")
const userotp=document.querySelector("#otp")
let otp=""
login_form.addEventListener("submit",(e)=>{
    e.preventDefault()
   if(mailid.value===usermail&&userpassword.value===password&& userotp.value==otp){
    mailid.value=""
    userpassword.value=""
    userotp.value=""
    alert("successfully login")
    login_page.style.display="none"
    fdata()
   }
   else{
    console.log(mailid.value,userpassword.value,userotp.value,otp);
    
    alert("invalid credentials")
   }  
})

//! generation of 6 digits OTP
const otp_btn=document.querySelector("#otp-btn")
function generateotp(){
  otp=Math.round(Math.random()*1000000)
  alert(`your OTP is ${otp}`)
}
otp_btn.addEventListener("click",generateotp)
//! Theme functionality 
const theme_btn=document.querySelector("#theme-btn")


theme_btn.addEventListener("click",()=>{
   if(theme_btn.innerText==="Dark"){
    theme_btn.innerText="Light"
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
      theme_btn.style.backgroundColor="white"
    theme_btn.style.color="black"

   }
   else{
    theme_btn.innerText="Dark"
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
     theme_btn.style.backgroundColor="black"
    theme_btn.style.color="white"
   }
})


//! implementation of date and time
const time_box=document.querySelector(".date-time")
const date=new Date()
// console.log(date);
time_box.innerHTML=`<h1>${date.toLocaleDateString()}</h1>`
const time_ele=document.createElement("h4")
setInterval(()=>{
 const date=new Date()
time_ele.innerText=date.toLocaleTimeString()
},1000)
time_box.appendChild(time_ele)



//! fetch data from backend


 async function fdata(){
console.log("data fetched successfully from backend");
const data=await fetch("https://api.github.com/users")
const result= await data.json()
// console.log(result);

result.map((ele)=>{
const card=document.createElement("div")
const img=document.createElement("img")
const h3=document.createElement("h3")
img.setAttribute("src",ele.avatar_url)
img.setAttribute("alt",ele.login)
h3.innerText=ele.login
card.append(img,h3)
card.setAttribute("class","card")
main_box.appendChild(card)
// console.log(card);
})

setTimeout(()=>{
  console.log("please accept cookies");
 console.log( );
 if(confirm("please accept cookies")){
  console.log("you can access my application");
  
 }
 else{
    main_box.remove()
 }
 
},5000)
}
"use strict"

const locationBtn = document.querySelectorAll('.programs-find__section div button')[0]
const calendarBtn = document.querySelectorAll('.programs-find__section div button')[1]
const participantsBtn = document.querySelector('.b')
const findBtn = document.querySelector('.find-btn')
const dropDown = document.getElementById('first')
const dropDownSecond = document.getElementById('second')
const dropDownThird = document.getElementById('third')
const wrapper = document.querySelector('.wrapper')

const burgerBtn = document.querySelector('.burger-img')
const sliderMenu = document.querySelector('.slider-menu')
const closeBtn = document.querySelector('.close-icon')

const locationBtnDefValue = locationBtn.innerText
const participantsBtnDefValue = participantsBtn.innerText
const calendarBtnDefValue = calendarBtn.innerText

locationBtn.addEventListener('click',()=>{
    if(dropDown.style.display =="block"){
        dropDown.style.display ="none"
    }
    else{
        dropDown.style.display ="block"
    }
})

dropDown.addEventListener('click',(btn)=>{
    if(btn.target.matches('li')){
        const li = btn.target
        locationBtn.innerText = li.innerText 
    }
})

calendarBtn.addEventListener('click',()=>{
    if(dropDownSecond.style.display =="block"){
        dropDownSecond.style.display ="none"
    }
    else{
        dropDownSecond.style.display ="block"
    }
})

dropDownSecond.addEventListener('click',(btn)=>{
    if(btn.target.matches('p')){
        const p = btn.target
        calendarBtn.innerText = p.innerText
        calendarBtn.style.textAlign = "center"
    }
})

participantsBtn.addEventListener('click',()=>{
    if(dropDownThird.style.display =="block"){
        dropDownThird.style.display ="none"
    }
    else{
        dropDownThird.style.display ="block"
    }
})

dropDownThird.addEventListener('click',(btn)=>{
    if(btn.target.matches('li')){
        const li = btn.target
        participantsBtn.innerText = li.innerText
    }
})

findBtn.addEventListener('click',()=>{
    if(locationBtn !== locationBtnDefValue && participantsBtn !== participantsBtnDefValue && calendarBtn !== calendarBtnDefValue)
    {
        const locationContent = locationBtn.innerText
        const participantsContent = Number(participantsBtn.innerText)
        const calendarContent = Number(calendarBtn.innerText)
        if(locationContent === 'Горы' && participantsContent>1 && calendarContent >=5){
            window.location.href = 'https://bolshayastrana.com/kabardino-balkariya/priehlbruse-s-severa-i-yuga-v-mini-gruppe-2-cheloveka--251962'
        }
    }
})

let month = new Date().getMonth()
let day = new Date().getDate()

const monthArr =[{month:"январь",days:31},
{month:"февраль",days:28},{month:"март",days:30},{month:"апрель",days:30},{month:"май",days:31},
{month:"июнь",days:30},{month:"июль",days:31},{month:"август",days:29},{month:"сентябрь",days:30},
{month:"октябрь",days:31},{month:"ноябрь",days:30},{month:"декабрь",days:31}]       


let sliderArr;
const percent = 500;
let j = 0;
window.addEventListener("load",()=>{
 show() 
 sliderArr = document.querySelectorAll(".class")
 for(let i of sliderArr){
 i.style.left = percent * j + "%"
 j++  
}
})

function show(){
    let cont;
    let monthName;
    let monthNum;
    let sliderElem;
    let i = 0;
    for(let mont of monthArr){

      if(i>=month){
       sliderElem = document.createElement("div")
       sliderElem.classList.add("class")
       sliderElem.style.position ="absolute"
       wrapper.append(sliderElem)
       
      
       cont = document.createElement("div")
       cont.classList.add("cont")
       sliderElem.append(cont)
      
       monthName = document.createElement("div")
       monthName.innerText = mont.month
       monthName.classList.add("monthName")
       cont.append(monthName)
      
       monthNum = document.createElement("div")
       monthNum.classList.add("monthNum")
       cont.append(monthNum)
         
        if(i==month){
         let j = 0;
         for(let i=1;i<=mont.days;i++){
         j++
         if(j>day){
         let a = document.createElement("p")
         a.innerText += i
         a.classList.add("nums")
         monthNum.append(a)
         }
        }
       }
        else{
         for(let i=1;i<=mont.days;i++){
        let a = document.createElement("p")
        a.innerText += i
        a.classList.add("nums")
        monthNum.append(a)
         }
        }  
      }
      i++
    } 
    }

    function right(){
        for(let elem of sliderArr){
          elem.style.left = Number(elem.style.left.replace("%","")) - percent + "%"
        }
    }
       
    function left(){
        for(let elem of sliderArr){
          elem.style.left = Number(elem.style.left.replace("%","")) + percent + "%"
        }
    }

window.onclick = function(event){
    if(!event.target.matches('button'))
    {
        dropDown.style.display ="none"
    }
    if(!event.target.matches('button'))
    {
        dropDownSecond.style.display ="none"
    }
    if(!event.target.matches('button'))
    {
        dropDownThird.style.display ="none"
    }
}

burgerBtn.addEventListener('click',()=>{
    sliderMenu.classList.add('onclick')
})

closeBtn.addEventListener('click',()=>{
    sliderMenu.classList.remove('onclick')
})

var typed = new Typed(".ch1",{
    strings:["Software Developer","Game Developer","App Developer","Data Analytic"],
    typeSpeep: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}
)
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGUbtem6YspKOVqxoKRpJqC_2n6X-zJVH5pigEdthQ0V25D_cHYL4f2qcwut2IbXtmHg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent"
        setTimeout(function(){
            msg.innerHTML=""
        }
    ,5000)
    form.reset()
    })  
    .catch(error => console.error('Error!', error.message))
})
var loader=document.getElementById("PreLoader")
var set=true
window.addEventListener("load",function(){
  loader.style.display="none";   
})


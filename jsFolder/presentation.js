const header = document.getElementById('header');
const body = document.getElementById('body');
const printPresentation = document.createElement('div');
printPresentation.innerHTML = 
`
<div class="headPresentation">
    <div class="headSection" >
        <div>
            <img class="headPresentationImg" id="headPresentationImg" src="https://media.licdn.com/dms/image/D4D03AQG5ZKHj1ygxFw/profile-displayphoto-shrink_800_800/0/1708717242300?e=1714003200&v=beta&t=oEels292KULkY30rQsqmWUwQgnEA3AXHNEsocaqbnZg" alt="">
        </div>
        <div class="headPresentationInformation">  
            <p>    Name: Samuel Nicolas Silva</p>
            <p>    Age: 24 </p>
            <p>    Passport: AAF259541</p>
            <p>    Email: <a href= "mailto:samielnsilva@gmail.com" target="_blank"> Enviar Mail</a> </p>
            <p>    Linkedin: <a href="https://www.linkedin.com/in/samuel-silva-17b6011b8/" target="_blank">Samuel Silva</a>
        </div>  
    </div>
        <button class="themeButton" id= 'themeButton'>
            <img class="themeButtonImg" src="https://cdn0.iconfinder.com/data/icons/display-setting/64/Choose_theme-512.png">
        </button>
</div>
`
header.appendChild(printPresentation);

const headPresentationImg = document.getElementById('headPresentationImg')
const themeButton = document.getElementById('themeButton')

    function changeTheme(){
        themeButton.addEventListener('click', ()=>{
            if(!body.classList[1]){
                body.classList.add('changeTheme')
            } else if(body.classList[1]){
                body.classList.remove('changeTheme')
            }
        })
    }
    
    function showProfile(){
        headPresentationImg.addEventListener("click", ()=>{
            if(!headPresentationImg.classList[1]){
                headPresentationImg.classList.add('showProfile')
            }else if(headPresentationImg.classList[1]){
                headPresentationImg.classList.remove('showProfile')
            }
        })
    }
    changeTheme()
    showProfile()




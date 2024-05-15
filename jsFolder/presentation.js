const header = document.getElementById('header');
const body = document.getElementById('body');
const printPresentation = document.createElement('div');
printPresentation.innerHTML = 
`
<div class="headPresentation">
    <div class="headSection" >
        <div>
            <img class="headPresentationImg" id="headPresentationImg" src="https://media.licdn.com/dms/image/D4D03AQF5yayCViL25g/profile-displayphoto-shrink_800_800/0/1715457665471?e=1721260800&v=beta&t=8WWi1Ka3hJrmkhd7NVd_LRiAmeMolUzK7-Ku4RsVXbI" alt="">
        </div>
        <div class="headPresentationInformation">  
            <p>    Name: Samuel Nicolas Silva</p>
            <p>    Age: 24 </p>
            <p>    Passport: AAF259541</p>
            <p>    DNI: 46899865 </p>
            <p>    Email: <a href= "mailto:samielnsilva@gmail.com" target="_blank"> Send email</a> </p>
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
    changeTheme()




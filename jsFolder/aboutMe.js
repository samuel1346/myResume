const mainIndex = document.getElementById('main')
const printAboutMe = document.createElement('div');
printAboutMe.innerHTML=`
<div class='mainExperiences'>
    <div class='experienceDiv'>
        <h2> About me</h2>
        <p> I am barista, I love coffe and always search for the best quality in every cup.
        Recently i found another passion in programing, i find it very entertaining, 
        been learning since the last year and im interested to see where will it leades me.</P>
    </div>
    <div class= 'experienceDiv'>
        <h3> Languajes</h3>
        <p> English level: C1</p>
        <p> Spanish level: native</p>
    </div>
    <div class='experienceDiv'>
        <h3> Studys</h3>
        <p> course of Frontend React in Coderhouse</p>
        <a href="https://api-gw.coderhouse.com/www/certifications/65c06b34fd3a11c9a5471857/print?lang=en" target='_blank'>
            See certificate
        </a>
        <p> Personal projects</p>
        <a href="https://github.com/samuel1346" target='_blank'>
            Visit my github
        </a>
</div>
`
mainIndex.appendChild(printAboutMe)
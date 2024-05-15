const mainIndex = document.getElementById('main')
const printMain = document.createElement('div')
printMain.innerHTML= 
`
    <div class='mainExperiences'>
        <h1>
            experiences
        </h1>
        <div class="experienceDiv">
            <h3>Barista</h3>
            <p>work place: Nieva en Cameros, Argentina, Buenos Aires</p>
            <p>Since: 27 sep 2022 till: present</p>
            <p>Daily routine of calibration of the grinders, 
                cleaning and maintenance of the coffe grinders and espresso machine,
                i've been working bith a Mahlkonig E65S grinder and nuova simonelli appia life espresso machine, 
                stock control, orders to the providers.
            </p>
            <p> 
                Reference: 
                Agustin Fernandez, owner of the coffee shop, number: +5491139303291
                Valeria Silva, manager of the coffee shop, number: +5491123782055
            </P>
        </div>
        <div class="experienceDiv">
            <h3>Barista/Bartender</h3>
            <p>Work place: Lequai resto, Argentina, Buenos Aires</p>
            <p>Since: 20 feb 2022 till: 1 sep 2022</p>
            <p>
                Stock control, orders to the providers, 
                cleaning and maintenance of the coffe grinders and espresso machine
            </p>
    </div>

`
mainIndex.appendChild(printMain)
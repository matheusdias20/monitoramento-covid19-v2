fetch("https://coronavirus-19-api.herokuapp.com/countries/world")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let confirmedMundo = response.cases
    let recoveredMundo = response.recovered
    let activeMundo = response.active
    let deathsMundo = response.deaths

    confirmedMundo = confirmedMundo.toLocaleString("pt-BR")
    cases = document.querySelector("#confirmed")
    cases.innerText = confirmedMundo
        
    recoveredMundo = recoveredMundo.toLocaleString("pt-BR")
    recovered = document.querySelector("#recovered")
    recovered.innerText = recoveredMundo
    
    activeMundo = activeMundo.toLocaleString("pt-BR")
    active = document.querySelector("#active")
    active.innerText = activeMundo
    
    deathsMundo = deathsMundo.toLocaleString("pt-BR")
    deaths = document.querySelector("#deaths")
    deaths.innerText = deathsMundo
    
})






fetch("https://coronavirus-19-api.herokuapp.com/countries/brazil")

.then(function(response){
    return response.json()
})

.then(function(response){

let confirmedBRA  = response.cases
let recoveredBRA = response.recovered
let activeBRA = response.active
let deathsBRA = response.deaths

confirmedBRA = confirmedBRA.toLocaleString("pt-BR")
cases = document.querySelector("#confirmedBRA")
cases.innerText = confirmedBRA
    
recoveredBRA = recoveredBRA.toLocaleString("pt-BR")
recovered = document.querySelector("#recoveredBRA")
recovered.innerText = recoveredBRA

activeBRA = activeBRA.toLocaleString("pt-BR")
active = document.querySelector("#activeBRA")
active.innerText = activeBRA

deathsBRA = deathsBRA.toLocaleString("pt-BR")
deaths = document.querySelector("#deathsBRA")
deaths.innerText = deathsBRA
})



fetch("https://covid19-brazil-api.now.sh/api/report/v1")

.then(function(response){
    return response.json()

})

.then(function(response){
    let dados = response.data


    let ufFirst = (dados[0].state)
    let ufSecond = (dados[1].state)
    let ufThree = (dados[2].state)
    let ufFour = (dados[3].state)
    let ufFive = (dados[4].state)
    let ufSix = (dados[5].state)
    let ufSeven = (dados[6].state)
    let ufEight = (dados[7].state)
    let ufNine = (dados[8].state)
    let ufTen = (dados[9].state)
    let ufEleven = (dados[10].state)
    let ufTwelve = (dados[11].state)
    let ufThirteen = (dados[12].state)
    let ufFourteen = (dados[13].state)
    let ufFifteen = (dados[14].state)
    let ufSixteen = (dados[15].state)
    let ufSeventeen = (dados[16].state)
    let ufEighteen = (dados[17].state)
    let ufNineteen = (dados[18].state)
    let ufTwenty = (dados[19].state)
    let ufTwentyOne = (dados[20].state)
    let ufTwentyTwo = (dados[21].state)
    let ufTwentyThree = (dados[22].state)
    let ufTwentyFour = (dados[23].state)
    let ufTwentyFive = (dados[24].state)
    let ufTwentySix = (dados[25].state)
    
    state = document.querySelector ("#first-uf")
    state.innerText = ufFirst

    state = document.querySelector ("#second-uf")
    state.innerText = ufSecond

    state = document.querySelector ("#three-uf")
    state.innerText = ufThree

    state = document.querySelector ("#four-uf")
    state.innerText = ufFour

    state = document.querySelector ("#five-uf")
    state.innerText = ufFive

    state = document.querySelector ("#six-uf")
    state.innerText = ufSix

    state = document.querySelector ("#seven-uf")
    state.innerText = ufSeven

    state = document.querySelector ("#eight-uf")
    state.innerText = ufEight

    state = document.querySelector ("#nine-uf")
    state.innerText = ufNine

    state = document.querySelector ("#ten-uf")
    state.innerText = ufTen

    state = document.querySelector ("#eleven-uf")
    state.innerText = ufEleven

    state = document.querySelector ("#twelve-uf")
    state.innerText = ufTwelve

    state = document.querySelector ("#thirteen-uf")
    state.innerText = ufThirteen

    state = document.querySelector ("#fourteen-uf")
    state.innerText = ufFourteen

    state = document.querySelector ("#fifteen-uf")
    state.innerText = ufFifteen

    state = document.querySelector ("#sixteen-uf")
    state.innerText = ufSixteen

    state = document.querySelector ("#seventeen-uf")
    state.innerText = ufSeventeen

    state = document.querySelector ("#eighteen-uf")
    state.innerText = ufEighteen

    state = document.querySelector ("#nineteen-uf")
    state.innerText = ufNineteen

    state = document.querySelector ("#twenty-uf")
    state.innerText = ufTwenty

    state = document.querySelector ("#twenty-one-uf")
    state.innerText = ufTwentyOne

    state = document.querySelector ("#twenty-two-uf")
    state.innerText = ufTwentyTwo

    state = document.querySelector ("#twenty-three-uf")
    state.innerText = ufTwentyThree

    state = document.querySelector ("#twenty-four-uf")
    state.innerText = ufTwentyFour

    state = document.querySelector ("#twenty-five-uf")
    state.innerText = ufTwentyFive

    state = document.querySelector ("#twenty-six-uf")
    state.innerText = ufTwentySix

    let confirmedFirst = (dados[0].cases)
    let confirmedSecond = (dados[1].cases)
    let confirmedThree = (dados[2].cases)
    let confirmedFour = (dados[3].cases)
    let confirmedFive = (dados[4].cases)
    let confirmedSix = (dados[5].cases)
    let confirmedSeven = (dados[6].cases)
    let confirmedEight = (dados[7].cases)
    let confirmedNine = (dados[8].cases)
    let confirmedTen = (dados[9].cases)
    let confirmedEleven = (dados[10].cases)
    let confirmedTwelve = (dados[11].cases)
    let confirmedThirteen = (dados[12].cases)
    let confirmedFourteen = (dados[13].cases)
    let confirmedFifteen = (dados[14].cases)
    let confirmedSixteen = (dados[15].cases)
    let confirmedSeventeen = (dados[16].cases)
    let confirmedEighteen = (dados[17].cases)
    let confirmedNineteen = (dados[18].cases)
    let confirmedTwenty = (dados[19].cases)
    let confirmedTwentyOne = (dados[20].cases)
    let confirmedTwentyTwo = (dados[21].cases)
    let confirmedTwentyThree = (dados[22].cases)
    let confirmedTwentyFour = (dados[23].cases)
    let confirmedTwentyFive = (dados[24].cases)
    let confirmedTwentySix = (dados[25].cases)

    
    confirmedFirst = confirmedFirst.toLocaleString("pt-BR")
    cases = document.querySelector ("#first-confirmed")
    cases.innerText = confirmedFirst

    confirmedSecond = confirmedSecond.toLocaleString("pt-BR")
    cases = document.querySelector("#second-confirmed")
    cases.innerText = confirmedSecond

    confirmedThree = confirmedThree.toLocaleString("pt-BR")
    cases = document.querySelector ("#three-confirmed")
    cases.innerText = confirmedThree
    
    confirmedFour = confirmedFour.toLocaleString("pt-BR")
    cases = document.querySelector ("#four-confirmed")
    cases.innerText = confirmedFour

    confirmedFive = confirmedFive.toLocaleString("pt-BR")
    cases = document.querySelector ("#five-confirmed")
    cases.innerText = confirmedFive

    confirmedSix = confirmedSix.toLocaleString("pt-BR")
    cases = document.querySelector ("#six-confirmed")
    cases.innerText = confirmedSix

    confirmedSeven = confirmedSeven.toLocaleString("pt-BR")
    cases = document.querySelector ("#seven-confirmed")
    cases.innerText = confirmedSeven

    confirmedEight = confirmedEight.toLocaleString("pt-BR")
    cases = document.querySelector ("#eight-confirmed")
    cases.innerText = confirmedEight

    confirmedNine = confirmedNine.toLocaleString("pt-BR")
    cases = document.querySelector ("#nine-confirmed")
    cases.innerText = confirmedNine
    
    confirmedTen = confirmedTen.toLocaleString("pt-BR")
    cases = document.querySelector ("#ten-confirmed")
    cases.innerText = confirmedTen

    confirmedEleven = confirmedEleven.toLocaleString("pt-BR")
    cases = document.querySelector ("#eleven-confirmed")
    cases.innerText = confirmedEleven

    confirmedTwelve = confirmedTwelve.toLocaleString("pt-BR")
    cases = document.querySelector ("#twelve-confirmed")
    cases.innerText = confirmedTwelve

    confirmedThirteen = confirmedThirteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#thirteen-confirmed")
    cases.innerText = confirmedThirteen

    confirmedFourteen = confirmedFourteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#fourteen-confirmed")
    cases.innerText = confirmedFourteen

    confirmedFifteen = confirmedFifteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#fifteen-confirmed")
    cases.innerText = confirmedFifteen

    confirmedSixteen = confirmedSixteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#sixteen-confirmed")
    cases.innerText = confirmedSixteen

    confirmedSeventeen = confirmedSeventeen.toLocaleString("pt-BR")
    cases = document.querySelector ("#seventeen-confirmed")
    cases.innerText = confirmedSeventeen

    confirmedEighteen = confirmedEighteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#eighteen-confirmed")
    cases.innerText = confirmedEighteen

    confirmedNineteen = confirmedNineteen.toLocaleString("pt-BR")
    cases = document.querySelector ("#nineteen-confirmed")
    cases.innerText = confirmedNineteen

    confirmedTwenty = confirmedTwenty.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-confirmed")
    cases.innerText = confirmedTwenty

    confirmedTwentyOne = confirmedTwentyOne.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-one-confirmed")
    cases.innerText = confirmedTwentyOne

    confirmedTwentyTwo = confirmedTwentyTwo.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-two-confirmed")
    cases.innerText = confirmedTwentyTwo

    confirmedTwentyThree = confirmedTwentyThree.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-three-confirmed")
    cases.innerText = confirmedTwentyThree

    confirmedTwentyFour = confirmedTwentyFour.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-four-confirmed")
    cases.innerText = confirmedTwentyFour

    confirmedTwentyFive = confirmedTwentyFive.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-five-confirmed")
    cases.innerText = confirmedTwentyFive

    confirmedTwentySix = confirmedTwentySix.toLocaleString("pt-BR")
    cases = document.querySelector ("#twenty-six-confirmed")
    cases.innerText = confirmedTwentySix


    let firstDeaths = (dados[0].deaths)
    let secondDeaths = (dados[1].deaths)
    let deathsThree = (dados[2].deaths)
    let deathsFour = (dados[3].deaths)
    let deathsFive = (dados[4].deaths)
    let deathsSix = (dados[5].deaths)
    let deathsSeven = (dados[6].deaths)
    let deathsEight = (dados[7].deaths)
    let deathsNine = (dados[8].deaths)
    let deathsTen = (dados[9].deaths)
    let deathsEleven = (dados[10].deaths)
    let deathsTwelve = (dados[11].deaths)
    let deathsThirteen = (dados[12].deaths)
    let deathsFourteen = (dados[13].deaths)
    let deathsFifteen = (dados[14].deaths)
    let deathsSixteen = (dados[15].deaths)
    let deathsSeventeen = (dados[16].deaths)
    let deathsEighteen = (dados[17].deaths)
    let deathsNineteen = (dados[18].deaths)
    let deathsTwenty = (dados[19].deaths)
    let deathsTwentyOne = (dados[20].deaths)
    let deathsTwentyTwo = (dados[21].deaths)
    let deathsTwentyThree = (dados[22].deaths)
    let deathsTwentyFour = (dados[23].deaths)
    let deathsTwentyFive = (dados[24].deaths)
    let deathsTwentySix = (dados[25].deaths)
   

    firstDeaths = firstDeaths.toLocaleString("pt-BR")
    deaths = document.querySelector ("#first-deaths")
    deaths.innerText = firstDeaths

    secondDeaths = secondDeaths.toLocaleString("pt-BR")
    deaths = document.querySelector ("#second-deaths")
    deaths.innerText = secondDeaths

    deathsThree = deathsThree.toLocaleString("pt-BR")
    deaths = document.querySelector ("#three-deaths")
    deaths.innerText = deathsThree
    
    deathsFour = deathsFour.toLocaleString("pt-BR")
    deaths = document.querySelector ("#four-deaths")
    deaths.innerText = deathsFour

    deathsFive = deathsFive.toLocaleString("pt-BR")
    deaths = document.querySelector ("#five-deaths")
    deaths.innerText = deathsFive

    deathsSix = deathsSix.toLocaleString("pt-BR")
    deaths = document.querySelector ("#six-deaths")
    deaths.innerText = deathsSix

    deathsSeven = deathsSeven.toLocaleString("pt-BR")
    deaths = document.querySelector ("#seven-deaths")
    deaths.innerText = deathsSeven

    deathsEight = deathsEight.toLocaleString("pt-BR")
    deaths = document.querySelector ("#eight-deaths")
    deaths.innerText = deathsEight

    deathsNine = deathsNine.toLocaleString("pt-BR")
    deaths = document.querySelector ("#nine-deaths")
    deaths.innerText = deathsNine
    
    deathsTen = deathsTen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#ten-deaths")
    deaths.innerText = deathsTen

    deathsEleven = deathsEleven.toLocaleString("pt-BR")
    deaths = document.querySelector ("#eleven-deaths")
    deaths.innerText = deathsEleven

    deathsTwelve = deathsTwelve.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twelve-deaths")
    deaths.innerText = deathsTwelve

    deathsThirteen = deathsThirteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#thirteen-deaths")
    deaths.innerText = deathsThirteen

    deathsFourteen = deathsFourteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#fourteen-deaths")
    deaths.innerText = deathsFourteen

    deathsFifteen = deathsFifteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#fifteen-deaths")
    deaths.innerText = deathsFifteen

    deathsSixteen = deathsSixteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#sixteen-deaths")
    deaths.innerText = deathsSixteen

    deathsSeventeen = deathsSeventeen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#seventeen-deaths")
    deaths.innerText = deathsSeventeen

    deathsEighteen = deathsEighteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#eighteen-deaths")
    deaths.innerText = deathsEighteen

    deathsNineteen = deathsNineteen.toLocaleString("pt-BR")
    deaths = document.querySelector ("#nineteen-deaths")
    deaths.innerText = deathsNineteen

    deathsTwenty = deathsTwenty.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-deaths")
    deaths.innerText = deathsTwenty

    deathsTwentyOne = deathsTwentyOne.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-one-deaths")
    deaths.innerText = deathsTwentyOne

    deathsTwentyTwo = deathsTwentyTwo.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-two-deaths")
    deaths.innerText = deathsTwentyTwo

    deathsTwentyThree = deathsTwentyThree.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-three-deaths")
    deaths.innerText = deathsTwentyThree

    deathsTwentyFour = deathsTwentyFour.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-four-deaths")
    deaths.innerText = deathsTwentyFour

    deathsTwentyFive = deathsTwentyFive.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-five-deaths")
    deaths.innerText = deathsTwentyFive

    deathsTwentySix = deathsTwentySix.toLocaleString("pt-BR")
    deaths = document.querySelector ("#twenty-six-deaths")
    deaths.innerText = deathsTwentySix


})
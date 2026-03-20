const listOfJudges = [
    {name: 'Toffoli', numOfProcesses: 99},
    {name: 'Xandão', numOfProcesses: 155},
    {name: 'Zanin', numOfProcesses: 55},
    {name: 'Gilmar', numOfProcesses: 124},
    {name: 'Dino', numOfProcesses: 77},
    {name: 'Fux', numOfProcesses: 78},
    {name: 'Mendonça', numOfProcesses: 32},
    {name: 'Kassio', numOfProcesses: 67},
    {name: 'Fachin', numOfProcesses: 78},
    {name: 'Carmen', numOfProcesses: 32},
]

function subtract (a,b) { return a-b; }
function invert (a) { return 1/a; }

function invertWeights(listOfJudges, mathMethod='subtract' || 'invert') {
    const totalProcesses = listOfJudges.reduce((accumulator, item) => accumulator + item.numOfProcesses, 0);
    let mathFormula = 0
    if (mathMethod==='subtract') {
        mathFormula = subtract()
    }
    
    let newListOfJudges = []
    for (item of listOfJudges) {
        if (mathMethod==='subtract') {
        mathFormula = subtract(totalProcesses, item.numOfProcesses)
    }
    else if (mathMethod==='invert') {
        mathFormula = invert(item.numOfProcesses)
    }
        newListOfJudges.push({
            ...item,
            weight: mathFormula
        })
    }
    return newListOfJudges;
}

console.log('inverted weights:', invertWeights(listOfJudges, 'subtract'))
console.log('inverted weights:', invertWeights(listOfJudges, 'invert'))

function balancedDrawSTF(listOfJudges) {
    const totalProcesses = listOfJudges.reduce((accumulator, item) => accumulator + item.weight, 0);
    //console.log('total:', totalProcesses)
    let random = Math.random() * totalProcesses;
    //console.log('random', random)

    let sortedJudge;
    for (item of listOfJudges) {
        //console.log('itemNum', item.weight)
        if (random < item.weight) {
            sortedJudge = item;
            break;
        }
        //console.log(`random ${random.toFixed(2)} is bigger than item.numOf ${item.weight}, therefore we do random - item.numOf`)
        random -= item.weight;
    }

    return sortedJudge;
}




function testDraw(list, loops = 100000) {
    const count = {}
    const totalWeight = list.reduce((accumulator, item) => accumulator + item.weight, 0);
    console.log('Total Weight:', totalWeight);
    //init counter
    for (const item of list) count[item.name] = 0;

    console.log(`--- Starting simulation with ${loops.toLocaleString()} loops ---`);

    for (let i = 0; i < loops; i++) {
        const result = balancedDrawSTF(invertedWeights);
        count[result.name]++;
    }
    let totalSum = 0;
    for (const key in count) {
        totalSum += count[key]
    }
    console.log('total sum: ', totalSum)
    // const validate = count;


    const report = list.map(item => {
        const freq = count[item.name];
        const realFreq = (count[item.name] / loops) * 100;
        const expectFreq = (item.weight / totalWeight) * 100;

        return {
            Item: item.name,
            "Original Weight": item.weight,
            "Frequency": freq,
            "Expected (%)": expectFreq.toFixed(2) + "%",
            "Obtained (%)": realFreq.toFixed(2) + "%",
            "Deviation": (realFreq - expectFreq).toFixed(2) + "%"
        };
    });

    console.table(report);
}



/* const drawJudge = balancedDrawSTF(invertedWeights)
console.log(drawJudge)
testDraw(invertedWeights)
 */
function balancedDrawSTF(listOfJudges) {
    const totalProcesses = listOfJudges.reduce((accumulator, item) => accumulator + item.weight, 0);
    console.log('total:', totalProcesses)
    let random = Math.random() * totalProcesses;
    console.log('random', random)

    let sortedJudge;
    for (item of listOfJudges) {
        console.log('itemNum', item.weight)
        if (random < item.weight) {
            sortedJudge = item;
            break;
        }
        console.log(`random ${random.toFixed(2)} is bigger than item.numOf ${item.weight}, therefore we do random - item.numOf`)
        random -= item.weight;
    }

    return sortedJudge;
}

const listOfJudges = [
    {name: 'Toffoli', numOfProcesses: 99},
    {name: 'Xandão', numOfProcesses: 155},
    {name: 'Zanin', numOfProcesses: 55},
    {name: 'Gilmar', numOfProcesses: 124},
    {name: 'Dino', numOfProcesses: 77},
    {name: 'Fux', numOfProcesses: 78},
    {name: 'Mendonça', numOfProcesses: 33},
    {name: 'Kassio', numOfProcesses: 67},
    {name: 'Fachin', numOfProcesses: 78},
    {name: 'Carmen', numOfProcesses: 32},
]

function invertWeights(listOfJudges) {
    const totalProcesses = listOfJudges.reduce((accumulator, item) => accumulator + item.numOfProcesses, 0);
    let newListOfJudges = []
    for (item of listOfJudges) {
        newListOfJudges.push({
            ...item,
            weight: totalProcesses-item.numOfProcesses
        })
    }
    return newListOfJudges;
}

function testDraw(list, loops = 1000) {
    const count = {}
    const totalWeight = list.reduce((accumulator, item) => accumulator + item.weight, 0);

    //init counter
    for (const item of list) count[item.name] = 0;

    console.log(`--- Starting simulation with ${loops.toLocaleString()} loops ---`);

    for (let i = 0; i < loops; i++) {
        const result = balancedDrawSTF(invertedWeights);
        count[result.name]++;
    }

    const report = list.map(item => {
        const realFreq = (count[item.name] / loops) * 100;
        const expectFreq = (item.weight / totalWeight) * 100;

        return {
            Item: item.name,
            "Original Weigth": item.weight,
            "Expected (%)": expectFreq.toFixed(2) + "%",
            "Obtained (%)": realFreq.toFixed(2) + "%",
            "Deviation": (realFreq - expectFreq).toFixed(2) + "%"
        };
    });

    console.table(report);
}

const invertedWeights = invertWeights(listOfJudges)
console.log(invertedWeights)
const drawJudge = balancedDrawSTF(invertedWeights)
console.log(drawJudge)
testDraw(invertedWeights)

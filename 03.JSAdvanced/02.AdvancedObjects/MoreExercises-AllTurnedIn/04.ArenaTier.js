function main(input) {
    let gladiators = {};
 
    input.forEach(line => {
            if (line.includes('->')) {
                let [glad, technique, skill] = line.split(' -> ');
 
                if (gladiators[glad]) {
                    gladiators[glad].skills += +skill;
                    if (gladiators[glad].techniques[technique]) {
                        gladiators[glad].techniques[technique] = +skill;
                    } else {
                        gladiators[glad].techniques[technique] = +skill;
                    }
                } else {
                    gladiators[glad] = {
                        techniques: {
                            [technique]: +skill
                        },
                        skills: +skill
                    };
                }
            }
            else if (line.includes('vs')) {
                let [oponentOne, oponentTwo] = line.split(' vs ');
                if (gladiators[oponentOne] && gladiators[oponentTwo]) {
                    let oponentOneTechniques = Object.keys(gladiators[oponentOne].techniques);
                    let oponentTwoTechniques = Object.keys(gladiators[oponentTwo].techniques);
                    let oponentOneSkills = gladiators[oponentOne].skills;
                    let oponentTwoSkills = gladiators[oponentTwo].skills;
 
                    let common = oponentOneTechniques.filter(item => oponentTwoTechniques.includes(item));
 
                    if (common.length > 0) {
                        if (oponentOneSkills > oponentTwoSkills) {
                            delete gladiators[oponentTwo];
                        } else if (oponentOneSkills < oponentTwoSkills) {
                            delete gladiators[oponentOne];
                        }
                    }
                }
            }
    });
 
    const sortingGlads = (a, b) => b[1].skills - a[1].skills || a[0].localeCompare(b[0]);
    const sortingTechs = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
 
    for (let [k, v] of Object.entries(gladiators).sort(sortingGlads)) {
        console.log(`${k}: ${gladiators[k].skills} skill`);
        for (let [key, value] of Object.entries(v)) {
            if (key == 'techniques') {
                for (let [k, v] of Object.entries(value).sort(sortingTechs)) {
                    console.log(`- ${k} <!> ${v}`);
                }
            }
        }
    }
}
 
main(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar']);
// solve([ 'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Pesho vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Gosho',
//     'Ave Cesar' ]);
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (let i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents);
}

let interests = ["Programming", "Farm animals", "Yummy food", "Camping", "Laying on da beach"];


for (let i = 0; i < interests.length; i++) {

    if(interests[i] === "Camping"){
        console.log(`My absolute favorite interest is ${interests[i]}.`)
    } 
    else {console.log(`One of my interests is: ${interests[i]}.`)

    }
}

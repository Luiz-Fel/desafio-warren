function main(x, arrivalTime) {
    let studentsInClass = 0;
   for(let student = 0; student < arrivalTime.length; student++) {
        if (arrivalTime[student] <= 0) {
            studentsInClass++;
        }
        if (studentsInClass >= x) {
            return console.log("Aula normal");

        }
   }
    return console.log("Aula cancelada");

}

const x = process.argv[2];
const arrivalTime = process.argv.slice(3).map(x => Number(x));
main(x, arrivalTime)

//o exemplo dado no desafio
//main(3, [-2, -1, 0, 1, 2]);
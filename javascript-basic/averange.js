const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

const sum = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

const averange = 60;

if (sum >= 90 && sum <= 100) {
    grade = 'A';
} else if (sum >= 80 && sum <= 89) {
    grade = 'B';
} else if (sum >= 70 && sum <= 79) {
    grade = 'C';
} else if (sum >= 60 && sum <= 69) {
    grade = 'D';
} else if (sum >= 50 && sum <= 69) {
    grade = 'E';
}

console.log("averange = " + averange)
console.log("grade = " + grade)
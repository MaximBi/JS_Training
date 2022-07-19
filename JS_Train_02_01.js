const aKathete = prompt('A Kathete:');
const bKathete = prompt('B Kathete:');
const hyphotenuse = prompt('Hypotenuse:');

const isRectangular = Math.round((aKathete * aKathete + bKathete * bKathete) + Number.EPSILON) * 100 / 100 === Math.round(hyphotenuse * hyphotenuse + Number.EPSILON) * 100 / 100;

if (isRectangular) {
    alert('OK');
} else {
    alert('NO');
}
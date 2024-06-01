let ism = prompt("Ismningizni kiriting: "); // toxir
let kalit = prompt("Kalit so'z kiriting: "); // to

if (ism.includes(kalit)) {
    alert(`${ism} da ${kalit} so'zi mavjud.`);
} else {
    alert(`${ism} da ${kalit} so'zi mavjud emas.`);
}

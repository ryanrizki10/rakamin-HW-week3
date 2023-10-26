// == Soal 1 ==
// Menggunakan Function
function Temperatur (suhu) {
    if (suhu >= -100 && suhu <=0) {
        return "BEKU"
    } else if (suhu >= 1 && suhu <= 100) {
        return "CAIR"
    } else if (suhu >= 101 && suhu <= 500) {
        return "UAP"
    } else {
       return "NOT DEFINED"
    }
}

console.log (Temperatur(-15)); //BEKU
console.log (Temperatur(55)); // CAIR
console.log (Temperatur(150)); // UAP
console.log (Temperatur(550)); //NOT DEFINED


// Versi Ternary Operator
function temper(degree) {
    return (degree >= -100 && degree <= 0) ? "BEKU"
        : (degree >= 1 && degree <= 100) ? "CAIR"
        : (degree >= 101 && degree <= 500) ? "UAP"
        : "NOT DEFINED"
}

console.log(temper(-30)) //BEKU
console.log(temper(50)) //CAIR
console.log(temper(150)) // UAP
console.log(temper(550)) // NOT DEFINED


// Menggunakan IF Elses Statemnt
const beku = 0;
const cair = 100;
const uap = 500;

let suhu = -25 // suhu beku

if (suhu <= beku) {
    console.log ("suhu beku")
}else if (suhu <= cair) {
    console.log ("suhu cair")
}else if (suhu <= uap) {
    console.log ("suhu uap")
}else {
    console.log ("tidak terdefinisi")
}

// == Soal 2 ==

// Menggunakan IfElse
let jenisKendaraan = "mobil";
let ccMobil = 1600;             //Pertamax Turbo

if (jenisKendaraan === "plat kuning" || jenisKendaraan === "motor") {
    console.log ("BBM Subsidi");
} else if (ccMobil < 1500) {
    console.log ("Pertamax");
} else if (ccMobil >= 1500) {
    console.log ("Pertamax Turbo");
} else {
    console.log("Jenis kendaraan tidak valid");
}


// Menggunakan Function
//  function vehicle (vehicleType, carPower) {
//     if (vehicleType === "plat kuning" || vehicleType === "motor") {
//         return "BBM Subsidiiii"
//     } else if (carPower < 1500) {
//         return "Pertamaxx"
//     } else {
//         return "Pertamax Turbooo"
//     }
  
//  }

//  console.log(vehicle("plat kuning", "motor"))
//  console.log(vehicle("motor", 1250))
//  console.log(vehicle("merah", 1300))
//  console.log(vehicle("biru", 1600))

// Menggunakan Ternary Operator
let jenisBBM = jenisKendaraan === "plat kuning" || jenisKendaraan === "motor" ? "BBM Subsidiiii"
    : ccMobil < 1500 ? "Pertamaxxxx"
    : "Pertamax Turbooo";

    console.log (jenisBBM); //Pertamax Turbooo
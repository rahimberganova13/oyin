let bosqich1 = document.getElementsByTagName("nav")[0];
let bosqich2 = document.getElementsByTagName("nav")[1];
let bosqich3 = document.getElementsByClassName("bolim2")[0];
let bosqich4 = document.getElementsByClassName("bolim3")[0];

let ism1;
let ism2;

let Xlar = [];
let Olar = [];
let raqam = Math.round(Math.random() * 10);
let javoblar = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let interval;

function usersave(a) {
  if (a == 1) {
    ism1 = document.getElementById("player1").value;
    bosqich2.style.display = "flex";
    bosqich1.style.display = "none";
  }
  if (a == 2) {
    ism2 = document.getElementById("player2").value;
    bosqich2.style.display = "none";
    bosqich3.style.display = "grid";
    document.getElementsByTagName("h3")[0].innerHTML =
      (raqam % 2 == 0 ? ism2 : ism1) + " navbati";
  }
}

function bosildi(b) {
  if (document.getElementsByTagName("div")[b - 1].innerHTML == "") {
    sanoq();
    if (raqam % 2 == 0) {
      document.getElementsByTagName("h3")[0].innerHTML = ism1 + " navbati";
      Olar.push(b);
      document.getElementsByTagName("div")[b - 1].innerHTML = "O";
      golib(b, "O");
    } else {
      document.getElementsByTagName("h3")[0].innerHTML = ism2 + " navbati";
      Xlar.push(b);
      document.getElementsByTagName("div")[b - 1].innerHTML = "X";
      golib(b, "X");
    }
    raqam++;
  }
}

function golib(b, kim) {
  let ehtimol = [];
  let sanoq = 0;
  javoblar.filter((value) => {
    if (value.includes(b)) {
      ehtimol.push(value);
    }
  });
  if (kim == "X") {
    Xlar.sort((a, b) => a - b);
    for (let j = 0; j < ehtimol.length; j++) {
      sanoq = 0;
      for (let i = 0; i < Xlar.length; i++) {
        if (ehtimol[j].includes(Xlar[i])) {
          sanoq++;
        }
      }
      if (sanoq == 3) {
        document.getElementsByTagName('div')[ehtimol[j][0]]
        setTimeout(()=>{
        bosqich3.style.display = "none";
        bosqich4.style.display = "flex";
        bosqich4.innerHTML = `${ism1} G'alaba qozondi.`;
        clearInterval(interval);
        return;
        })
       
      }
    }
  } else if (kim == "O") {
    Olar.sort((a, b) => a - b);
    for (let j = 0; j < ehtimol.length; j++) {
      sanoq = 0;
      for (let i = 0; i < Olar.length; i++) {
        if (ehtimol[j].includes(Olar[i])) {
          sanoq++;
        }
      }
      if (sanoq == 3) {
        bosqich3.style.display = "none";
        bosqich4.style.display = "flex";
        bosqich4.innerHTML = `${ism2} G'alaba qozondi.`;
        clearInterval(interval);
        return;
      }
    }
  }
  if (Olar.length + Xlar.length == 9) {
    bosqich3.style.display = "none";
    bosqich4.style.display = "flex";
    bosqich4.innerHTML = `Dostlik G'alaba qozondi.`;
    clearInterval(interval);
    return;
  }
  return console.log("kombinatsiya yuq");
}

function sanoq() {
  clearInterval(interval);
  let sanoq = 3;
  interval = setInterval(() => {
    document.getElementById("vaqt").innerHTML = sanoq + " s";
    console.log("ishladi");
    if (sanoq == 0) {
      if (Olar.length + Xlar.length != 9) {
        avtoBelgila();
      }
    }
    sanoq--;
  }, 1000);
}

function avtoBelgila() {
  while (true) {
    let tahmin = Math.round(Math.random() * 10);
    if (
      tahmin > 0 &&
      tahmin < 10 &&
      !Olar.includes(tahmin) &&
      !Xlar.includes(tahmin)
    ) {
      clearInterval(interval)
      sanoq();
      if (raqam % 2 == 0) {
        document.getElementsByTagName("h3")[0].innerHTML = ism1 + " navbati";
        Olar.push(tahmin);
        document.getElementsByTagName("div")[tahmin - 1].innerHTML = "O";
        golib(tahmin, "O");
      } else {
        document.getElementsByTagName("h3")[0].innerHTML = ism2 + " navbati";
        Xlar.push(tahmin);
        document.getElementsByTagName("div")[tahmin - 1].innerHTML = "X";
        golib(tahmin, "X");
      }
      raqam++;
      break;
    }
  }
}

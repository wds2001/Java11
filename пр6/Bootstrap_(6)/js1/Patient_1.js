class Patient {
    constructor(f, i, o, d, s, sh) {
    this.F = f;
    this.I = i;
    this.O = o;
    this.D = new Date(d);
    this.S = s;
    this.SH = sh;
    }
setById() {
document.getElementById("F").textContent = this.F;
document.getElementById("I").textContent = this.I;
document.getElementById("O").textContent = this.O;
document.getElementById("Y").textContent = this.D.getFullYear();
document.getElementById("S").textContent = this.S;
document.getElementById("SH").textContent = this.SH;
 }

}
let Ivanov = new Patient('Иванов','Иван','Иванович', new Date(1980, 6, 10),"м","Назначено");
Ivanov.setById();
let Petrov = new Patient ('Петров', 'Петр', 'Петрович', new Date(2022,5,8), "м", "Медотвод");
Petrov.setById();
let Sidorov = new Patient ('Сидоров', 'Сидор', 'Сидорович', new Date(1856,6,6), "м", "Исполнени")
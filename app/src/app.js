import Point from './point'
import TimeTable from './timetable'

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const teste = [];
const daysOfWeek = ["@", "MON", "TUE", "WED", "THU", "FRI", "SAT"];  
//Bug detectado, os codigos das mateiras n estao fixos, ex: se eu adicionar um horario antes das 7h por exemplo o codigo c1 
//passa a ser o horario q eu adionei antes.
const horarios = ['07:01 - 07:55', '7:55 - 08:50', '09:10 - 10:05' , '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '17:00- 18:00', '18:30 - 19:25', '19:25 - 20:20', '20:20 - 22:30'];
const p = new TimeTable(teste, daysOfWeek, horarios);
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.init();
console.log(p);

let i=0;

window.onload = function() {
    var lis = document.querySelectorAll('li.list-item > span');

      // loop para adicionar listenners aos elementos li selecionados.
   for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", getAddresses, false);
    lis[i].addEventListener("mouseout",  clearTarget, false);
    lis[i].addEventListener("click",     addToCalendar, false);
  }
}

let free = false;

function clearTarget(ev){

    event.stopPropagation();
    event.preventDefault(); 

    console.log("mouseout");
    
    var pos = ev.target.getAttribute('position');
    var addr = pos.trim().split(" ");

    // percorre cada horario da disciplina e remove as classes.
    addr.forEach(function(element) {
      var alvo = document.getElementById(element).className =
                    document.getElementById(element).className
                            .replace(new RegExp('(?:^|\\s)'+ 'corVermelha|corVerde' + '(?:\\s|$)'), ' ');
    });
  }

function getAddresses( event ) {
    
    console.log("mouseover");
    
    event.stopPropagation();
    event.preventDefault();  // prevent the default Enter's action

    console.log(event.target);
    //pega o attr position para verificar quais horarios a disciplina está.
    var pos = event.target.getAttribute('position');
    console.log('pos', pos);

    // separa os horários e coloca em um array.
    var addr = pos.trim().split(" ");
    console.log('addr: ', addr);

    // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
    addr.forEach(function(element) {

      var alvo = document.getElementById(element);

      // verifica cada disciplina, se vazia
      if(alvo.textContent === ' . '){
        alvo.className += " corVerde"; // adiciona a classe verde
        free = true;
      }else{
        //alvo.style.background = 'red';
        free = false;
        alvo.className += " corVermelha"; // adiciona a classe vermelha
      }

    });

  }



function addToCalendar(){
    console.log("click");
}

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _point = require('./point');

var _point2 = _interopRequireDefault(_point);

var _timetable = require('./timetable');

var _timetable2 = _interopRequireDefault(_timetable);

var p1 = new _point2['default'](5, 5);
var p2 = new _point2['default'](10, 10);
var teste = [];
var daysOfWeek = ["@", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//Bug detectado, os codigos das mateiras n estao fixos, ex: se eu adicionar um horario antes das 7h por exemplo o codigo c1
//passa a ser o horario q eu adionei antes.
var horarios = ['07:01 - 07:55', '7:55 - 08:50', '09:10 - 10:05', '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '17:00- 18:00', '18:30 - 19:25', '19:25 - 20:20', '20:20 - 22:30'];
var p = new _timetable2['default'](teste, daysOfWeek, horarios);
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.init();
console.log(p);

var i = 0;

window.onload = function () {
  var lis = document.querySelectorAll('li.list-item > span');

  // loop para adicionar listenners aos elementos li selecionados.
  for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", getAddresses, false);
    lis[i].addEventListener("mouseout", clearTarget, false);
    lis[i].addEventListener("click", addToCalendar, false);
  }
};

var free = false;

function clearTarget(ev) {

  event.stopPropagation();
  event.preventDefault();

  console.log("mouseout");

  var pos = ev.target.getAttribute('position');
  var addr = pos.trim().split(" ");

  // percorre cada horario da disciplina e remove as classes.
  addr.forEach(function (element) {
    var alvo = document.getElementById(element).className = document.getElementById(element).className.replace(new RegExp('(?:^|\\s)' + 'corVermelha|corVerde' + '(?:\\s|$)'), ' ');
  });
}

function getAddresses(event) {

  console.log("mouseover");

  event.stopPropagation();
  event.preventDefault(); // prevent the default Enter's action

  console.log(event.target);
  //pega o attr position para verificar quais horarios a disciplina está.
  var pos = event.target.getAttribute('position');
  console.log('pos', pos);

  // separa os horários e coloca em um array.
  var addr = pos.trim().split(" ");
  console.log('addr: ', addr);

  // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
  addr.forEach(function (element) {

    var alvo = document.getElementById(element);

    // verifica cada disciplina, se vazia
    if (alvo.textContent === ' . ') {
      alvo.className += " corVerde"; // adiciona a classe verde
      free = true;
    } else {
      //alvo.style.background = 'red';
      free = false;
      alvo.className += " corVermelha"; // adiciona a classe vermelha
    }
  });
}

function addToCalendar() {
  console.log("click");
}

},{"./point":2,"./timetable":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = (function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, null, [{
    key: "distance",
    value: function distance(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;

      return Math.sqrt(dx * dx + dy * dy);
    }
  }]);

  return Point;
})();

exports["default"] = Point;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

'use stric';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function TimeTable(teste, daysOfWeek, aulaHorarios) {
    var _this = this;

    //setando os dias da semana
    this.daysOfWeek = daysOfWeek;
    this.horarios = aulaHorarios;
    this.dspList = [];

    this.teste;
    this.isF = true;

    TimeTable.prototype.init = function () {
        _this.addFromList([{
            "horario": "c44",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "ET",
            "disciplina": "'Etica'",
            "professor": "Lucas Lattari"
        }, {
            "horario": "c1",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "CALC3",
            "disciplina": "Calculo III",
            "professor": "Lucas Lattari"
        }, {
            "horario": "c43",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "EULER",
            "disciplina": "Calculo III",
            "professor": "Lucas Lattari"
        }, {
            "horario": "c33",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "CALC3",
            "disciplina": "Calculo III",
            "professor": "Lucas Lattari"
        }, {
            "horario": "c17",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "aeds2",
            "disciplina": "Algoritmos & Estrutura de Dados II",
            "professor": "Lucas Lattari"
        }]);
        _this.createTable();
        //   this.addFromList(
        //            [{
        //              "horario":"c53",
        //              "turma":"MAT254",
        //              "periodo":"5/2016",
        //              "sigla":"AEDS13",
        //              "disciplina": "Algoritmos & Estrutura de Dados I",
        //              "professor":"Lucas Lattari"
        //   }]
        //            );

        //console.log(this.teste);
    };

    var MyArray = function MyArray(callback) {
        var arr = [];
        arr.push = function () {
            console.log("I'M PUSHING>", arguments);
            //callback();
            Array.prototype.push.apply(this, arguments);
            if (typeof callback === "function") {
                // Call it, since we have confirmed it is callable​
                callback();
            }
        };
        return arr;
    };
    TimeTable.prototype.teste = function () {
        console.log('oiii...');
    };
    TimeTable.prototype.callback = function () {
        console.log('sou eu callback');

        console.log('esperando um tempo...');
        //       this.addFromList(
        //            [{
        //              "horario":"c53",
        //              "turma":"MAT254",
        //              "periodo":"5/2016",
        //              "sigla":"AEDS13",
        //              "disciplina": "Algoritmos & Estrutura de Dados I",
        //              "professor":"Lucas Lattari"
        //   }]
        //            );
        _this.teste();
    };

    TimeTable.prototype.addFromList = function (my_object) {
        var arr = new MyArray(_this.callback);
        for (var x in my_object) {
            console.log('push: ', my_object[x]);
            arr.push(my_object[x]);
        }
        _this.dspList = _this.dspList.concat(arr);
        //this.updateTable();
        console.log('arrpushed: ', _this.dspList);
    };

    TimeTable.prototype.createTable = function () {

        //criando tablela 
        var tabela = document.createElement("table");
        tabela.setAttribute("id", "myTable");
        tabela.setAttribute('border', '0');
        tabela.setAttribute('cellpadding', '0');
        tabela.setAttribute('cellspacing', '0');
        document.getElementById('wrapper').appendChild(tabela);

        //criando linhas
        for (var j = 0; j < _this.horarios.length + 1; j++) {
            var line = document.createElement("tr");
            line.setAttribute("id", "myTr" + j);
            line.className = 'days';
            document.getElementById("myTable").appendChild(line);
        }
        //percorrer os dias da semana e adiconar à primeira linha, head of the table
        for (var d in _this.daysOfWeek) {
            var th = document.createElement("th");
            var cell = document.createTextNode(_this.daysOfWeek[d]);
            th.appendChild(cell);
            document.getElementById("myTr0").appendChild(th);
        }
        //cria colunas i e adiciona a Kth linha
        var lineID = 1;
        var cellID = 1;
        //percorre cada horario existente na grade de horarios e adiciona uma celula de
        //tempo para cada dia da semana.
        for (var ah = 0; ah < _this.horarios.length; ah++) {
            for (var col = 0; col < 7; col++) {
                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                if (col === 0) {
                    var td = document.createElement("td");
                    var cell = document.createTextNode(_this.horarios[ah]);
                    td.appendChild(cell);
                    td.className = 'time';
                    document.getElementById("myTr" + lineID).appendChild(td);
                    //caso contrario, apenas crie celulas de tempo vazias   
                } else {
                        var td = document.createElement("td");
                        td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                        var codigo = 'c' + cellID;
                        var materia_sigla = undefined;
                        var materia_nome = undefined;

                        //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                        if (_this.dspList.length > 0) {
                            for (var a = 0; a < _this.dspList.length; a++) {
                                // console.log(codigo);
                                if (_this.dspList[a].horario === codigo && _this.dspList[a].horario !== undefined) {
                                    materia_sigla = _this.dspList[a].sigla;
                                    materia_nome = _this.dspList[a].disciplina;
                                    //console.log('>> ',materia_sigla);
                                }
                            }
                        }
                        td.setAttribute('class', 'cell');
                        td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio '); // caso esteja definida adicionar atributo para o bal~ao.
                        var cell = document.createTextNode(materia_sigla ? materia_sigla : ' . '); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                        td.appendChild(cell);
                        document.getElementById("myTr" + lineID).appendChild(td);
                        cellID++;
                    }
            }
            lineID++;
        }
    };

    this.updateTable = function () {
        //  for (var a = 0; a < this.dspList.length; a++) {
        //      console.log('log: updateTable: ', this.dspList[a].horario, this.dspList[a].sigla );

        //  }
        for (var ah = 0; ah < _this.horarios.length; ah++) {
            for (var col = 0; col < 7; col++) {
                if (_this.dspList.length > 0) {
                    console.log('len: ', _this.dspList.length);
                    for (var a = 0; a < _this.dspList.length; a++) {
                        // console.log(codigo);
                        if (_this.dspList[a].horario) {
                            var cod = _this.dspList[a].horario;
                            console.log('cod: ', cod);
                            var t = document.getElementById('c17');
                            if (t === 'c17') {
                                t.style.fontSize = '30px';
                            }

                            //console.log('>> ', this.dspList[a].horario);

                            //materia_sigla = this.dspList[a].sigla;
                            //materia_nome = this.dspList[a].disciplina;
                        }
                    }
                }

                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                // if (col === 0){
                //     var td = document.createElement("td");
                //     var cell = document.createTextNode(this.horarios[ah]);
                //     td.appendChild(cell);
                //     td.className = 'time';
                //     document.getElementById("myTr" + lineID ).appendChild(td);
                // //caso contrario, apenas crie celulas de tempo vazias    
                // }else{
                //     var td = document.createElement("td");
                //     td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                //     let codigo = 'c' + cellID;
                //     let materia_sigla;
                //     let materia_nome;

                //     //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                //     if(this.dspList.length > 0){ 
                //         for (var a = 0; a < this.dspList.length; a++) {
                //            // console.log(codigo);
                //            if( (this.dspList[a].horario === codigo) && (this.dspList[a].horario !== undefined) ){
                //                materia_sigla = this.dspList[a].sigla;
                //                materia_nome = this.dspList[a].disciplina;
                //                 //console.log('>> ',materia_sigla);
                //            }

                //         }
                //     }
                //     td.setAttribute('class', 'cell');
                //     td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio ' ); // caso esteja definida adicionar atributo para o bal~ao.
                //     var cell = document.createTextNode(materia_sigla ? materia_sigla : ' . ' ); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                //     td.appendChild(cell);
                //     document.getElementById("myTr" + lineID ).appendChild(td);
                //     cellID++; 
                // }
            }
            //lineID++;
        }
    };

    this.alocateDisciplina = function () {};

    this.removeDisciplina = function () {};

    this.hoveringCheck = function () {};
};

exports["default"] = TimeTable;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXVsZXJhbHZhcmVuZ2EvY29kZXMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL2FwcC5qcyIsIi9Vc2Vycy9ldWxlcmFsdmFyZW5nYS9jb2Rlcy8xMDAtZGF5cy1vZi1jb2RlL2FwcC9zcmMvcG9pbnQuanMiLCIvVXNlcnMvZXVsZXJhbHZhcmVuZ2EvY29kZXMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL3RpbWV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLFNBQVM7Ozs7eUJBQ0wsYUFBYTs7OztBQUVuQyxJQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsSUFBTSxFQUFFLEdBQUcsdUJBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixJQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7QUFHbkUsSUFBTSxRQUFRLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRyxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzdOLElBQU0sQ0FBQyxHQUFHLDJCQUFjLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7OztBQUdyRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVmLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQzs7QUFFUixNQUFNLENBQUMsTUFBTSxHQUFH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LE1BQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBSTtBQUM1QixnQ0FBSSxHQUFHLEdBQUcsTUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xDLG1DQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMxQixnQ0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxnQ0FBSSxDQUFDLEtBQUssS0FBSyxFQUFDO0FBQ1osaUNBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQzs2QkFDN0I7Ozs7Ozt5QkFRSjtxQkFFSDtpQkFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUF1Q1I7O1NBRUo7S0FDTixDQUFBOztBQUVELFFBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFNLEVBQUUsQ0FBQTs7QUFFakMsUUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQU0sRUFBRSxDQUFBOztBQUVoQyxRQUFJLENBQUMsYUFBYSxHQUFHLFlBQU0sRUFBRSxDQUFBO0NBQzlCLENBQUM7O3FCQUVhLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgVGltZVRhYmxlIGZyb20gJy4vdGltZXRhYmxlJ1xuXG5jb25zdCBwMSA9IG5ldyBQb2ludCg1LCA1KTtcbmNvbnN0IHAyID0gbmV3IFBvaW50KDEwLCAxMCk7XG5jb25zdCB0ZXN0ZSA9IFtdO1xuY29uc3QgZGF5c09mV2VlayA9IFtcIkBcIiwgXCJNT05cIiwgXCJUVUVcIiwgXCJXRURcIiwgXCJUSFVcIiwgXCJGUklcIiwgXCJTQVRcIl07ICBcbi8vQnVnIGRldGVjdGFkbywgb3MgY29kaWdvcyBkYXMgbWF0ZWlyYXMgbiBlc3RhbyBmaXhvcywgZXg6IHNlIGV1IGFkaWNpb25hciB1bSBob3JhcmlvIGFudGVzIGRhcyA3aCBwb3IgZXhlbXBsbyBvIGNvZGlnbyBjMSBcbi8vcGFzc2EgYSBzZXIgbyBob3JhcmlvIHEgZXUgYWRpb25laSBhbnRlcy5cbmNvbnN0IGhvcmFyaW9zID0gWycwNzowMSAtIDA3OjU1JywgJzc6NTUgLSAwODo1MCcsICcwOToxMCAtIDEwOjA1JyAsICcxMDowNSAtIDExOjAwJywgJzEzOjAwIC0gMTM6NTUnLCAnMTM6NTUgLSAxNDo1MCcsICcxNToxMCAtIDE2OjA1JywgJzE2OjA1IC0gMTc6MDAnLCAnMTc6MDAtIDE4OjAwJywgJzE4OjMwIC0gMTk6MjUnLCAnMTk6MjUgLSAyMDoyMCcsICcyMDoyMCAtIDIyOjMwJ107XG5jb25zdCBwID0gbmV3IFRpbWVUYWJsZSh0ZXN0ZSwgZGF5c09mV2VlaywgaG9yYXJpb3MpO1xuLy8gY29uc29sZS5sb2coUG9pbnQuZGlzdGFuY2UocDEsIHAyKSk7XG4vL2NvbnNvbGUubG9nKHAuZ3JlZXRpbmcoKSxwLmlzRnJlZSk7XG5wLmluaXQoKTtcbmNvbnNvbGUubG9nKHApO1xuXG5sZXQgaT0wO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3QtaXRlbSA+IHNwYW4nKTtcblxuICAgICAgLy8gbG9vcCBwYXJhIGFkaWNpb25hciBsaXN0ZW5uZXJzIGFvcyBlbGVtZW50b3MgbGkgc2VsZWNpb25hZG9zLlxuICAgZm9yIChpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xuICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGdldEFkZHJlc3NlcywgZmFsc2UpO1xuICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgIGNsZWFyVGFyZ2V0LCBmYWxzZSk7XG4gICAgbGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgICAgYWRkVG9DYWxlbmRhciwgZmFsc2UpO1xuICB9XG59XG5cbmxldCBmcmVlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNsZWFyVGFyZ2V0KGV2KXtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgY29uc29sZS5sb2coXCJtb3VzZW91dFwiKTtcbiAgICBcbiAgICB2YXIgcG9zID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICB2YXIgYWRkciA9IHBvcy50cmltKCkuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy8gcGVyY29ycmUgY2FkYSBob3JhcmlvIGRhIGRpc2NpcGxpbmEgZSByZW1vdmUgYXMgY2xhc3Nlcy5cbiAgICBhZGRyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGFsdm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScrICdjb3JWZXJtZWxoYXxjb3JWZXJkZScgKyAnKD86XFxcXHN8JCknKSwgJyAnKTtcbiAgICB9KTtcbiAgfVxuXG5mdW5jdGlvbiBnZXRBZGRyZXNzZXMoIGV2ZW50ICkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwibW91c2VvdmVyXCIpO1xuICAgIFxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IEVudGVyJ3MgYWN0aW9uXG5cbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgIC8vcGVnYSBvIGF0dHIgcG9zaXRpb24gcGFyYSB2ZXJpZmljYXIgcXVhaXMgaG9yYXJpb3MgYSBkaXNjaXBsaW5hIGVzdMOhLlxuICAgIHZhciBwb3MgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgIGNvbnNvbGUubG9nKCdwb3MnLCBwb3MpO1xuXG4gICAgLy8gc2VwYXJhIG9zIGhvcsOhcmlvcyBlIGNvbG9jYSBlbSB1bSBhcnJheS5cbiAgICB2YXIgYWRkciA9IHBvcy50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgIGNvbnNvbGUubG9nKCdhZGRyOiAnLCBhZGRyKTtcblxuICAgIC8vIHBlcmNvcnJlIGEgbGlzdGEgZGUgaG9yYXJpb3MgZSBwYXJhIGNhZGEgZWxlbWVudG8gdmVyaWZpY2EgcXVhbCBvIHN0YXR1cyBkYSBkaXNjaXBsaW5hXG4gICAgYWRkci5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgdmFyIGFsdm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcblxuICAgICAgLy8gdmVyaWZpY2EgY2FkYSBkaXNjaXBsaW5hLCBzZSB2YXppYVxuICAgICAgaWYoYWx2by50ZXh0Q29udGVudCA9PT0gJyAuICcpe1xuICAgICAgICBhbHZvLmNsYXNzTmFtZSArPSBcIiBjb3JWZXJkZVwiOyAvLyBhZGljaW9uYSBhIGNsYXNzZSB2ZXJkZVxuICAgICAgICBmcmVlID0gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvL2Fsdm8uc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgICAgICBmcmVlID0gZmFsc2U7XG4gICAgICAgIGFsdm8uY2xhc3NOYW1lICs9IFwiIGNvclZlcm1lbGhhXCI7IC8vIGFkaWNpb25hIGEgY2xhc3NlIHZlcm1lbGhhXG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cblxuXG5mdW5jdGlvbiBhZGRUb0NhbGVuZGFyKCl7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbn1cbiIsImNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgY29uc3QgZHggPSBhLnggLSBiLng7XG4gICAgY29uc3QgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50OyIsIid1c2Ugc3RyaWMnXG5cbmZ1bmN0aW9uIFRpbWVUYWJsZSh0ZXN0ZSwgZGF5c09mV2VlayxhdWxhSG9yYXJpb3MpIHtcblxuICAvL3NldGFuZG8gb3MgZGlhcyBkYSBzZW1hbmFcbiAgdGhpcy5kYXlzT2ZXZWVrID0gZGF5c09mV2VlaztcbiAgdGhpcy5ob3JhcmlvcyAgID0gYXVsYUhvcmFyaW9zO1xuICB0aGlzLmRzcExpc3QgPSBbXTtcblxuICB0aGlzLnRlc3RlO1xuICB0aGlzLmlzRiA9IHRydWU7ICBcblxuXG5cbiAgVGltZVRhYmxlLnByb3RvdHlwZS5pbml0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5hZGRGcm9tTGlzdChbe1xuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImM0NFwiLFxuICAgICAgICAgICAgICAgICBcInR1cm1hXCI6XCJNQVQyNTRcIixcbiAgICAgICAgICAgICAgICAgXCJwZXJpb2RvXCI6XCI1LzIwMTZcIixcbiAgICAgICAgICAgICAgICAgXCJzaWdsYVwiOlwiRVRcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiJ0V0aWNhJ1wiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiTHVjYXMgTGF0dGFyaVwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImMxXCIsXG4gICAgICAgICAgICAgICAgIFwidHVybWFcIjpcIk1BVDI1NFwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjUvMjAxNlwiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJDQUxDM1wiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJDYWxjdWxvIElJSVwiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiTHVjYXMgTGF0dGFyaVwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImM0M1wiLFxuICAgICAgICAgICAgICAgICBcInR1cm1hXCI6XCJNQVQyNTRcIixcbiAgICAgICAgICAgICAgICAgXCJwZXJpb2RvXCI6XCI1LzIwMTZcIixcbiAgICAgICAgICAgICAgICAgXCJzaWdsYVwiOlwiRVVMRVJcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiQ2FsY3VsbyBJSUlcIixcbiAgICAgICAgICAgICAgICAgXCJwcm9mZXNzb3JcIjpcIkx1Y2FzIExhdHRhcmlcIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjMzNcIixcbiAgICAgICAgICAgICAgICAgXCJ0dXJtYVwiOlwiTUFUMjU0XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiNS8yMDE2XCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkNBTEMzXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIkNhbGN1bG8gSUlJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCJcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzE3XCIsXG4gICAgICAgICAgICAgICAgIFwidHVybWFcIjpcIk1BVDI1NFwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjUvMjAxNlwiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJhZWRzMlwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJBbGdvcml0bW9zICYgRXN0cnV0dXJhIGRlIERhZG9zIElJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCJcbiAgfV0pO1xuICAgICAgdGhpcy5jcmVhdGVUYWJsZSgpO1xuICAgIC8vICAgdGhpcy5hZGRGcm9tTGlzdChcbiAgICAvLyAgICAgICAgICAgIFt7XG4gICAgLy8gICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzUzXCIsXG4gICAgLy8gICAgICAgICAgICAgIFwidHVybWFcIjpcIk1BVDI1NFwiLFxuICAgIC8vICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjUvMjAxNlwiLFxuICAgIC8vICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJBRURTMTNcIixcbiAgICAvLyAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiQWxnb3JpdG1vcyAmIEVzdHJ1dHVyYSBkZSBEYWRvcyBJXCIsXG4gICAgLy8gICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCJcbiAgICAvLyAgIH1dXG4gICAgLy8gICAgICAgICAgICApO1xuICAgICAgXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGVzdGUpO1xuICB9XG4gXG5cbnZhciBNeUFycmF5ID0gKGNhbGxiYWNrKSA9PiB7IFxuICAgIHZhciBhcnIgPSBbXTtcbiAgICBhcnIucHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkknTSBQVVNISU5HPlwiLCBhcmd1bWVudHMpO1xuICAgICAgICAvL2NhbGxiYWNrKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyBDYWxsIGl0LCBzaW5jZSB3ZSBoYXZlIGNvbmZpcm1lZCBpdCBpcyBjYWxsYWJsZeKAi1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufTtcblRpbWVUYWJsZS5wcm90b3R5cGUudGVzdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29paWkuLi4nKTtcbn1cblRpbWVUYWJsZS5wcm90b3R5cGUuY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NvdSBldSBjYWxsYmFjaycpO1xuICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdlc3BlcmFuZG8gdW0gdGVtcG8uLi4nKTtcbiAgICAvLyAgICAgICB0aGlzLmFkZEZyb21MaXN0KFxuICAgIC8vICAgICAgICAgICAgW3tcbiAgICAvLyAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjNTNcIixcbiAgICAvLyAgICAgICAgICAgICAgXCJ0dXJtYVwiOlwiTUFUMjU0XCIsXG4gICAgLy8gICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiNS8yMDE2XCIsXG4gICAgLy8gICAgICAgICAgICAgIFwic2lnbGFcIjpcIkFFRFMxM1wiLFxuICAgIC8vICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJBbGdvcml0bW9zICYgRXN0cnV0dXJhIGRlIERhZG9zIElcIixcbiAgICAvLyAgICAgICAgICAgICAgXCJwcm9mZXNzb3JcIjpcIkx1Y2FzIExhdHRhcmlcIlxuICAgIC8vICAgfV1cbiAgICAvLyAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMudGVzdGUoKTtcbiAgICBcbn1cblxuICAgVGltZVRhYmxlLnByb3RvdHlwZS5hZGRGcm9tTGlzdCA9IChteV9vYmplY3QpID0+IHtcbiAgICAgIHZhciBhcnIgPSBuZXcgTXlBcnJheSh0aGlzLmNhbGxiYWNrKTtcbiAgICAgIGZvciAoIGxldCB4IGluIG15X29iamVjdCl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3B1c2g6ICcsIG15X29iamVjdFt4XSk7XG4gICAgICAgICAgYXJyLnB1c2gobXlfb2JqZWN0W3hdKTtcbiAgICAgIH1cbiAgICB0aGlzLmRzcExpc3QgPSB0aGlzLmRzcExpc3QuY29uY2F0KGFycik7XG4gICAgLy90aGlzLnVwZGF0ZVRhYmxlKCk7XG4gICAgY29uc29sZS5sb2coJ2FycnB1c2hlZDogJywgdGhpcy5kc3BMaXN0KTtcbiAgfTtcblxuICBUaW1lVGFibGUucHJvdG90eXBlLmNyZWF0ZVRhYmxlID0gKCkgPT4ge1xuXG4gICAgLy9jcmlhbmRvIHRhYmxlbGEgIFxuICAgIGxldCB0YWJlbGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGFiZWxhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlUYWJsZVwiKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKCdib3JkZXInLCcwJyk7XG4gICAgdGFiZWxhLnNldEF0dHJpYnV0ZSgnY2VsbHBhZGRpbmcnICwnMCcpO1xuICAgIHRhYmVsYS5zZXRBdHRyaWJ1dGUoJ2NlbGxzcGFjaW5nJywnMCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJykuYXBwZW5kQ2hpbGQodGFiZWxhKTtcblxuICAgIC8vY3JpYW5kbyBsaW5oYXNcbiAgICBmb3IgKHZhciBqPTA7IGogPCB0aGlzLmhvcmFyaW9zLmxlbmd0aCsxOyBqKyspe1xuICAgICAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlUclwiICsgaik7XG4gICAgICAgICAgICBsaW5lLmNsYXNzTmFtZSA9ICdkYXlzJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUYWJsZVwiKS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICB9XG4gICAgLy9wZXJjb3JyZXIgb3MgZGlhcyBkYSBzZW1hbmEgZSBhZGljb25hciDDoCBwcmltZWlyYSBsaW5oYSwgaGVhZCBvZiB0aGUgdGFibGVcbiAgICBmb3IoIHZhciBkIGluIHRoaXMuZGF5c09mV2Vlayl7XG4gICAgICAgIHZhciB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRheXNPZldlZWtbZF0pO1xuICAgICAgICB0aC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRyMFwiKS5hcHBlbmRDaGlsZCh0aCk7XG4gICAgfVxuICAgIC8vY3JpYSBjb2x1bmFzIGkgZSBhZGljaW9uYSBhIEt0aCBsaW5oYVxuICAgIHZhciBsaW5lSUQgPSAxO1xuICAgIHZhciBjZWxsSUQgPSAxO1xuICAgIC8vcGVyY29ycmUgY2FkYSBob3JhcmlvIGV4aXN0ZW50ZSBuYSBncmFkZSBkZSBob3JhcmlvcyBlIGFkaWNpb25hIHVtYSBjZWx1bGEgZGUgXG4gICAgLy90ZW1wbyBwYXJhIGNhZGEgZGlhIGRhIHNlbWFuYS5cbiAgICBmb3IgKHZhciBhaD0wOyBhaCA8IHRoaXMuaG9yYXJpb3MubGVuZ3RoOyBhaCsrKXtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbD0wOyBjb2w8NzsgY29sKyspe1xuICAgICAgICAgICAgICAgIC8vc2UgZm9yIGEgcHJpbWVpcmEgY2VsdWxhIGRhIGxpbmhhLCBhZGljaW9uYXIgbyBob3JhcmlvIHJlZmVyZW50ZVxuICAgICAgICAgICAgICAgIC8vY29uZGnDp8OjbyBuZWNlc3PDoXJpYSBwb2lzLCBhIHByaW1laXJhIGPDqWx1bGEgbsOjbyBwb2RlIHRlciBpZCByZWZlcmVudGUgYSBzdWEgcG9zacOnw6NvIHh5LlxuICAgICAgICAgICAgICAgIGlmIChjb2wgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5ob3Jhcmlvc1thaF0pO1xuICAgICAgICAgICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGQuY2xhc3NOYW1lID0gJ3RpbWUnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHJcIiArIGxpbmVJRCApLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgICAgICAvL2Nhc28gY29udHJhcmlvLCBhcGVuYXMgY3JpZSBjZWx1bGFzIGRlIHRlbXBvIHZhemlhcyAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjXCIgKyBjZWxsSUQpOyAvLyBzZXRhciBpZCDDoCBjw6lsdWxhIHJlZmVyZW50ZSDDoCBzdWEgcG9zacOnw6NvLlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2RpZ28gPSAnYycgKyBjZWxsSUQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhX3NpZ2xhO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYV9ub21lO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vdmVyaWZpY2Egc2UgaGEgZGlzY2lwbGluYXMgbm8gYXJyYXksIGNhc28gaGFqYSwgcGVyY29ycmVyIGFzIGRpc3BsaW5hcyBlIGFkaWNpb24nYWxhcyBlbSBzZXVzICBkZXZpZG9zIGx1Z2FyZXNcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kc3BMaXN0Lmxlbmd0aCA+IDApeyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZHNwTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29kaWdvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAodGhpcy5kc3BMaXN0W2FdLmhvcmFyaW8gPT09IGNvZGlnbykgJiYgKHRoaXMuZHNwTGlzdFthXS5ob3JhcmlvICE9PSB1bmRlZmluZWQpICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYV9zaWdsYSA9IHRoaXMuZHNwTGlzdFthXS5zaWdsYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhX25vbWUgPSB0aGlzLmRzcExpc3RbYV0uZGlzY2lwbGluYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnPj4gJyxtYXRlcmlhX3NpZ2xhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJywgbWF0ZXJpYV9ub21lID8gbWF0ZXJpYV9ub21lIDogJyB2YXppbyAnICk7IC8vIGNhc28gZXN0ZWphIGRlZmluaWRhIGFkaWNpb25hciBhdHJpYnV0byBwYXJhIG8gYmFsfmFvLlxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1hdGVyaWFfc2lnbGEgPyBtYXRlcmlhX3NpZ2xhIDogJyAuICcgKTsgLy8gY2FzbyBoYWphIG1hdGVyaWEgYWNpb25hciBvIG5vbWUsIHNlbn5hbyBhZGljaW9uYXIgdW0gdHJhw6dvLlxuICAgICAgICAgICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRyXCIgKyBsaW5lSUQgKS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJRCsrOyAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmVJRCsrO1xuICAgICAgICB9XG4gICAgXG4gIH1cbiAgXG4gIHRoaXMudXBkYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgICAgIC8vICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZHNwTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICAvLyAgICAgIGNvbnNvbGUubG9nKCdsb2c6IHVwZGF0ZVRhYmxlOiAnLCB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbywgdGhpcy5kc3BMaXN0W2FdLnNpZ2xhICk7XG4gICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gIH1cbiAgICAgIGZvciAodmFyIGFoPTA7IGFoIDwgdGhpcy5ob3Jhcmlvcy5sZW5ndGg7IGFoKyspe1xuICAgICAgICAgICAgZm9yICh2YXIgY29sPTA7IGNvbDw3OyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgIGlmKHRoaXMuZHNwTGlzdC5sZW5ndGggPiAwKXsgIFxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlbjogJywgdGhpcy5kc3BMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZHNwTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29kaWdvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAodGhpcy5kc3BMaXN0W2FdLmhvcmFyaW8gKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2QgPSB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29kOiAnLCBjb2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MxNycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAnYzE3Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc3R5bGUuZm9udFNpemUgPSAnMzBweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc+PiAnLCB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hdGVyaWFfc2lnbGEgPSB0aGlzLmRzcExpc3RbYV0uc2lnbGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXRlcmlhX25vbWUgPSB0aGlzLmRzcExpc3RbYV0uZGlzY2lwbGluYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9zZSBmb3IgYSBwcmltZWlyYSBjZWx1bGEgZGEgbGluaGEsIGFkaWNpb25hciBvIGhvcmFyaW8gcmVmZXJlbnRlXG4gICAgICAgICAgICAgICAgLy9jb25kacOnw6NvIG5lY2Vzc8OhcmlhIHBvaXMsIGEgcHJpbWVpcmEgY8OpbHVsYSBuw6NvIHBvZGUgdGVyIGlkIHJlZmVyZW50ZSBhIHN1YSBwb3Npw6fDo28geHkuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvbCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmhvcmFyaW9zW2FoXSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5jbGFzc05hbWUgPSAndGltZSc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiICsgbGluZUlEICkuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAgICAgICAgIC8vIC8vY2FzbyBjb250cmFyaW8sIGFwZW5hcyBjcmllIGNlbHVsYXMgZGUgdGVtcG8gdmF6aWFzICAgICBcbiAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNcIiArIGNlbGxJRCk7IC8vIHNldGFyIGlkIMOgIGPDqWx1bGEgcmVmZXJlbnRlIMOgIHN1YSBwb3Npw6fDo28uXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNvZGlnbyA9ICdjJyArIGNlbGxJRDtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IG1hdGVyaWFfc2lnbGE7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBtYXRlcmlhX25vbWU7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgLy92ZXJpZmljYSBzZSBoYSBkaXNjaXBsaW5hcyBubyBhcnJheSwgY2FzbyBoYWphLCBwZXJjb3JyZXIgYXMgZGlzcGxpbmFzIGUgYWRpY2lvbidhbGFzIGVtIHNldXMgIGRldmlkb3MgbHVnYXJlc1xuICAgICAgICAgICAgICAgIC8vICAgICBpZih0aGlzLmRzcExpc3QubGVuZ3RoID4gMCl7ICBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5kc3BMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2RpZ28pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgaWYoICh0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyA9PT0gY29kaWdvKSAmJiAodGhpcy5kc3BMaXN0W2FdLmhvcmFyaW8gIT09IHVuZGVmaW5lZCkgKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBtYXRlcmlhX3NpZ2xhID0gdGhpcy5kc3BMaXN0W2FdLnNpZ2xhO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIG1hdGVyaWFfbm9tZSA9IHRoaXMuZHNwTGlzdFthXS5kaXNjaXBsaW5hO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc+PiAnLG1hdGVyaWFfc2lnbGEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGQuc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnLCBtYXRlcmlhX25vbWUgPyBtYXRlcmlhX25vbWUgOiAnIHZhemlvICcgKTsgLy8gY2FzbyBlc3RlamEgZGVmaW5pZGEgYWRpY2lvbmFyIGF0cmlidXRvIHBhcmEgbyBiYWx+YW8uXG4gICAgICAgICAgICAgICAgLy8gICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWF0ZXJpYV9zaWdsYSA/IG1hdGVyaWFfc2lnbGEgOiAnIC4gJyApOyAvLyBjYXNvIGhhamEgbWF0ZXJpYSBhY2lvbmFyIG8gbm9tZSwgc2VufmFvIGFkaWNpb25hciB1bSB0cmHDp28uXG4gICAgICAgICAgICAgICAgLy8gICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHJcIiArIGxpbmVJRCApLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2VsbElEKys7ICBcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9saW5lSUQrKztcbiAgICAgICAgfVxuICB9XG5cbiAgdGhpcy5hbG9jYXRlRGlzY2lwbGluYSA9ICgpID0+IHt9XG5cbiAgdGhpcy5yZW1vdmVEaXNjaXBsaW5hID0gKCkgPT4ge31cblxuICB0aGlzLmhvdmVyaW5nQ2hlY2sgPSAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZVRhYmxlOyJdfQ==

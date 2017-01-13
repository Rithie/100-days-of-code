(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _point = require('./point');

var _point2 = _interopRequireDefault(_point);

var _timetable = require('./timetable');

var _timetable2 = _interopRequireDefault(_timetable);

var p1 = new _point2['default'](5, 5);
var p2 = new _point2['default'](10, 10);

var daysOfWeek = ["", "seg", "ter", "qua", "qui", "sex", "sab"];
var horarios = ['07:00 - 07:55', '7:55 - 08:50', '09:10 - 10:05', '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '18:30 - 19:25', '19:25 - 20:20', '20:20 - 22:00'];
var p = new _timetable2['default'](daysOfWeek, horarios);
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.drawTable();
console.log(p);

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
//'use stric'

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function TimeTable(daysOfWeek, aulaHorarios) {
    var _this = this;

    //setando os dias da semana
    this.daysOfWeek = daysOfWeek;
    this.horarios = aulaHorarios;
    this.dspList = [{
        "horario": "c1",
        "turma": "MAT254",
        "periodo": "5/2016",
        "sigla": "CALC3",
        "disciplina": "Calculo III",
        "professor": "Lucas Lattari"
    }, {
        "horario": "c33",
        "turma": "MAT254",
        "periodo": "5/2016",
        "sigla": "CALC3",
        "disciplina": "Calculo III",
        "professor": "Lucas Lattari"
    }];

    this.isF = true;
    //   this.name = {
    //     first,
    //     last
    //   };
    //   this.age = age;
    //   this.gender = gender;
    //   this.interests = interests;
    //   this.bio = function() {
    //     alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    //   };
    //   this.greeting = function() {
    //     alert('Hi! I\'m ' + this.name.first + '.');
    //   };
    //   this.isFree = function() {
    //       return this.isF;
    //   }

    this.init = function () {};

    this.addToList = function () {};

    this.drawTable = function () {

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
                        var cell = document.createTextNode(materia_sigla ? materia_sigla : ' - '); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                        td.appendChild(cell);
                        document.getElementById("myTr" + lineID).appendChild(td);
                        cellID++;
                    }
            }
            lineID++;
        }
    };

    this.drawList = function () {};

    this.alocateDisciplina = function () {};

    this.removeDisciplina = function () {};

    this.hoveringCheck = function () {};
};

exports["default"] = TimeTable;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUml0aGllNy9BcHBzLzEwMC1kYXlzLW9mLWNvZGUvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvUml0aGllNy9BcHBzLzEwMC1kYXlzLW9mLWNvZGUvYXBwL3NyYy9wb2ludC5qcyIsIi9Vc2Vycy9SaXRoaWU3L0FwcHMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL3RpbWV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLFNBQVM7Ozs7eUJBQ0wsYUFBYTs7OztBQUVuQyxJQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsSUFBTSxFQUFFLEdBQUcsdUJBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixJQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xFLElBQU0sUUFBUSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUcsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzdNLElBQU0sQ0FBQyxHQUFHLDJCQUFjLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7O0FBRzlDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNaVCxLQUFLO0FBQ0UsV0FEUCxLQUFLLENBQ0csQ0FBQyxFQUFFLENBQUMsRUFBRTswQkFEZCxLQUFLOztBQUVQLFFBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsUUFBSSxDQUFDLENBQUMsR0FB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bmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IFRpbWVUYWJsZSBmcm9tICcuL3RpbWV0YWJsZSdcblxuY29uc3QgcDEgPSBuZXcgUG9pbnQoNSwgNSk7XG5jb25zdCBwMiA9IG5ldyBQb2ludCgxMCwgMTApO1xuXG5jb25zdCBkYXlzT2ZXZWVrID0gW1wiXCIsIFwic2VnXCIsIFwidGVyXCIsIFwicXVhXCIsIFwicXVpXCIsIFwic2V4XCIsIFwic2FiXCJdOyAgXG5jb25zdCBob3JhcmlvcyA9IFsnMDc6MDAgLSAwNzo1NScsICc3OjU1IC0gMDg6NTAnLCAnMDk6MTAgLSAxMDowNScgLCAnMTA6MDUgLSAxMTowMCcsICcxMzowMCAtIDEzOjU1JywgJzEzOjU1IC0gMTQ6NTAnLCAnMTU6MTAgLSAxNjowNScsICcxNjowNSAtIDE3OjAwJywgJzE4OjMwIC0gMTk6MjUnLCAnMTk6MjUgLSAyMDoyMCcsICcyMDoyMCAtIDIyOjAwJ107XG5jb25zdCBwID0gbmV3IFRpbWVUYWJsZShkYXlzT2ZXZWVrLCBob3Jhcmlvcyk7XG4vLyBjb25zb2xlLmxvZyhQb2ludC5kaXN0YW5jZShwMSwgcDIpKTtcbi8vY29uc29sZS5sb2cocC5ncmVldGluZygpLHAuaXNGcmVlKTtcbnAuZHJhd1RhYmxlKCk7XG5jb25zb2xlLmxvZyhwKTsiLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzdGF0aWMgZGlzdGFuY2UoYSwgYikge1xuICAgIGNvbnN0IGR4ID0gYS54IC0gYi54O1xuICAgIGNvbnN0IGR5ID0gYS55IC0gYi55O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDsiLCIvLyd1c2Ugc3RyaWMnXG5cbmZ1bmN0aW9uIFRpbWVUYWJsZShkYXlzT2ZXZWVrLGF1bGFIb3Jhcmlvcykge1xuXG4gIC8vc2V0YW5kbyBvcyBkaWFzIGRhIHNlbWFuYVxuICB0aGlzLmRheXNPZldlZWsgPSBkYXlzT2ZXZWVrO1xuICB0aGlzLmhvcmFyaW9zICAgPSBhdWxhSG9yYXJpb3M7XG4gIHRoaXMuZHNwTGlzdCAgICA9IFt7XG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzFcIixcbiAgICAgICAgICAgICAgICAgXCJ0dXJtYVwiOlwiTUFUMjU0XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiNS8yMDE2XCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkNBTEMzXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIkNhbGN1bG8gSUlJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCJcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzMzXCIsXG4gICAgICAgICAgICAgICAgIFwidHVybWFcIjpcIk1BVDI1NFwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjUvMjAxNlwiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJDQUxDM1wiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJDYWxjdWxvIElJSVwiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiTHVjYXMgTGF0dGFyaVwiXG4gICAgICAgICAgICAgICB9XTtcblxuICBcbiAgdGhpcy5pc0YgPSB0cnVlOyAgXG4vLyAgIHRoaXMubmFtZSA9IHtcbi8vICAgICBmaXJzdCxcbi8vICAgICBsYXN0XG4vLyAgIH07XG4vLyAgIHRoaXMuYWdlID0gYWdlO1xuLy8gICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcbi8vICAgdGhpcy5pbnRlcmVzdHMgPSBpbnRlcmVzdHM7XG4vLyAgIHRoaXMuYmlvID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQodGhpcy5uYW1lLmZpcnN0ICsgJyAnICsgdGhpcy5uYW1lLmxhc3QgKyAnIGlzICcgKyB0aGlzLmFnZSArICcgeWVhcnMgb2xkLiBIZSBsaWtlcyAnICsgdGhpcy5pbnRlcmVzdHNbMF0gKyAnIGFuZCAnICsgdGhpcy5pbnRlcmVzdHNbMV0gKyAnLicpO1xuLy8gICB9O1xuLy8gICB0aGlzLmdyZWV0aW5nID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQoJ0hpISBJXFwnbSAnICsgdGhpcy5uYW1lLmZpcnN0ICsgJy4nKTtcbi8vICAgfTtcbi8vICAgdGhpcy5pc0ZyZWUgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgIHJldHVybiB0aGlzLmlzRjtcbi8vICAgfVxuXG5cbiAgdGhpcy5pbml0ID0gKCkgPT4ge31cblxuICB0aGlzLmFkZFRvTGlzdCA9ICgpID0+IHtcbiAgICAgIFxuICB9XG5cbiAgdGhpcy5kcmF3VGFibGUgPSAoKSA9PiB7XG5cbiAgICAvL2NyaWFuZG8gdGFibGVsYSAgXG4gICAgbGV0IHRhYmVsYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRhYmxlXCIpO1xuICAgIHRhYmVsYS5zZXRBdHRyaWJ1dGUoJ2JvcmRlcicsJzAnKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKCdjZWxscGFkZGluZycgLCcwJyk7XG4gICAgdGFiZWxhLnNldEF0dHJpYnV0ZSgnY2VsbHNwYWNpbmcnLCcwJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKS5hcHBlbmRDaGlsZCh0YWJlbGEpO1xuXG4gICAgLy9jcmlhbmRvIGxpbmhhc1xuICAgIGZvciAodmFyIGo9MDsgaiA8IHRoaXMuaG9yYXJpb3MubGVuZ3RoKzE7IGorKyl7XG4gICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRyXCIgKyBqKTtcbiAgICAgICAgICAgIGxpbmUuY2xhc3NOYW1lID0gJ2RheXMnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICAvL3BlcmNvcnJlciBvcyBkaWFzIGRhIHNlbWFuYSBlIGFkaWNvbmFyIMOgIHByaW1laXJhIGxpbmhhLCBoZWFkIG9mIHRoZSB0YWJsZVxuICAgIGZvciggdmFyIGQgaW4gdGhpcy5kYXlzT2ZXZWVrKXtcbiAgICAgICAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuZGF5c09mV2Vla1tkXSk7XG4gICAgICAgIHRoLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHIwXCIpLmFwcGVuZENoaWxkKHRoKTtcbiAgICB9XG4gICAgLy9jcmlhIGNvbHVuYXMgaSBlIGFkaWNpb25hIGEgS3RoIGxpbmhhXG4gICAgdmFyIGxpbmVJRCA9IDE7XG4gICAgdmFyIGNlbGxJRCA9IDE7XG4gICAgLy9wZXJjb3JyZSBjYWRhIGhvcmFyaW8gZXhpc3RlbnRlIG5hIGdyYWRlIGRlIGhvcmFyaW9zIGUgYWRpY2lvbmEgdW1hIGNlbHVsYSBkZSBcbiAgICAvL3RlbXBvIHBhcmEgY2FkYSBkaWEgZGEgc2VtYW5hLlxuICAgIGZvciAodmFyIGFoPTA7IGFoIDwgdGhpcy5ob3Jhcmlvcy5sZW5ndGg7IGFoKyspe1xuICAgICAgICAgICAgZm9yICh2YXIgY29sPTA7IGNvbDw3OyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgLy9zZSBmb3IgYSBwcmltZWlyYSBjZWx1bGEgZGEgbGluaGEsIGFkaWNpb25hciBvIGhvcmFyaW8gcmVmZXJlbnRlXG4gICAgICAgICAgICAgICAgLy9jb25kacOnw6NvIG5lY2Vzc8OhcmlhIHBvaXMsIGEgcHJpbWVpcmEgY8OpbHVsYSBuw6NvIHBvZGUgdGVyIGlkIHJlZmVyZW50ZSBhIHN1YSBwb3Npw6fDo28geHkuXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmhvcmFyaW9zW2FoXSk7XG4gICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSAndGltZSc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiKyBsaW5lSUQgKS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICAgICAgICAgICAgLy9jYXNvIGNvbnRyYXJpbywgYXBlbmFzIGNyaWUgY2VsdWxhcyBkZSB0ZW1wbyB2YXppYXMgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY1wiICsgY2VsbElEKTsgLy8gc2V0YXIgaWQgw6AgY8OpbHVsYSByZWZlcmVudGUgw6Agc3VhIHBvc2nDp8Ojby5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29kaWdvID0gJ2MnICsgY2VsbElEO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYV9zaWdsYTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFfbm9tZTtcblxuICAgICAgICAgICAgICAgICAgICAvL3ZlcmlmaWNhIHNlIGhhIGRpc2NpcGxpbmFzIG5vIGFycmF5LCBjYXNvIGhhamEsIHBlcmNvcnJlciBhcyBkaXNwbGluYXMgZSBhZGljaW9uJ2FsYXMgZW0gc2V1cyAgZGV2aWRvcyBsdWdhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZHNwTGlzdC5sZW5ndGggPiAwKXsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmRzcExpc3QubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvZGlnbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggKHRoaXMuZHNwTGlzdFthXS5ob3JhcmlvID09PSBjb2RpZ28pICYmICh0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyAhPT0gdW5kZWZpbmVkKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFfc2lnbGEgPSB0aGlzLmRzcExpc3RbYV0uc2lnbGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYV9ub21lID0gdGhpcy5kc3BMaXN0W2FdLmRpc2NpcGxpbmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJz4+ICcsbWF0ZXJpYV9zaWdsYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIG1hdGVyaWFfbm9tZSA/IG1hdGVyaWFfbm9tZSA6ICcgdmF6aW8gJyApOyAvLyBjYXNvIGVzdGVqYSBkZWZpbmlkYSBhZGljaW9uYXIgYXRyaWJ1dG8gcGFyYSBvIGJhbH5hby5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXRlcmlhX3NpZ2xhID8gbWF0ZXJpYV9zaWdsYSA6ICcgLSAnICk7IC8vIGNhc28gaGFqYSBtYXRlcmlhIGFjaW9uYXIgbyBub21lLCBzZW5+YW8gYWRpY2lvbmFyIHVtIHRyYcOnby5cbiAgICAgICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiICsgbGluZUlEICkuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsSUQrKzsgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lSUQrKztcbiAgICAgICAgfVxuICAgIFxuICB9XG5cbiAgdGhpcy5kcmF3TGlzdCA9ICgpID0+IHt9XG5cbiAgdGhpcy5hbG9jYXRlRGlzY2lwbGluYSA9ICgpID0+IHt9XG5cbiAgdGhpcy5yZW1vdmVEaXNjaXBsaW5hID0gKCkgPT4ge31cblxuICB0aGlzLmhvdmVyaW5nQ2hlY2sgPSAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZVRhYmxlOyJdfQ==

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
                        td.setAttribute('class', 'cell');
                        td.setAttribute('data-tooltip', 'vazio');
                        var cell = document.createTextNode("cell" + col);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUml0aGllNy9BcHBzLzEwMC1kYXlzLW9mLWNvZGUvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvUml0aGllNy9BcHBzLzEwMC1kYXlzLW9mLWNvZGUvYXBwL3NyYy9wb2ludC5qcyIsIi9Vc2Vycy9SaXRoaWU3L0FwcHMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL3RpbWV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLFNBQVM7Ozs7eUJBQ0wsYUFBYTs7OztBQUVuQyxJQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsSUFBTSxFQUFFLEdBQUcsdUJBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixJQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xFLElBQU0sUUFBUSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUcsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzdNLElBQU0sQ0FBQyxHQUFHLDJCQUFjLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7O0FBRzlDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1hSLEtBQUs7QUFDRSxXQURQLEtBQUssQ0FDRyxDQUFDLEVBQUUsQ0FBQyxFQUFFOzBCQURkLEtBQUs7O0FBRVAsUUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWCxRQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNaOztlQUpHLEtBQUs7O1dBTU0sa0JBQUMs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c291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgVGltZVRhYmxlIGZyb20gJy4vdGltZXRhYmxlJ1xuXG5jb25zdCBwMSA9IG5ldyBQb2ludCg1LCA1KTtcbmNvbnN0IHAyID0gbmV3IFBvaW50KDEwLCAxMCk7XG5cbmNvbnN0IGRheXNPZldlZWsgPSBbXCJcIiwgXCJzZWdcIiwgXCJ0ZXJcIiwgXCJxdWFcIiwgXCJxdWlcIiwgXCJzZXhcIiwgXCJzYWJcIl07ICBcbmNvbnN0IGhvcmFyaW9zID0gWycwNzowMCAtIDA3OjU1JywgJzc6NTUgLSAwODo1MCcsICcwOToxMCAtIDEwOjA1JyAsICcxMDowNSAtIDExOjAwJywgJzEzOjAwIC0gMTM6NTUnLCAnMTM6NTUgLSAxNDo1MCcsICcxNToxMCAtIDE2OjA1JywgJzE2OjA1IC0gMTc6MDAnLCAnMTg6MzAgLSAxOToyNScsICcxOToyNSAtIDIwOjIwJywgJzIwOjIwIC0gMjI6MDAnXTtcbmNvbnN0IHAgPSBuZXcgVGltZVRhYmxlKGRheXNPZldlZWssIGhvcmFyaW9zKTtcbi8vIGNvbnNvbGUubG9nKFBvaW50LmRpc3RhbmNlKHAxLCBwMikpO1xuLy9jb25zb2xlLmxvZyhwLmdyZWV0aW5nKCkscC5pc0ZyZWUpO1xucC5kcmF3VGFibGUoKTtcbiIsImNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgY29uc3QgZHggPSBhLnggLSBiLng7XG4gICAgY29uc3QgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50OyIsIi8vJ3VzZSBzdHJpYydcblxuZnVuY3Rpb24gVGltZVRhYmxlKGRheXNPZldlZWssYXVsYUhvcmFyaW9zKSB7XG5cbiAgLy9zZXRhbmRvIG9zIGRpYXMgZGEgc2VtYW5hXG4gIHRoaXMuZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gIHRoaXMuaG9yYXJpb3MgICA9IGF1bGFIb3JhcmlvcztcbiAgXG4gIHRoaXMuaXNGID0gdHJ1ZTsgIFxuLy8gICB0aGlzLm5hbWUgPSB7XG4vLyAgICAgZmlyc3QsXG4vLyAgICAgbGFzdFxuLy8gICB9O1xuLy8gICB0aGlzLmFnZSA9IGFnZTtcbi8vICAgdGhpcy5nZW5kZXIgPSBnZW5kZXI7XG4vLyAgIHRoaXMuaW50ZXJlc3RzID0gaW50ZXJlc3RzO1xuLy8gICB0aGlzLmJpbyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KHRoaXMubmFtZS5maXJzdCArICcgJyArIHRoaXMubmFtZS5sYXN0ICsgJyBpcyAnICsgdGhpcy5hZ2UgKyAnIHllYXJzIG9sZC4gSGUgbGlrZXMgJyArIHRoaXMuaW50ZXJlc3RzWzBdICsgJyBhbmQgJyArIHRoaXMuaW50ZXJlc3RzWzFdICsgJy4nKTtcbi8vICAgfTtcbi8vICAgdGhpcy5ncmVldGluZyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KCdIaSEgSVxcJ20gJyArIHRoaXMubmFtZS5maXJzdCArICcuJyk7XG4vLyAgIH07XG4vLyAgIHRoaXMuaXNGcmVlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICByZXR1cm4gdGhpcy5pc0Y7XG4vLyAgIH1cblxuXG4gIHRoaXMuaW5pdCA9ICgpID0+IHt9XG5cbiAgdGhpcy5kcmF3VGFibGUgPSAoKSA9PiB7XG5cbiAgICAvL2NyaWFuZG8gdGFibGVsYSAgXG4gICAgbGV0IHRhYmVsYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRhYmxlXCIpO1xuICAgIHRhYmVsYS5zZXRBdHRyaWJ1dGUoJ2JvcmRlcicsJzAnKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKCdjZWxscGFkZGluZycgLCcwJyk7XG4gICAgdGFiZWxhLnNldEF0dHJpYnV0ZSgnY2VsbHNwYWNpbmcnLCcwJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKS5hcHBlbmRDaGlsZCh0YWJlbGEpO1xuXG4gICAgLy9jcmlhbmRvIGxpbmhhc1xuICAgIGZvciAodmFyIGo9MDsgaiA8IHRoaXMuaG9yYXJpb3MubGVuZ3RoKzE7IGorKyl7XG4gICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRyXCIgKyBqKTtcbiAgICAgICAgICAgIGxpbmUuY2xhc3NOYW1lID0gJ2RheXMnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICAvL3BlcmNvcnJlciBvcyBkaWFzIGRhIHNlbWFuYSBlIGFkaWNvbmFyIMOgIHByaW1laXJhIGxpbmhhLCBoZWFkIG9mIHRoZSB0YWJsZVxuICAgIGZvciggdmFyIGQgaW4gdGhpcy5kYXlzT2ZXZWVrKXtcbiAgICAgICAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuZGF5c09mV2Vla1tkXSk7XG4gICAgICAgIHRoLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHIwXCIpLmFwcGVuZENoaWxkKHRoKTtcbiAgICB9XG4gICAgLy9jcmlhIGNvbHVuYXMgaSBlIGFkaWNpb25hIGEgS3RoIGxpbmhhXG4gICAgdmFyIGxpbmVJRCA9IDE7XG4gICAgdmFyIGNlbGxJRCA9IDE7XG4gICAgLy9wZXJjb3JyZSBjYWRhIGhvcmFyaW8gZXhpc3RlbnRlIG5hIGdyYWRlIGRlIGhvcmFyaW9zIGUgYWRpY2lvbmEgdW1hIGNlbHVsYSBkZSBcbiAgICAvL3RlbXBvIHBhcmEgY2FkYSBkaWEgZGEgc2VtYW5hLlxuICAgIGZvciAodmFyIGFoPTA7IGFoIDwgdGhpcy5ob3Jhcmlvcy5sZW5ndGg7IGFoKyspe1xuICAgICAgICAgICAgZm9yICh2YXIgY29sPTA7IGNvbDw3OyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgLy9zZSBmb3IgYSBwcmltZWlyYSBjZWx1bGEgZGEgbGluaGEsIGFkaWNpb25hciBvIGhvcmFyaW8gcmVmZXJlbnRlXG4gICAgICAgICAgICAgICAgLy9jb25kacOnw6NvIG5lY2Vzc8OhcmlhIHBvaXMsIGEgcHJpbWVpcmEgY8OpbHVsYSBuw6NvIHBvZGUgdGVyIGlkIHJlZmVyZW50ZSBhIHN1YSBwb3Npw6fDo28geHkuXG4gICAgICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmhvcmFyaW9zW2FoXSk7XG4gICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB0ZC5jbGFzc05hbWUgPSAndGltZSc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiKyBsaW5lSUQgKS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICAgICAgICAgICAgLy9jYXNvIGNvbnRyYXJpbywgYXBlbmFzIGNyaWUgY2VsdWxhcyBkZSB0ZW1wbyB2YXppYXMgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY1wiICsgY2VsbElEKTsgLy8gc2V0YXIgaWQgw6AgY8OpbHVsYSByZWZlcmVudGUgw6Agc3VhIHBvc2nDp8Ojby5cbiAgICAgICAgICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJywndmF6aW8nKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcImNlbGxcIiArIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHJcIiArIGxpbmVJRCApLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbElEKys7ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZUlEKys7XG4gICAgICAgIH1cbiAgICBcbiAgfVxuXG4gIHRoaXMuZHJhd0xpc3QgPSAoKSA9PiB7fVxuXG4gIHRoaXMuYWxvY2F0ZURpc2NpcGxpbmEgPSAoKSA9PiB7fVxuXG4gIHRoaXMucmVtb3ZlRGlzY2lwbGluYSA9ICgpID0+IHt9XG5cbiAgdGhpcy5ob3ZlcmluZ0NoZWNrID0gKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVUYWJsZSJdfQ==

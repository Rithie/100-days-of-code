//'use stric'

function TimeTable(daysOfWeek,aulaHorarios) {

  //setando os dias da semana
  this.daysOfWeek = daysOfWeek;
  this.horarios   = aulaHorarios;
  this.dspList    = [{
                 "horario":"c1",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"CALC3",
                 "disciplina": "Calculo III",
                 "professor":"Lucas Lattari"
               },
               {
                 "horario":"c33",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"CALC3",
                 "disciplina": "Calculo III",
                 "professor":"Lucas Lattari"
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


  this.init = () => {}

  this.addToList = () => {
      
  }

  this.drawTable = () => {

    //criando tablela  
    let tabela = document.createElement("table");
    tabela.setAttribute("id", "myTable");
    tabela.setAttribute('border','0');
    tabela.setAttribute('cellpadding' ,'0');
    tabela.setAttribute('cellspacing','0');
    document.getElementById('wrapper').appendChild(tabela);

    //criando linhas
    for (var j=0; j < this.horarios.length+1; j++){
            let line = document.createElement("tr");
            line.setAttribute("id", "myTr" + j);
            line.className = 'days';
            document.getElementById("myTable").appendChild(line);
    }
    //percorrer os dias da semana e adiconar à primeira linha, head of the table
    for( var d in this.daysOfWeek){
        var th = document.createElement("th");
        var cell = document.createTextNode(this.daysOfWeek[d]);
        th.appendChild(cell);
        document.getElementById("myTr0").appendChild(th);
    }
    //cria colunas i e adiciona a Kth linha
    var lineID = 1;
    var cellID = 1;
    //percorre cada horario existente na grade de horarios e adiciona uma celula de 
    //tempo para cada dia da semana.
    for (var ah=0; ah < this.horarios.length; ah++){
            for (var col=0; col<7; col++){
                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                if (col === 0){
                    var td = document.createElement("td");
                    var cell = document.createTextNode(this.horarios[ah]);
                    td.appendChild(cell);
                    td.className = 'time';
                    document.getElementById("myTr"+ lineID ).appendChild(td);
                //caso contrario, apenas crie celulas de tempo vazias     
                }else{
                    var td = document.createElement("td");
                    td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                    let codigo = 'c' + cellID;
                    let materia_sigla;
                    let materia_nome;

                    //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                    if(this.dspList.length > 0){  
                        for (var a = 0; a < this.dspList.length; a++) {
                           // console.log(codigo);
                           if( (this.dspList[a].horario === codigo) && (this.dspList[a].horario !== undefined) ){
                               materia_sigla = this.dspList[a].sigla;
                               materia_nome = this.dspList[a].disciplina;
                                //console.log('>> ',materia_sigla);
                           }
                                
                        }
                    }
                    td.setAttribute('class', 'cell');
                    td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio ' ); // caso esteja definida adicionar atributo para o bal~ao.
                    var cell = document.createTextNode(materia_sigla ? materia_sigla : ' - ' ); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                    td.appendChild(cell);
                    document.getElementById("myTr" + lineID ).appendChild(td);
                    cellID++;  
                }
              
            }
            lineID++;
        }
    
  }

  this.drawList = () => {}

  this.alocateDisciplina = () => {}

  this.removeDisciplina = () => {}

  this.hoveringCheck = () => {}
};

export default TimeTable;
'use stric'

function TimeTable(teste, daysOfWeek,aulaHorarios) {

  //setando os dias da semana
  this.daysOfWeek = daysOfWeek;
  this.horarios   = aulaHorarios;
  this.dspList = [];

  this.teste;
  this.isF = true;  



  TimeTable.prototype.init = () => {
      this.addFromList([{
                 "horario":"c44",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"ET",
                 "disciplina": "'Etica'",
                 "professor":"Lucas Lattari"
               },
               {
                 "horario":"c1",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"CALC3",
                 "disciplina": "Calculo III",
                 "professor":"Lucas Lattari"
               },
               {
                 "horario":"c43",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"EULER",
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
               },
               {
                 "horario":"c17",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"aeds2",
                 "disciplina": "Algoritmos & Estrutura de Dados II",
                 "professor":"Lucas Lattari"
  }]);
      this.createTable();
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
  }
 

var MyArray = (callback) => { 
    var arr = [];
    arr.push = function() {
        console.log("I'M PUSHING>", arguments);
        //callback();
        Array.prototype.push.apply(this, arguments);
        if (typeof callback === "function") {
        // Call it, since we have confirmed it is callable​
            callback();
        }
    }
    return arr;
};
TimeTable.prototype.teste = () => {
    console.log('oiii...');
}
TimeTable.prototype.callback = () => {
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
        this.teste();
    
}

   TimeTable.prototype.addFromList = (my_object) => {
      var arr = new MyArray(this.callback);
      for ( let x in my_object){
          console.log('push: ', my_object[x]);
          arr.push(my_object[x]);
      }
    this.dspList = this.dspList.concat(arr);
    //this.updateTable();
    console.log('arrpushed: ', this.dspList);
  };

  TimeTable.prototype.createTable = () => {

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
                    document.getElementById("myTr" + lineID ).appendChild(td);
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
                    var cell = document.createTextNode(materia_sigla ? materia_sigla : ' . ' ); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                    td.appendChild(cell);
                    document.getElementById("myTr" + lineID ).appendChild(td);
                    cellID++;  
                }
              
            }
            lineID++;
        }
    
  }
  
  this.updateTable = () => {
        //  for (var a = 0; a < this.dspList.length; a++) {
        //      console.log('log: updateTable: ', this.dspList[a].horario, this.dspList[a].sigla );
             

        //  }
      for (var ah=0; ah < this.horarios.length; ah++){
            for (var col=0; col<7; col++){
                 if(this.dspList.length > 0){  
                     console.log('len: ', this.dspList.length);
                        for (var a = 0; a < this.dspList.length; a++) {
                           // console.log(codigo);
                           if( (this.dspList[a].horario ) ){
                               let cod = this.dspList[a].horario;
                               console.log('cod: ', cod);
                               var t = document.getElementById('c17');
                               if (t === 'c17'){
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
  }

  this.alocateDisciplina = () => {}

  this.removeDisciplina = () => {}

  this.hoveringCheck = () => {}
};

export default TimeTable;
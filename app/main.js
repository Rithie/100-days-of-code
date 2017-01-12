/*
	100Daysofcoding
	App Rematricula
	Euler Alvarenga
*/
var free = false;
calendario = [
               {
                 "horario":"a1",
                 "turma":"0089",
                 "periodo":"5/2016",
                 "disciplina": "matematica",
                 "professor":"Lucas Lattari"
               },
               {
                  "horario":"a1",
                  "turma":"0039",
                  "periodo":"5/2016",
                  "disciplina": "sistemas operacionais",
                  "professor":"Lucas Lattari"
               },
               {
                  "horario":"a3",
                  "turma":"0089",
                  "periodo":"5/2016",
                  "disciplina": "ia",
                  "professor":"mauricio"
               }
            ]
horarioaluno = [];

var MyArray = function() {
    var arr = [];
    arr.push = function() {
        console.log("PUSHING", arguments);
        return Array.prototype.push.apply(this, arguments);
        
        
    }

    return arr;
};

var arr = new MyArray;

// console.log(horarioaluno);
// horarioaluno.push(calendario[1]);
// if(horarioaluno[0].horario === calendario[0].horario)
//     console.log('mesmo horario');
// var galleryRef = document.getElementsByTagName('li')[4].getAttribute('horario');

// quando a página carregar >>
window.addEventListener('load', function(){
  myFunction();
  console.log('fui chamada');
  // selecionar todos os elementos <li> que tenham a classe list-item
  var lis = document.querySelectorAll('li.list-item');

  // loop para adicionar listenners aos elementos li selecionados.
   for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", getAddresses, false);
    lis[i].addEventListener("mouseout",  clearTarget, false);
    lis[i].addEventListener("click",     addToCalendar, false);
  }

  function addToCalendar(event){
    var overlayDiv = document.getElementById('overlay')
    //se não houver conflitos, adicionar na grade.
    if (free){
      var dis = event.target.getAttribute('d-rec');
      console.log(dis);
      console.log(free);

      var pos = event.target.getAttribute('position');

      // separa os horários e coloca em um array.
      var addr = pos.split(" ");
      
      // adiconar materia ao array (hardcoded data for now)
      arr.push({
                 "horario":"a1",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"CALC3",
                 "disciplina": "Calculo III",
                 "professor":"Lucas Lattari"
               });
      //myFunction(arr[0]);
      // adiciona disciplina na grade
      document.getElementById(addr).textContent = dis;  
      // seta cor de fundo. Futuramente setar cores aleatórias
      document.getElementById(addr).style.background = '#93bfcc'; 

      overlayDiv.style.display = 'block'; // tornar visivel mensagem de sucesso
      overlayDiv.textContent = 'Adicionado com sucesso!'; // adicionar mensagem de sucesso
      // reset the color after a small amount of time
      setTimeout(function() {
          document.getElementById('overlay').style.display = 'none';
      }, 1000);

    // casa haja algum conflito,  
    }else{
      overlayDiv.style.display = 'block'; // tornar visivel mensagem de erro
      overlayDiv.textContent = 'Conflito de Horários!'; // adicionar mensagem de erro
      overlayDiv.style.background = 'rgba(231,76,60,0.93)'; // setar cor.
      // reset the color after a small amount of time
      setTimeout(function() {
          overlayDiv.style.display = 'none';
      }, 1000);
    }

  }

  // essa função executa quando o mouse está fora da lista retirando as classes
  // aplicadas na função getAddresses.
  function clearTarget(ev){

    var pos = ev.target.getAttribute('position');
    var addr = pos.split(" ");

    // percorre cada horario da disciplina e remove as classes.
    addr.forEach(function(element) {
      var alvo = document.getElementById(element).className =
                    document.getElementById(element).className
                            .replace(new RegExp('(?:^|\\s)'+ 'corVermelha|corVerde' + '(?:\\s|$)'), ' ');
    });
  }

  // Esta função marca a célula de acordo com seu status, se vazia, colore de verde
  // se estiver preenchida, colore de vermelho.
  function getAddresses( event ) {

    event.preventDefault();  // prevent the default Enter's action

    console.log(event.target);
    //pega o attr position para verificar quais horarios a disciplina está.
    var pos = event.target.getAttribute('position');


    // separa os horários e coloca em um array.
    var addr = pos.split(" ");

    // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
    addr.forEach(function(element) {

      var alvo = document.getElementById(element);

      // verifica cada disciplina, se vazia
      if(alvo.textContent === ''){
        alvo.className += " corVerde"; // adiciona a classe verde
        free = true;
      }else{
        //alvo.style.background = 'red';
        free = false;
        alvo.className += " corVermelha"; // adiciona a classe vermelha
      }

    });

  }


	// for (var key in calendario) {
	// 	  console.log("Celula " + calendario[key].horario); // "User john is #234"
	// 		console.log("Disciplina " + calendario[key].disciplina); // "User john is #234"
	//     console.log("Professor " + calendario[key].professor + " is #" + key); // "User john is #234"
	// }
	//var listroot = document.getElementsByClassName('todo-list');
  // var newLi = document.createElement('li');   // criar um item da lista.
  //     newLi.className = 'todo-item'; // atribuir css class ao elemento.
  //     //var txt = document.createTextNode(" This text was added to the DIV.");
  //     newLi.innerHTML = '<b>God is good</b>';
  //     document.getElementsByClassName('todo-list').appendChild(newLi);

  function drawList() {

      // se o array estiver vazio, não desenhar
      if( horarioaluno.length !== 0){
          var para = document.createElement("tr");
          var t = document.createTextNode("This is a paragraph.");
          para.appendChild(t);
          //para.className('info');
          para.setAttribute('href', 'mypage.htm');
          para.innerHTML = '<td><span class="glyphicon glyphicon-star"></span> '+ horario[key].turma +'</td><td>'+ horario[key].periodo +'</td><td>' + horario[key].disciplina +'</td><td class="remove-buttom" title="remover disciplina">[x]</td>';
          document.getElementById('dsp-list').appendChild(para);
          //add o event listener ao botão que remove a disciplina.
          document.querySelector('.remove-buttom').addEventListener('click', msg, false);
      }
      //
      else{
        console.log('vazio');
         var el = document.createElement("p");
         var text = document.createTextNode("Grade de horários vazia.");
         el.appendChild(text);
         document.getElementById('dsp-list').appendChild(el);
      }
      //  for( var key in horarioaluno ) {

          
      // }
      }
      function msg(){
        alert('oi');
      }


  //var removes = document.getElementsByClassName('remove');
  // function addFromData(){
  //   var list1 = document.querySelector('ul.dcp-list'); // pegar referencia do elemento ul.
  //
  //
  //
  //
  //   console.log('oi');
  //
  // }
//adicionando eventos
	// document.getElementById('add-item').addEventListener('click', addItem, false);
	// document.querySelector('.todo-list').addEventListener('click', toggleCompleted, false);
	// document.querySelector('.todo-list').addEventListener('click', removeItem, false);

	// Step 2
	// - If the user presses the enter key, perform the same action as clicking the plus button.
	// var item2 = document.getElementById('new-item-text'); // take the element
	// item2.addEventListener('keydown', function(e) {       // add an event listener to keyboard
  //
	// 	// STEP 3
	// 	// - Check input field
	// 	if(e.keyCode == 13 ) {                            							// test if the key pressed is the Enter
	// 		//check input field
	// 		if (item2.value !== ''){					  						    // test if the item's value isn't empty
	// 		e.preventDefault();                           						    // prevent the default Enter's action
	// 		addItem();                                    							// call the function to add the  item
  //
	// 		}
	// 	}
	// }, false);

	// STEP 4
	// - When the user clicks on the heading show a prompt to allow them to change the title.
	// Make sure they entered something before changing it.

// 	var heading = document.getElementsByTagName('h1')[0]; // get the h1 element
// 	heading.addEventListener('click', function(){		  // add a event to h1
// 		var n = prompt("Hello, type a new title");        // show the prompt to insert a new title
// 		if (n !== ''){									  // test if it was entered something
// 			heading.innerHTML = n;						  // assign the new title to the h1
// 		}
// 	}, false);
//
// //STEP 1
// 	function toggleCompleted(e) {
// 		console.log('=' + e.target.className);
// 		if(e.target.className.indexOf('todo-item') < 0) {
// 			return;
// 		}
// 		console.log(e.target.className.indexOf('completed'));
// 		if(e.target.className.indexOf('completed') > -1) {
// 			console.log(' ' + e.target.className);
// 			e.target.className = e.target.className.replace(' completed', '');
// 		} else {
// 			console.log('-' + e.target.className);
// 			e.target.className += ' completed';
// 		}
// 	}
// 	function addItem() {
// 		var item = document.getElementById('new-item-text');
// 		var newItem = item.value;
// 		var list = document.querySelector('ul.todo-list');
//
// 		// STEP 3
// 		// - Check to make sure that the user entered something into the input field
// 		if (item.value !== ''){		// test if the item's value isn't empty
// 			var newListItem = document.createElement('li');
// 			newListItem.className = 'todo-item';
// 			newListItem.innerHTML = newItem + '<span class="remove"></span>';
// 			list.insertBefore(newListItem, document.querySelector('.todo-new'));
// 			// STEP 1
// 			// - After inserting a new item, clear the input field.
// 			item.value = ''; // just add a empty value o the element
//
// 		}
// 	}
//
//
// 	function removeItem(e) {
// 		if(e.target.className.indexOf('remove') < 0) {
// 			return;
// 		}
// 		var el = e.target.parentNode;
// 		el.parentNode.removeChild(el);
// 	}

});

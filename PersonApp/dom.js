'use strict';

var personsList = [{"name":"Giacomo Guilizzoni", "job":"Founder & CEO", "age":"34", "nick":"Peldi", "employee":true},
{"name":"Guido Jach Guilizzoni", "job":"", "age":"4", "nick":"The Guids", "employee":false},
{"name":"Marco Botton", "job":"Tuttofare", "age":"31", "nick":"", "employee":true},
{"name":"Mariah Maclachlan", "job":"Better Half", "age":"35", "nick":"Patata", "employee":true},
{"name":"Julianne Liss", "job":"Concrete Engineering Technician", "age":"51", "nick":"Jul", "employee":true},
{"name":"Venus Drey", "job":"Construction Ironworker Helper", "age":"28", "nick":"Venus", "employee":true},
{"name":"Elin Kalman", "job":"Sensor Operator", "age":"43", "nick":"Elin", "employee":true},
{"name":"Tyler Zeledon", "job":"Airport Manager", "age":"31", "nick":"Ty", "employee":true},
{"name":"Nydia Mothershed", "job":"Regional Planner", "age":"49", "nick":"Mom", "employee":true},
{"name":"Margrett Miguez", "job":"University Librarian", "age":"42", "nick":"Margie", "employee":true},
{"name":"Del Henriquez", "job":"Cargo Agent", "age":"40", "nick":"Del :)", "employee":true},
{"name":"Jannette Acres", "job":"Public Health Social Worker", "age":"50", "nick":"Janie", "employee":false},
{"name":"Un Hance", "job":"Deboner", "age":"28", "nick":"UNHCR", "employee":true},
{"name":"Erich Krogh", "job":"Low Altitude Air Defense Officer", "age":"25", "nick":"Erik", "employee":true},
{"name":"Devora Wight", "job":"Commercial Credit Reviewer", "age":"38", "nick":"Debbie", "employee":true},
{"name":"Alphonse Burbidge", "job":"Geographer", "age":"31", "nick":"Alphie", "employee":true},
{"name":"Naomi Mcquaig", "job":"Traffic Line Painter", "age":"49", "nick":"Naomi", "employee":false},
{"name":"Benton Cora", "job":"Interior Surface Insulation Worker", "age":"44", "nick":"Bent", "employee":true},
{"name":"Mark Stringer", "job":"Aoc Director Combat Plans Officer", "age":"55", "nick":"Stingie", "employee":true},
{"name":"Giacomo Guilizzoni", "job":"COO, WOW! Division", "age":":)", "nick":"Val", "employee":true}];

var domOperations = (function(){
  var tableBody = document.querySelector('.tableBody');
  var addButton = document.querySelector('.addButton');
  var addForm = document.querySelector('.addForm');
  var cancelButton = document.querySelector('.cancel');
  var submit = document.querySelector('.submit');
  var inputName = document.querySelector('.inputName');
  var inputJob = document.querySelector('.inputJob');
  var inputAge = document.querySelector('.inputAge');
  var inputNickname = document.querySelector('.inputNickname');
  var check = document.querySelector('.checkBox');


  addButton.addEventListener('click', display);
  cancelButton.addEventListener('click', close);

  submit.addEventListener('click', function(){
    var newPerson = {
      name: inputName.value,
      job: inputJob.value,
      age: inputAge.value,
      nick: inputNickname.value,
      employee: check.checked
    }
    createOnePerson(newPerson);
    var personTable = document.createElement('tr');
    fillDataDump('add', newPerson);
    close();
  });

 function close() {
   addForm.classList.add('hide');
 }

  function display(){
    addForm.classList.remove('hide');
  }

  function createOnePerson(person) {
    var personTable = document.createElement('tr');
    personTable.setAttribute('id', personsList.indexOf(person));
    personTable.classList.add('persons');
    var personContext = `
      <td class='person-name'><p>${person.name}</p><p>${person.job}</p></td>
      <td class='person-age'>${person.age}</td>
      <td class='person-nickname'>${person.nick}</td>
      `;
    personTable.innerHTML = personContext;
    createcheckButton(personTable, person);
    createDelButton(personTable);
    tableBody.appendChild(personTable);
  }

  function createPersonsList() {
    personsList.forEach(function(person) {
      createOnePerson(person);
    })
  }

  function createcheckButton(parent, person) {
    var newtd = document.createElement('td');
    var check = document.createElement('input');
    check.type = "checkbox";
    check.setAttribute('disabled', 'disabled');
    if (person.employee) {
      check.setAttribute("checked", "true");
    } else {
      check.removeAttribute("checked");
    }
    newtd.appendChild(check);
    parent.appendChild(newtd);
  }

  function createDelButton(personTable) {
    var newtd = document.createElement('td');
    var del = document.createElement('button');
    del.classList.add('del-button');
    newtd.appendChild(del);
    personTable.appendChild(newtd);
    del.addEventListener('click', function(){
      deleteOnePerson(personTable);
    });
  }

  function deleteOnePerson(personTable) {
    var personRow = document.getElementById(personTable.id);
    tableBody.removeChild(personRow);
    fillDataDump('delete', personsList[personTable.id]);
  }

  function fillDataDump(method,data) {
    var content = ''
    if (method === 'add'){
      content = 'New person has been added:' + JSON.stringify(data);
    } else {
      content = 'This person has been deleted:' + JSON.stringify(data);
    }
    var textarea = document.querySelector('textarea');
    textarea.textContent = content;
  }

  return {
    createOnePerson:createOnePerson,
    createPersonsList:createPersonsList,
    addButton:addButton
  };
})();

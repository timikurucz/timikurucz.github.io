'use strict';

var domOperations = (function(){
  var content = document.querySelector('.uj');
  // var nameInputField = document.querySelector('.meal-name-input');
  // var calorieInputField = document.querySelector('.calorie-input');
  // var dateInputField = document.querySelector('.date-input');
  // var timeInputField = document.querySelector('.time-input');
  // var addButton = document.querySelector('.add-button');
  // var delButton = document.querySelector('.delete-button');
  // var filterButton = document.querySelector('.filter-button');
  // var showAllButton = document.querySelector('.unfilter-button');
  // var filterInputField = document.querySelector('.filter-date-input');
  // var divSum = document.querySelector('.sum');
  //
  //
  // function getTotalCalories() {
  //   var allCalories = document.querySelectorAll('.meal-calories');
  //   var sum = 0;
  //   for (var i = 0; i < allCalories.length; i++) {
  //     var calorie = parseInt(allCalories[i].textContent);
  //     sum += calorie;
  //   }
  //   return sum;
  // }
  //
  //  function updateCalSum() {
  //    divSum.textContent = getTotalCalories() + ' kcal';
  //  }

  // function createOneNewMeal(meal) {
  //   console.log('ez a kuldott cucc ami a domba jon:');
  //   console.log(meal);
  //   var mealDiv = document.createElement('div');
  //   mealDiv.classList.add('meal');
  //   mealDiv.setAttribute('id', meal.id);
  //   var mealContext = `
  //     <div class='meal-name'>${meal.name}</div>
  //     <div class='meal-calories'>${meal.calories} kcal</div>
  //     <div class='meal-date'>${meal.date.slice(0, 10)}</div>
  //   </div>`;
  //   mealDiv.innerHTML = mealContext;
  //   content.appendChild(mealDiv);
  //   nameInputField.value = '';
  //   calorieInputField.value = '';
  //   dateInputField.value = '';
  //   createCheckbox(mealDiv);
  //   // createDelButton(mealDiv);
  //   updateCalSum();
  // }

  function createAllMeals(input) {
    console.log(input);
    console.log(Object.keys(input));
    var lista = Object.keys(input);
    console.log('utolso: ' + lista[0]);
    var lastNum = lista[0];
    console.log(input[lastNum].values.gpsPosition.lat);
     console.log(input[1490377242618].values.gpsPosition.lat);
  }

  function createLong(input) {
    console.log('LONG:')
    console.log(input);
    var lista = Object.keys(input);
    console.log('utolso: ' + lista[0]);
    var lastNum = lista[0];
    console.log('lastNum: ' + lastNum);
    console.log(input[lastNum].values.gpsPosition.lon);
    console.log(input[1490377242618].values.gpsPosition.lon);
  }

  // function createCheckbox(parent) {
  //   var checkBox = document.createElement('input');
  //   checkBox.type = 'checkbox';
  //   checkBox.classList.add('cbox');
  //   parent.appendChild(checkBox);
  // }

  // function createDelButton(parent) {
  //   var del = document.createElement('button');
  //   del.classList.add('del-button');
  //   parent.appendChild(del);
  // }
  //
  // function delOneMeal(meal) {
  //   var mealRow = document.getElementById(meal.id);
  //   content.removeChild(mealRow);
  //   updateCalSum();
  // }
  //
  // function getSelectedMealsIds() {
  //   var itemIds = [];
  //   var checkedItems = document.querySelectorAll('input[type=checkbox]:checked');
  //   for (var i = 0; i < checkedItems.length; i++) {
  //     itemIds.push(parseInt(checkedItems[i].parentNode.id));
  //   }
  //   return itemIds;
  // }
  //
  // function delMoreThanOneMeals(input) {
  //   console.log('hahooo');
  //   console.log(input);
  //   console.log('ez mar az itemidk');
  //   console.log(input.item_ids);
  //   var content = document.querySelector('.content');
  //   for (var i = 0; i < input.item_ids.length; i++) {
  //     console.log(input.item_ids[i]);
  //     var uj = input.item_ids[i];
  //     var proba = document.getElementById(uj);
  //     content.removeChild(proba);
  //   }
  //   updateCalSum();
  // }
  //
  //
  // function getFilteredMeals() {
  //   var allMealDates = document.querySelectorAll('.meal-date');
  //   console.log(allMealDates);
  //   console.log(allMealDates.length);
  //   console.log(allMealDates[0].textContent);
  //   for (var i = 0; i < allMealDates.length; i++) {
  //     if (allMealDates[i].textContent !== filterInputField.value.slice(0, 10)) {
  //       allMealDates[i].parentNode.classList.add('hidden');
  //     }
  //   }
  // }
  //
  // function showFilteredMeals(response) {
  //   console.log('helloo');
  //   console.log(response);
  //   console.log(response[0]);
  //   console.log(response.length);
  //   content.innerHTML = '';
  //   // filterInputField.value = '';
  //   response.forEach(function(e){
  //     createOneNewMeal(e);
  //   });
  // }


  return {
    // createOneNewMeal:createOneNewMeal,
    createAllMeals:createAllMeals,
    createLong:createLong
    // addButton:addButton,
    // nameInputField:nameInputField,
    // calorieInputField:calorieInputField,
    // dateInputField:dateInputField,
    // timeInputField:timeInputField,
    // filterButton:filterButton,
    // filterInputField:filterInputField,
    // delButton:delButton,
    // getSelectedMealsIds:getSelectedMealsIds,
    // delOneMeal: delOneMeal,
    // delMoreThanOneMeals:delMoreThanOneMeals,
    // getFilteredMeals:getFilteredMeals,
    // showFilteredMeals:showFilteredMeals,
    // showAllButton:showAllButton
  };
})();

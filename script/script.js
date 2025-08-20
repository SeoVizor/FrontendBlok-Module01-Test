
var x = prompt("Введите кординату", "");

 var input = parseInt(x);
 var hod = input;


var [location1, location2, location3] = Array.from({length: 7}, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .sort((a, b) => a - b);
var isSunk = false;
var guesses = 0;



  if (location1 === input || location2 === input || location3 === input) 
    {
         
       guesses++;
       alert ('Попал')
       var x = prompt("Введите следующую кординату", "");
       var input = parseInt(x);
       var hodtwo = input;
         if(input != hod){
           if (location1 === input || location2 === input || location3 === input) 
            {
               guesses++;
               alert ('Попал')
               var x = prompt("Введите следующую кординату", "");
               var input = parseInt(x);
               
             if(input != hodtwo){
               if (location1 === input || location2 === input || location3 === input) 
                {
                   guesses++;
                   alert ('потоплен');
                  
                   // Тут сценарий закончен все три попадания
                }
            }
            }
            }
    } else {alert ('не попал')}

 
/* 1) Const - once if we declare and assign the value we can not change */
const accountId = '12345';
// accountId = '1234'; not allowed 
/* Const is used to declare a variable whose value value can not be assighned after one we initialize 
   
Que 1) can we change the value inside an object or array declared with const ? 
Ans - Yes, const only prevent reassignment not mutation */
      // ex - 
               const user = {
                   name : "Rohit"
               }
        console.log(user);
        user.name = "Chetan"; // allowed 
        // user = {}; this is not allowed 
        console.log(user);
            
/* Que 2) whats the difference between let and const 
   Ans -                  let                const 
         reassignment     Yes                 No 
         redeclaration    No                  no 
         Hoisting         yes but Undef       yes but undefined 
         Block Scoped     yes                 yes */

/* Que 3) Can you Declare A const without assigning value 
   Ans - No , you must need to give value to const variable */

/* Que 4) is const blocked scope or function scoped 
   Ans - const is blocked scope 
         {
            const no = 12;
         } 
            console.log(no); not allowed 
            
    Que 5) Why we use const instead let and var 
    Ans -  a) to prevent accidental reassignment 
           b) it makes code more prectable 
           c) when we want the variable can not change and not able to change we want same value in side 
               some variables at that time we use cons variable
               
    que 6) Can two const variable have same name in different blocks ? 
    Ans - Yes, because const is blocked scope 
    
    Que 7) What happens if you try to redeclare a const variable 
    Ans - it throws a syntax error 
          const x= 10; 
          x=11; not allowed (syntax error)*/

          const numbers = [1,2,3];
          console.log(numbers);
          numbers.push(4); // mutation is allowed redeclararion is not allowed 
          console.table(numbers);





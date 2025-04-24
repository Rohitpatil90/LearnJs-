/* Let - 
   
  Que 1) What is the let in js?
  Ans - let is the keyword in js used to declare the bloced- scope variables unlike var, 
        let does not get hoisted to the top of its block scope and also its not attached to the 
        global window object in brrowser. 
    
  Que 2) How let different from var ?
  Ans - feature                    let                        var 
        scope                 blocked- scope          function-scoped 
        re-declaration           no                         yes 
        hoisting                 yes but undefined           yes 
        attached to widow         no                         yes 

   Que 3) Can let be updated ? 
   Ans - yes , 
   
   Que 4) What is let in JavaScript?
   Ans - Introduced in ES6
         Used to declare block-scoped variables
         Can be updated, but not re-declared in the same scope*/

   console.log("Hey Rohit !!");

   function myname(){
    let name = "Rohit";
    console.log(name);
   }
   myname();
   // console.log(name); ❌ not allowed syntax error 

   let homeTown = "Yedemachindra";
   console.log("Original Name - " + homeTown);
   homeTown = "Peth";   // ✅ can be updated
   console.log("Updated Name - " + homeTown);
   // let homeTown = "pune"; ❌ SyntaxError (in the same scope)


// 3. In a loop (common interview test) 
   for(let i=0; i<3; i++){
     console.log(i);
     setTimeout(()=> console.log(i), 1000);
   }
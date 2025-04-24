/* Let - 
   
  Que 1) What is the let in js?
  Ans - let is the keyword in js used to declare the bloced- scope variables unlike var, 
        let does not get hoisted to the top of its block scope and also its not attached to the 
        global window object in brrowser. 
    
  Que 2) How let different from var ?
  Ans - feature                    let                        var 
        scope                 blocked- scope          function-scoped 
        re-declaration            no                         yes 
        hoisting                  yes but undefined          yes 
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
     //setTimeout(()=> console.log(i), 1000);
   }

/* 🧠 1. What is let in JavaScript?
   Ans - let is the keyword in JavaScript which is used to declare blocked scoped variable 
         unlike var it does not hoist variable top to the top of the function or script 
         and it does not allow redeclaration  in the same scope */

         //Ex - 
          let no = 10;
          if(true){
            console.log("This Will Print 10 - "+ this.no);
            let no = 12;
            console.log("This Will Print 12 - "+ no);
          }
          console.log("This Will Print 10 - "+ no);

/* 🧠 2. What's the difference between var and let?
ans -   */
      function myfin(){
            if(true){
                  let a = 12;
                  var b = 13;
                  console.log("a will print - "+ a);
                  console.log("b will print - "+ b);
            }
            console.log(b); // 1
            //console.log(a); ❌ ReferenceError: a is not defined
      }
      myfin();

/* 🧠 3. Can you redeclare a variable declared with let?
   Ans - no, we can not redeclare variable as a same name this will throw 
        ❌ SyntaxError: Identifier 'x' has already been declared 
        
   🧠 4. What is Temporal Dead Zone (TDZ) with let?
   ✅ Answer: The Temporal Dead Zone is the time between entering a block and the 
               variable being declared with let. Accessing the variable before declaration 
               throws a ReferenceError.
               
               ex-  
                    console.log(a); ❌ ReferenceError
                    let a = 12;
                    
    🧠 5. How does let behave inside a loop?
    ✅ Answer: Each iteration gets a new block-scoped let variable, useful in async code 
                like setTimeout.

    🧠 7. Where is let commonly used?
    ✅ Answer:  Inside loops to prevent scope bugs
                 Inside blocks like if, switch, or {} to limit variable lifetime
                 In modern JS to avoid var's quirks


    ✅ Example 1: Inside an Object*/
       const obj = {
           name : "Rohit",
           printnumber: function(){
            console.log("Here We use this KeyWord : " + this.name); // uses obj.no
            let name = "Abhishek";
            console.log("Here We dont need to use this : " + name); // uses local no
           }
       }
       obj.printnumber();

       // this.no refers to obj.no → 10
       //let no = 12 is a local variable in the function scope

  // ✅ Example 2: Inside a Class
         class myclass{
            
            constructor(){
                let no1=11;
                this.no1 = 9;
                this.t=10;
            }

            test(){
               console.log(this.no);
               console.log(this);
            }
         }

         let m=new myclass();
         m.test();
         console.log(m+"class");
         
       



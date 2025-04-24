"use strict";   // treat all code as a newr version 

// alert(3+3); we are using node JS not browser, so this will throw an error 

// JavaScript data types list with examples, super clear and easy to follow:

//🔹 PRIMITIVE Data Types
   // String => 
         let userName = "Alice";
         let greetings = 'Hello!!';
         console.log(typeof userName); // string
         console.log(userName); //alice

    // number =>
        let rollNo = 12;
        let price = 165.66;
        console.log(typeof + " - "+ rollNo); // number
        console.log(price);  //165.66

    /* ✅ Summary Table

             Feature	                      Number	                     BigInt
         Max safe value	                   9007199254740991      	  Limited only by memory
        Digits (max safe)	                 16 digits	               🔥 Thousands/millions
         Supports decimal	                   ✅ Yes	              ❌ No (integers only)
             Use case	                  Normal math, decimals	         Very large integers*/

    // BigInt =>
        let id = 1234567891234567890n;
        console.log(typeof id); //bigint
        console.log(id);   //bigint

    // Boolean => 
        let isActive = true;
        console.log(typeof isActive); // boolean
        console.log(isActive);  // boolean

    // Undefined =>
        let score;
        console.log(typeof score); // undefined 
        console.log(score);  // undefined 

    // Null =>
        let runrate= null;
        console.log(typeof runrate); // object 
        console.log(runrate); // null

    // Symbol =>
        /*"In JavaScript, a Symbol is like a special label that is always unique. 
           Even if two Symbols have the same name, they are not equal. It’s mainly 
           used when you want to add a secret or private property to an object that 
           no one else can accidentally change or see. It helps keep your data safe 
           and prevents naming conflicts in your code." */

           let id1 = Symbol("student");
           let id2 = Symbol("student");
           let isTrueOrFalse = (id1===id2);
           console.log(id1);
           console.log(id2);
           console.log(isTrueOrFalse);

    //🔸 NON-PRIMITIVE (Reference/Object) Data Types
     
    //1. Object => 
        let student = {
           name : "Rohit",
           rollNo : 123,
           schoolName : "chh Sambhaji Vidyalaya Shivnagar"
        }
        console.log(typeof student);
        console.log(student);

    //2. Array (which is actually an object) => 
        let studentNames = ["Rohit", "Abhijeet", "Satyajeet", "Abhishek"];
        let stud ={}
        console.log(typeof studentNames); // object array is also one type object 
        console.log(studentNames); //["Rohit", "Abhijeet", "Satyajeet", "Abhishek"]
        console.log(Array.isArray(studentNames)); // true cause its an array
        console.log(Array.isArray(stud)); // false cause its object

    // 3. Function => 
        function color(){
            let colorname = "red";
            console.log(colorname); //red 
        }
        color();
        console.log(typeof color); // function
        console.log(color);   // [finction: color]

    // 4. date =>
          let today = new Date();
          console.log(typeof today); // object 
          console.log(today); // 2025-04-24T11:19:17.380Z

    //5. RegExp (Regular Expression)
              //  "In real time, RegExp is used in forms, 
              // filters, search bars, auto-formatting, cleaning up user input, hiding bad 
              // content, and finding patterns in text."
        let pattern = /[A-Z]+/g;
        console.log(typeof pattern); // object 
        console.log(pattern); ///[A-Z]+/g 

    //6. Map=>
        let mymap = new Map();
        console.log(typeof mymap); // object 
        console.log(mymap); 



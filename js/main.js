

// /* Write a program that allow to user enter number then print it */
// var num = Number(window.prompt("Enter a number"));
// console.log(num);


// /* Write a program that take number from user then print yes if that number can divide by 3 
// and 4 otherwise print no*/
// var num = Number(window.prompt("Enter a number"));
// if (num % 3 == 0 && num % 4 == 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// /* Write a program that allows the user to insert 2 integers then print the max */
// var num1,num2;
// num1 = Number(window.prompt("Enter frist number"));
// num2 = Number(window.prompt("Enter second number"));
// if(num1>=num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }

// /* 
// Write a program that allows the user to insert an integer then print negative 
// if it is negative number otherwise print positive. 
// */
// var num = Number(window.prompt("Enter any number"));
// if(num>0){
//     console.log("positive");
// }else if(num==0){
//     console.log("zero");
// }else{
//     console.log("negative");
// }


// /*
// Write a program that take 3 integers from user 
// then print the max element and the min element. 
//  */
// var num1,num2,num3,max,min;
// num1 = Number(window.prompt("Enter frist number"));
// num2 = Number(window.prompt("Enter second number"));
// num3 = Number(window.prompt("Enter third number"));
// if(num1>=num2&&num1>=num3)
// {
//     max=num1;
//     if(num2<=num3){
//         min=num2;
//     }else{
//         min=num3;
//     }
// }else if(num2>=num1&&num2>=num3){
//     max=num2
//     if(num1<=num3){
//         min=num1;
//     }else{
//         min=num3;
//     }
// }else if(num3>=num1&&num3>=num2){
//     max=num3;
//     if(num1<=num2){
//         min=num1;
//     }else{
//         min=num2;
//     }
// }
// console.log("max element = ",max);
// console.log("min element = ",min);


// /* Write a program that allows the user to insert integer number then 
// check If a number is oven or odd */
// var num = Number(window.prompt("Enter a number"));
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }



// /* Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
// then print vowel otherwise print consonant */
// var letter = window.prompt("Enter a letter");
// if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'||letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U'){
//     console.log("vowel");
// }else{
//     console.log("consonant");
// }


// /* Write a program that allows user to insert integer then print all numbers 
// between 1 to that’s number */
// var num = Number(window.prompt("Enter a number"));
// var str="1";
// for(var i=2;i<=num;i++){
//     str+=", "+i;
// }
// console.log(str);


// /* Write a program that allows user to insert integer then print a multiplication table up to 12. */
// var num = Number(window.prompt("Enter a number"));
// var str="";
// for(var i=1;i<=12;i++){
//     str+= num*i+" ";
// }
// console.log(str);


// /* Write a program that allows to user to insert number then print all even numbers 
// between 1 to this number  */
// var num = Number(window.prompt("Enter a number"));
// var str="";
// for(var i=2;i<=num;i++){
//     if(i%2==0){
//         str+=i+" ";
//     }
// }
// console.log(str);



// /* Write a program that take two integers then print the power*/
// var base,power,result=1;
// base = Number(window.prompt("Enter the base"));
// power = Number(window.prompt("Enter the power"));
// for(var i=0;i<power;i++){
//     result*=base;
// }
// console.log(result);



// /* Write a program to enter marks of five subjects and calculate total, average and 
// percentage.*/
// var mark1,mark2,mark3,mark4,mark5,total,avg,percentage;
// mark1 = Number(window.prompt());
// mark2 = Number(window.prompt());
// mark3 = Number(window.prompt());
// mark4 = Number(window.prompt());
// mark5 = Number(window.prompt());
// total=mark1+mark2+mark3+mark4+mark5
// avg=total/5;
// percentage=(total/500)*100;
// console.log("Total marks = ",total,"\nAverage Marks = ",avg,"\nPercentage = ",percentage );


// /* Write a program to input month number and print number of days in that month. */
// // 1-31 2-28 3-31 4-30 5-31 6-30 7-31 8-31 9-30 10-31 11-30 12-31
// var num, days;
// num = Number(window.prompt("Month Number: "));
// if(num<8){
//     if(num==2){
//         days=28;
//     }else if(num%2==1){
//         days=31;
//     }else days=30
// }else{
//     if(num%2==0){
//         days=31;
//     }else days=30
// }
// console.log("Days in Month: ",days);


// /* Write a program to input marks of five subjects Physics, Chemistry, Biology,
// Mathematics and Computer , Find percentage and grade  
// Percentage >= 90%: Grad A 
// Percentage >= 80%: Grad B 
// Percentage >= 70%: Grad C 
// Percentage >= 60%: Grad D 
// Percentage >= 40%: Grad E 
// Percentage < 40%: Grad F 
// */
// var phy,chem,bio,math,comp,grade,percentage,total;
// phy = Number(window.prompt());
// chem = Number(window.prompt());
// bio = Number(window.prompt());
// math = Number(window.prompt());
// comp = Number(window.prompt());
// total= phy+chem+bio+math+comp;
// percentage=(total/500)*100;
// if(percentage>=90){
//     grade='A';
// }
// else if(percentage>=80){
//     grade='B';
// }
// else if(percentage>=70){
//     grade='C';
// }
// else if(percentage>=60){
//     grade='D';
// }
// else if(percentage>=50){
//     grade='E';
// }
// else{
//     grade='F';
// }
// console.log("Over All Grade is: ", grade);


/* using switch() */

// /* Write a program to print total number of days in month */

// var num, days;
// num = Number(window.prompt("Month Number: "));
// switch(num){
//     case 1:case 3:case 5:case 7:case 8:case 10:case 12:
//         days=31;
//         break;
//     case 4:case 6:case 9:case 11:
//         days=30;
//         break;
//     case 2: 
//         days=28;
//         break;
// }
// console.log("Days in Month: ",days);


// /*Write a program to check whether an alphabet is vowel or consonant  */
// var letter,state;
// letter = window.prompt("Enter a letter: ");
// switch(letter){
//     case 'a':case 'e':case 'i':case 'o':case 'u':
//     case 'A':case 'E':case 'I':case 'O':case 'U':
//         state="vowel";
//         break;
//     default:
//         state="consonant";
// }
// console.log(state);


// /*  Write a program to find maximum between two numbers   */
// var num1,num2,max;
// num1 = Number(window.prompt("Enter frist number"));
// num2 = Number(window.prompt("Enter second number"));
// switch(true){
//     case(num1>num2):
//         max=num1;
//         break;
//     default:
//         max=num2;
// }
// console.log(max);


// /* Write a program to check whether a number is even or odd */
// var state;
// var num = Number(window.prompt("Enter a number"));
// switch(true){
//     case(num%2==0&&num!=0):
//         state="even";
//         break;
//     case(num%2==1):
//         state="odd";
//         break;
//     default:
//         state="zero";
// }
// console.log(state);



// /* Write a program to check whether a number is positive or negative or zero */
// var state;
// var num = Number(window.prompt("Enter any number"));
// switch(true){
//     case(num>0):
//         state="positive";
//         break;
//     case(num<0):
//         state="negative";
//         break;
//     default:
//         state="zero";
// }
// console.log(state);


// /* Write a program to create Simple Calculator */
// var num1,num2,op,result;
// num1 = Number(window.prompt("Enter first number"));
// num2 = Number(window.prompt("Enter second number"));
// op = window.prompt("Enter the operation");
// switch(op){
//     case'+':
//         result=num1+num2;
//         break;
//     case'-':
//         result=num1-num2;
//         break;
//     case'*':
//         result=num1*num2;
//         break;
//     case'/':
//         result=num1/num2;
//         break;
//     default:
//         result="Invalid operation";
// }
// console.log(result);
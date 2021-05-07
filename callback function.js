function square(number){
  return number**2
}

function funcCaller(number,callback){
 return callback(number)
}

function cube(array){
  var arr = array[0]
    if(arr===0){
      return 1
    }
  return arr**3
}

function firstVal(array,callback){
  return callback(array)
}

 function summation(a,b){
  var result = 1;
  while(a<b){
       a=a+1
       result=result+a
  }
  return result;
 }

 function sumAll(a,b,callback){
  return callback(a,b)
 }

 function ssSS(string){
  return string +"s"
 }

 function addS(string,callback){
  return callback(string)
 }

 function changeTempo(Celsius){
  var Ctempo=Celsius;
  var CtoF= (Ctempo * 1.8)+32;
  return CtoF;
 }

 function fToC(number,callback){
  return callback(number)
 }

 function multiPyileBYthree(array){
  var arr = []
  for(var i= 0; i<array.length; i++){
       if(array[i]!==0){
        arr.push(array[i]*3)
       }
     }
     return arr;
  };

  var myArray = [1,2,3,4,5] 
  
  function multiplyByThreE(myArry,callback){
  return callback(myArry)
  };

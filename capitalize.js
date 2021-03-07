function capitalize(str){
    if(!str){
        return new Error("No String to capitalize")
    }
    else if(typeof str !=='string'){
        return new Error()

    }
   words= str.split(' ');
   let capitalizedStr =""
   for(i=0;i<words.length;i++){
       words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
      
   }
   return words.join(' ')
   

}

module.exports = capitalize
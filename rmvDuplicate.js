var arr = [1,2,2,1,3,4,5];
  
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
  
    console.log(removeDuplicates(arr));
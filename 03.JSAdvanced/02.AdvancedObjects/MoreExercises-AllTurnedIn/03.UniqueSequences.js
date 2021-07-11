  
function main(jsonarray){
    let array=[];
    for(let str of jsonarray){
        let arr=JSON.parse(str);
        arr.sort((a,b)=>b-a);
        if(!exists(array,arr))
            array.push(arr);
        //console.log(arr);
    }
    array.sort((a,b)=>a.length-b.length);
    array.forEach(a=>console.log('['+a.join(', ')+']'));
 
    function exists(arr,subarr){
        for(let a of arr){
            if(equalArray(a,subarr))
                return true;
        }
        return false;
    }
 
    function equalArray(arr1,arr2){
        if(arr1.length==arr2.length){
            for(let i=0;i<arr1.length;i++)
                if(arr1[i]!=arr2[i])
                    return false;
            return true;
        }
        return false;
    }
}
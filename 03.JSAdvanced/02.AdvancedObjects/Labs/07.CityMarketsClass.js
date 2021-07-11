function main(cityArray) {
    let finalCount = {};
    
    for(const cityInfo of cityArray) {
       
        let [town, product, countPrice] = cityInfo.split(" -> ");
        let [count, price] = countPrice.split(" : ");
            if(!finalCount[town]) {
                finalCount[town] = {}; 
                
            }  
             if (!finalCount[town][product]) {
                finalCount[town][product] = +count * +price;
            }
               
            
        
    }
    for(const town in finalCount) {
        console.log(`Town - ${town}`);
        for(const [key, value] of Object.entries(finalCount[town])) {
             console.log(`$$$${key} : ${value}`);
        }   
    }
}
    

main(["Sydney -> Laptops HP -> 200 : 2000", "Sydney -> Raspberry -> 200000 : 1500", "Sydney -> Audi Q7 -> 200 : 100000", "Montana -> Portokals -> 200000 : 1", "Montana -> Qgodas -> 20000 : 0.2", "Montana -> Chereshas -> 1000 : 0.3"]);
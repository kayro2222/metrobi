const getMaxValue = (data, target) => {
    const iter = (index, bag, weight, total) => {
        if (weight > target){
            return;
        };

        if (weight === target) {
            if (!result || total < result.total){
                result = { bag, weight, total };
                return;
            }
        }

        let temp = [...bag];
        temp[index]++;

        iter(index, temp, weight + data[index].kg, total + data[index].price);

        if (++index >= data.length){
            return;
        };
        
        iter(index, bag, weight, total);
    }

    var result;
    iter(0, data.map(_ => 0), 0, 0);
    return result;
}


const carrotTypes = [{kg: 2, price: 100}, {kg: 1, price: 300}, {kg: 3, price: 200}];
const capacity = 10;
console.log(getMaxValue(carrotTypes, capacity));
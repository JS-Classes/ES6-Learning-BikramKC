let GetSD = (numbers) => {
    
    let sum = 0;
    const len = numbers.length;
    for(const num of numbers)
    {
        sum = sum+num;
    }
    let mean =  sum/numbers.length;
    let sqrDiffSum = 0;
    for(const num of numbers)
    {
        let sqrDiff = Math.pow(num - mean,2);
        sqrDiffSum += sqrDiff;

    }
    return Math.sqrt(sqrDiffSum/len);
}
const ages = [23,45,21,56,32,43,22,89,76,10];
let sdAges = GetSD(ages);
console .log(`Standard Deviation of ages: ${sdAges}`);
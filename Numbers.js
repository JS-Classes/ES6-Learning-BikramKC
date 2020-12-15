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
const ages = [2, 45, 56, 78];
let sdAges = GetSD(ages);
console .log(`Standard Deviation of ages: ${sdAges}`);
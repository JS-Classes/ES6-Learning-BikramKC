

function MultiplicationTable(m, y, range=10)
{
    for(let i = m; i<=y; i++ )
    {
        console.log(`Multiplication Table for ${i}`)
        for(let x = 1; x<=range; x++)
        {   
            let mul = m*x;              
            console.log(`${i} * ${x} = ${mul}`);
        
        }
    }
}

MultiplicationTable(2,5);

const people = [{name: "Bikram", dob: "2020-01-01", gender: "M"},{name: "Bishnu", dob: "2020-01-01", gender: "M"}]

console.table(people);
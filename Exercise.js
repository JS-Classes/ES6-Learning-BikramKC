

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
var array= [1,2,3,4,5,6,9,10,15,30,43,42,87,99];

function divisible(array1)
{
    output= [];
    for(let i = 0; i <= array1.length; i++)
    {
        if(array[i] % 3 == 0)
        {
            output.push(array1[i]);
        }
    }
    return output;
}
divisible(array);

// Code your solutions in this file
let names=[];

function writeCards(array, event)
{
    let messages=[];
    for (let i = 0; i < array.length; i++) 
    {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(number)
{
    let i=0;
    while (i <= number) 
    {
        console.log(i);
        i++;     
    }
}

names.push("James","John","Emanuel");

console.log(countDown(11))
console.log(writeCards(names,"birthday"));
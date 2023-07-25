// 1. Count the occurrences.
function countWord(string)
{
    const Words = string.split(" ");
    const map = new Map();
    for(let word of Words)
    {
        if(map.has(word))
        {
            map.set(word, map.get(word)+1);
        }
        else{
            map.set(word,1);
        }
    }
    return map;
}
const sent =  "I am xyz. I am learning web development from PW Skills.";
console.log(countWord(sent));
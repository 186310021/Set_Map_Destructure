//3. Swaping Two value using destructure.
function swap(x,y)
{
    [x,y] = [y,x]
    return [x,y];
}
console.log(swap(8,9));
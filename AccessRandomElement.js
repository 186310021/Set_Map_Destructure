// 04. Access random elements.
function extractEelement(Arr)
{
    [first, second, , , , last] = Arr;
    return [first, second, last];
}
const array = [1, 2, 3, 4, 5, 6];
console.log(extractEelement(array));
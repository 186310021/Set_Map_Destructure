// 5. Min and max values.

function MaxAndMin (Arr)
{
    return{
        max : Math.max(...Arr),
        min : Math.min(...Arr)
    }
}
console.log(MaxAndMin([10,20,70,85,456,32454,444,82525]));
const mymath=(function(){
               const PI=3.14;
                const add=function(x,y)
                {
                    return x+y;
                }

                const subtract=function(x,y)
                {
                    return x-y;
                }

                const multiply=function multiply(x,y)
                {
                    return x*y;
                }

                const divide=function divide(x,y)
                {
                    return x/y;
                }
              return{
                addMethod: add,
                subtractMethod: subtract,
                multiplyMethod:multiply,
                divideMethod: divide,
                pi:PI
              };

            })();

module.exports.math=mymath;
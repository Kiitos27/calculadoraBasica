function generarElCalculo(
    numeroUno : number = 0,
    numeroDos : number = 0,
    ecuacion : string
  ) : number | boolean {
    //Se pone el resultado inicializado como numeroUno
    //en caso de que el usuario solo use el botón Enter
    let resultado : number = numeroUno;
    console.log("Numero 1: " + numeroUno);
    console.log("Numero 2: " + numeroDos);
    switch(ecuacion) {
        //Operaciones basicas
        case '+':
        resultado = numeroUno + numeroDos;
        break;
        case '-':
        resultado = numeroUno - numeroDos;
        break;
        case '*':
        resultado = numeroUno * numeroDos;
        break;
        case '/':
        //En caso de que el numero Dos sea igual a cero,
        //la función retornará un valor falso
        if(numeroDos === 0) return false

        resultado = numeroUno / numeroDos;
        break;
        case '^':
        resultado = numeroUno ** numeroDos;
        break;
        
        //Aca se van a poner otras operaciones:
        // %, x10^n
        case '%':
        resultado = numeroUno / 100;
        break;
        case 'x10^':
        resultado = numeroUno * (10 ** (numeroDos));
        break;
    }
    return resultado;
}
  
//Esta función 
function tokenizarExpresion(expresion: string): (number | string)[] {
    const regex = /\d+(\.\d+)?|x10\^|[\+\-\*\/\^√%]/g;
    const tokensGenerados = expresion.match(regex);
    if(!tokensGenerados) throw new Error("Expresion invalida");
  
    return tokensGenerados.map(token => (/\d/.test(token) ? parseFloat(token) : token));
}
  
export function evaluarExpresion(expresion : string) : string | boolean {
    //
    const tokens = tokenizarExpresion(expresion);
    console.log(tokens);
    
    let i = 0;
    while(i < tokens.length) {
        const charact = tokens[i];
        console.log(charact)
        
        //En caso de haber un valor de porcentaje, se hará el calculo rapidamente
        if(charact === '%') {
            const num1 = tokens[i - 1] as number;
            const resultado = generarElCalculo(num1, 0, charact);
            if(resultado === false) throw new Error("Error en el calculo");
            else{
                //MMMMMMMM.....
                const resultadoFiltrado = resultado as number
                console.log(resultadoFiltrado);
                tokens.splice(i-1, 2, resultadoFiltrado);
            }
            
        } else  {
            i++;
        }
    }

    i = 0;
    while(i < tokens.length) {
        const charact = tokens[i];
        console.log(charact)

        //Se calculan los exponentes y raices
        if(charact === '^' || charact === '√') {
            const num1 = tokens[i - 1] as number;
            const num2 = tokens[i + 1] as number;
            const resultado = generarElCalculo(num1, num2, charact);
            if(resultado === false) throw new Error("Error en el calculo");
            else{
                //MMMMMMMM.....
                const resultadoFiltrado = resultado as number
                console.log(resultadoFiltrado);
                tokens.splice(i-1, 3, resultadoFiltrado);
            }
            
        } else  {
            i++;
        }
    }

    i = 0;
    while(i < tokens.length) {
        const charact = tokens[i];
        console.log(charact)
        //Se calculan las multiplicaciones o divisiones
        if(charact === '*' || charact === '/') {
            const num1 = tokens[i - 1] as number;
            const num2 = tokens[i + 1] as number;
            const resultado = generarElCalculo(num1, num2, charact);
            console.log(resultado)
            if(resultado === false) throw new Error("Error en el calculo");
            else{
                //MMMMMMMM.....
                const resultadoFiltrado = resultado as number
                console.log(resultadoFiltrado);
                tokens.splice(i-1, 3, resultadoFiltrado);
            }
            
        } else  {
            i++;
        }
    }

    i = 0;
    while(i < tokens.length) {
        const charact = tokens[i];
        console.log(charact)
        //Se calculan las sumas y restas
        if(charact === '+' || charact === '-') {
            const num1 = tokens[i - 1] as number;
            const num2 = tokens[i + 1] as number;
            const resultado = generarElCalculo(num1, num2, charact);
            if(resultado === false) throw new Error("Error en el calculo");
            else{
                //MMMMMMMM.....
                const resultadoFiltrado = resultado as number
                console.log(resultadoFiltrado);
                tokens.splice(i-1, 3, resultadoFiltrado);
            }
            
        } else  {
            i++;
        } 
    }
    
    return tokens[0] as string;
}
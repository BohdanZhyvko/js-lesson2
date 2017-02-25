var numFibonacci = Number(prompt('Введіть N-не значення ряду Фібоначчі: '));

var summa = 0;
var firstFib = 0;
var secondFib = 1;


document.writeln('N = ' + numFibonacci + '<br>');
summa = cyclicFibonacci(numFibonacci, firstFib, secondFib, summa)
document.writeln('<br>Сума чисел: ' + summa);
document.writeln('<br>Рекурсивний спосіб: ');
summa = recursionFibonacci(numFibonacci, firstFib, secondFib, 0, 0, 1)
document.writeln('<br>Сума чисел: ' + summa);

//The sequence of Fibonacci numbers, cyclic 
function cyclicFibonacci(numFibonacci, fib1, fib2, sum) {
    document.writeln('Циклічний спосіб: ');
    for (var i = 1, num = 0; i < numFibonacci; i++) {
        if (i == 1) {
            document.writeln(fib1 + ' ' + fib2 + ' ');
            sum = fib1 + fib2;
        }
        num = fib1 + fib2;
        if (i % 2) {
            fib1 = num;
        } else {
            fib2 = num;
        }
        document.writeln(num);
        sum += num;
    }
    return sum;
}

//The sequence of Fibonacci numbers, recursion 
function recursionFibonacci(numFib, fib1, fib2, sum, num, counter) {
    if (numFib > counter) {
         if (counter == 1) {
            document.writeln(fib1 + ' ' + fib2 + ' ');
            sum = fib1 + fib2;
        }
        num = fib1 + fib2;
        if (counter % 2) {
            fib1 = num;
        } else {
            fib2 = num;
        }
        document.writeln(num);
        sum += num;
        counter++;
        return recursionFibonacci(numFib, fib1, fib2, sum, num, counter);
    } else {
        return sum;
    }
}
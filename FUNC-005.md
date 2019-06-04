Задания по теме «Функции»
<https://kodaktor.ru/func_005/>
(каррирование)

Код:
<pre><code>{
        //const curryPow = x => y => x ** y;
        const partiPow = y => {
            return x => {
                return x ** y 
             }
        } // аналогично предыдущей функции
       //Out.log(curryPow(2)(10)); // 1024
        
        const qv = partiPow(2);
        const cb = partiPow(3);
       
        Out.log(qv(5)); // 25
        Out.log(cb(5)); // 125

    }</code></pre>
    
Результат: 25
125

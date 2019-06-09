Задания по теме «Функции» <https://kodaktor.ru/func_010> (безымянная рекурсия)

Код программы:
<pre><code>
было:  const f = x => x <= 1 ? 1 : x * f(x - 1);
 стало:            x => x <= 1 ? 1 : x * f(x - 1)
 Как такая функция может вызвать сама себя? У неё нет имени.
    function fun(x) {
                let f = arguments.callee;
		            return x <= 1 ? 1 : x * f(x - 1);
    }
        Out.log(fun(2));
</code></pre>


Ссылка на форк: <https://kodaktor.ru/func_791c8>

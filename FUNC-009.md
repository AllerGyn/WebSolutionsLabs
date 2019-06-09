Задания по теме «Функции» <https://kodaktor.ru/func_009> (замыкание)

Код программы:
<pre><code>
const cc = (x = 0) => () => ++x;
        const pp=cc();
        Out.log(pp());
        Out.log(pp());
        Out.log(pp());
</code></pre>

Результат: 1 2 3

Ссылка на форк: <https://kodaktor.ru/func_e4b45>

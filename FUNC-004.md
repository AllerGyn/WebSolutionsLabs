Задания по теме «Функции» <https://kodaktor.ru/func_003/> (func_task, compose)

Код программы:
<pre><code>
import compose from '/j/goss_compose';
     const qv = x => x * x;
     const sc = x => x + 1;
     Out.log(qv(sc((5))))         /* 36 */
        .log(sc(qv((5))))         /* 26 */
        .log(compose(qv,sc)(5))
        .log(compose(sc,qv)(5));
</code></pre>

Код по адресу <https://kodaktor.ru/j/goss_compose>:
<pre><code>
export default (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
</code></pre>

Результат: 36
26
36
26
Ссылка на форк: <https://kodaktor.ru/func_3068e>

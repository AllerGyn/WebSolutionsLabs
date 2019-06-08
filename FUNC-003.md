Задания по теме «Функции» <https://kodaktor.ru/func_003/> (импорт и bind)

Код программы:
<pre><code>
// Дано: функция, экспортированная по адресу 
// kodaktor.ru/j/func_003_export

// Выполнить: 
// импортировать её сюда
// с помощью метода bind привязать к её аргументу значение 5
// и вызвать для получения результата 25
import qv from '/j/func_003_export';
var g = qv.bind(null,5);
// здесь ваш ответ 
Out.log(g());

</code></pre>

Код по адресу <https://kodaktor.ru/j/func_003_export/>:
<pre><code>
const qv = x => x * x;
export default qv;
</code></pre>

Результат: 25
Ссылка на форк: <https://kodaktor.ru/?!=func_79fd2>

Задания по теме «Функции» <https://kodaktor.ru/func_002/> (this)

Код программы:
<pre><code>
// Дано: функция
  const mixin = function(){ 
   return this * this; 
  };
// Выполнить: вызвать функцию так, чтобы при вызове от значения 5 выдавался квадрат числа 5, равный 25
const qv = mixin.call(5);
// здесь ваш ответ 
Out.log(qv);
</code></pre>

Результат: 25

Ссылка на форк: <https://kodaktor.ru/func_c08e0>

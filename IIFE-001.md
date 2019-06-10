IIFE-001
Задание на IIFE <https://kodaktor.ru/g/iife> 

Код программы:
<pre><code>
      (() => Out.log('Меня вызвали!'))();
      
      (function() {
          Out.log('Обычный вызов IIFE')
       }());
      
      (fun => fun())(() => Out.log('Меня вызвали с помощью магии!'));

</code></pre>

Результат: Меня вызвали!

Обычный вызов IIFE

Меня вызвали с помощью магии!

Ссылка на форк: <https://kodaktor.ru/iife_ca13a>

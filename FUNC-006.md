Задания по теме «Функции» <https://kodaktor.ru/func_006/> (транспиляция)

Код программы:
<pre><code>
<script type="text/babel" data-plugins="transform-function-bind">{    
(function(){

    const square = function (){ return this * this; };
    Out.log(this::square()); 
    
    // используйте слово this и оператор двойного двоеточия
    // чтобы вызов square вернул 25
    // для этого добавьте нужный атрибут в этот элемент script
    
}.bind(5))();
   }
</code></pre>

Результат: 25

Ссылка на форк: <https://kodaktor.ru/func_1ee6b>

Транспиляция: bind

<https://kodaktor.ru/bind02032018> 

Код программы:
<pre><code>
 <button id="bt1">button 1</button>
   <button id="bt2">button 2</button>
   <script type="text/babel" data-plugins="transform-function-bind">
       function clckFunc(){
         this.textContent = this.id;
       }
       document.querySelector('#bt1')
       .addEventListener('click', clckFunc);
       document.querySelector('#bt2')
       .addEventListener('click', ({ target }) => target::clckFunc(this));
   </script>
   <hr>
</code></pre>

Результат: bt1  bt2

Ссылка на форк: <https://kodaktor.ru/bind02032018_854a7>

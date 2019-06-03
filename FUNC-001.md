Задания по теме «Функции»
<kodaktor.ru/func_001/> 
(goss_concat)

Код:
{<pre><code>
<button>Посмотреть результат задания!</button>  
<script type="text/javascript">
   console.clear();
   // здесь объявите функцию
  function showColor(r=255, g=255, b=255) {
   document.querySelector('button')
   .addEventListener(
     'click',
      e => {
        e.target.textContent = 'Ваш цвет:';
       var btn = document.createElement('input');
       btn.type = 'button';
       btn.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';
       btn.value = 'rgb(' + r +',' + g +',' + b +')';
       document.body.appendChild(btn);
      }
   );
}
  showColor(0, 32, 172);
</script>
{</pre></code>

Результат: Вывод с кнопкой и цветом (заданный)

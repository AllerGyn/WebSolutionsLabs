События: кастомные события, коммуникация компонентов 

<https://kodaktor.ru/evnt_002> 

Код программы:
<pre><code>
<div id="writer" title="♥️"><h2>Отправитель события</h2></div>
    <div id="reader" title="⭐️"><h2>Получатель события</h2></div>
   
    <script>{
    
      document.querySelector('#reader').addEventListener('note', e => e.target.textContent += e.target.title);
      document.querySelector('#writer').addEventListener('click',() => document.querySelector('#reader').dispatchEvent(new CustomEvent('note')));
  	  document.querySelector('#writer').addEventListener('note', e => e.target.textContent += e.target.title);
      document.querySelector('#writer').addEventListener('click',() => document.querySelector('#writer').dispatchEvent(new CustomEvent('note')));
    }</script>
</code></pre>

Результат: Отправитель события♥️♥️♥️ 
Получатель события⭐️⭐️⭐️

Ссылка на форк: <https://kodaktor.ru/custom_0700c>

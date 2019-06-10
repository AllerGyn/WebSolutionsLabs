Конкатенирующий редьюсер

<https://kodaktor.ru/startask>

Код программы:
<pre><code>
import gc from './j/goss_concat';
      const star = '⭐️';
      const length = 5;
      const mas = Array.from(Array(length)).map(s => star);
      // здесь код, который цепочкой методов .from  и .map формирует массив из length звёзд
      const answer = gc(...mas);
      // здесь код, который использует функцию gc для преобразования этого массива в строку из звёзд вместо метода .join
      Out.log(answer);
</code></pre>

Результат: ⭐️⭐️⭐️⭐️⭐️

Ссылка на форк: <https://kodaktor.ru/startask_70392>

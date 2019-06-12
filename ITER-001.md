Итерабельность

<https://kodaktor.ru/iter_001> 

Код программы:
<pre><code>
{
    class Iterable {
      constructor(length) {
          this.length = length;
      }

      getRndEvenNum(min, max) {
          return (2 * (Math.random() * (max - min)  + min).toFixed(2)).toFixed(2);
      }

      [Symbol.iterator]() {
            let arr = [],
            j = 0;
            for (let i = 0; i < this.length; i++)       
arr.push(this.getRndEvenNum(0, 1));
          return {
              next: () =>
              j < arr.length ?
                {
                    value: arr[j++],
                    done: false
                } :
                    {
                        done: true
                    }
          };
      }
    }

    const it = new Iterable(3);
    Out.log([...it]);
}
</code></pre>

Результат: 0.38,1.98,1.82

Ссылка на форк: <https://kodaktor.ru/iter_ce7c0>

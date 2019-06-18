Массив промисов

<https://kodaktor.ru/async_tasks> 

Код программы HTML:
<pre><code>
 <button>Поехали</button>
<ol id="values">
  10
  20
  30
</ol>
<ol id="urls">
  https://kodaktor.ru/api/m/
  https://kodaktor.ru/api/MS2/
 https://kodaktor.ru/api/MS3/
</ol>
</code></pre>

Код программы JS:
<pre><code>
let result = '';
const getArray = selector => { 
    let variable = selector; 
    let arr=[]; 
    for (i=0; i<variable.length; i++) { 
      arr[i]=variable[i].textContent; 
    } 
    return arr; 
  } 
  const values = getArray(document.getElementById('values').getElementsByTagName('li')); 
  const URLs = getArray(document.getElementById('urls').getElementsByTagName('li')); 
  const init = {headers: {'Content-Type': 'application/json'}}; 
  
  let URL = URLs[0]+values[0]; 
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    let temp = '';
    for (let i = 0; i<3; i++) {
      let doFetch = await fetch (URL, init)
      .then(response => response.text())
      .then((x) => temp = JSON.parse(x).result); 
      URL=URLs[i+1]+values[i+1]+'/'+temp;
    }
    console.log(`Ответ от третьего сервиса: ${temp}`);
    t.textContent = `Результат: ${result}`;
  }
); 
</code></pre>

Результат: "Ответ от третьего сервиса: 1098"

Ссылка на форк: <https://codepen.io/allergy/pen/MMjmpB?editors=1111>

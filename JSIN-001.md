JSIN-001
Вводное задание по JavaScript
<https://kodaktor.ru/jsin_001/>

Код:
{<pre><code>{
 const fDeg = 32, roubles = 25000, a = 8, b = 45, c = -18;
 let cDeg, dollars, x1, x2;
  cDeg = (fDeg - 32)*(5/9);
  dollars = (roubles/65,3834);
Out.log(cDeg)
.log(dollars);
  let D = Math.pow(b,2) - 4*a*c;
  if (D > 0) {
  x1 = (-b + Math.sqrt(D))/(2*a);
  x2 = (-b - Math.sqrt(D))/(2*a);
Out.log(x1)
.log(x2);
}
  if (D == 0) {
  let x = -b/2*a;
  Out.log(x);
}

}</code></pre> 

Результат:
3834
0.375
-6

Ссылка на форк: <https://kodaktor.ru/jsin_f314a>

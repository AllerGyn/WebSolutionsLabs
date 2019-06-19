Микшер цветов на VUE

<https://kodaktor.ru/frmw_005> 

Код программы:
<pre><code>  
  <script>
vm = new Vue({
  el: '#app',
  data: {
    colorComponents: {
      r: 255,
      g: 255,
      b: 255,
    },
  },
  computed: {
    style() {
      return {
        'background-color': `rgb(${Object.values(this.colorComponents).join(',')})`,};
    },
  },
});
</code></pre>

Результат: микшер цветов

Ссылка на форк: <https://kodaktor.ru/test_2693c>

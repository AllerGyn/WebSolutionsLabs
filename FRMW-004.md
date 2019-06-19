Vue компоненты и пропсы

<https://kodaktor.ru/frmw_004> 

Код программы:
<pre><code>  
 {

      new Vue({ 
        el: '#app',
        data: function() {
          return {count: 0, values: []}
  		},
         methods: {
          add: function(count) {
            this.values.push({exp: count});
          },
          remove: function(count) {
            this.values.splice(count);                         
          },
          addtocount: function(count) {
            this.values = [];                  
            for (let i=0; i<count; i++) {
            	this.values.push({exp: i}); 
            }                       
          }
        }
      });

      Vue.component('Deg', {
           props: ['base', 'exp'],          
           template: '<p>{{base}}<sup>{{exp}}</sup> = {{Math.pow(base,exp)}}</p>'
	  });
  
   }
</code></pre>

Результат: нужный

Ссылка на форк: <https://kodaktor.ru/frmw_b4062>

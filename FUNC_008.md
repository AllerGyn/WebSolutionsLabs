Задания по теме «Функции»

<https://kodaktor.ru/func_008> 

(массив тел, конструктор, spread)

Код программы:
<pre><code>
      <script>                   
(async function () {
	const fetchResult = await fetch('https://3336.kodaktor.ru/funcpsst', {
			method: 'post'
		})
		.then(response => response.text())
		.then((x) => data = JSON.parse(x));
	const mappingFunc = x => parseInt(x.value);
	const f0_inputs = Array.from(document.querySelectorAll(".f0")).map(mappingFunc);
	const f1_inputs = Array.from(document.querySelectorAll(".f1")).map(mappingFunc);
	const functions = data.g.map(
		function (elem) {
			return new Function('x', elem);
		}
	);
	Out.log(functions[0](f0_inputs));
	Out.log(functions[1](f1_inputs));
})();

   </script>
<div class="col-6 col-12-xsmall">Введите количество ячеек: <input type="number" id="demo-input"/> <br>
<button id="btnClicker">Построить таблицу</button></div><div id="myDiv"></div>
    <script>
bubbleSort = arr => {
	for (let i = 0, endI = arr.length - 1; i < endI; i++) {
		let wasSwap = false;
		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	}
	return arr;
};
$("#btnClicker").on("click", function () {
	let number_of_inputs = $('#demo-input').val();
	for (i = 0; i < number_of_inputs; i++) {
		$("#myDiv").append("<input type='number' id='sort-input' class='sort-input' step='1'>");
	}
	$('.col-12-xsmall').remove();
	$('#btnClicker').remove();
	$("#myDiv").append("<br><button id='btnSort'>Отсортировать</button>")
	$("#btnSort").on("click", function () {
		const user_inputs = Array.from($(".sort-input")).map(x => parseInt(x.value));
		let sorted_inputs = bubbleSort(user_inputs);
		$('.sort-input').each(function (index) {
			$(this).val(sorted_inputs[index]);
		});
	});
});
   </script>
</code></pre>

Результат: 600
55

Ссылка на форк: <https://kodaktor.ru/func_f5a1e>

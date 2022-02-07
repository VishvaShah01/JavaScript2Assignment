$(document).ready(function () {
	$('#prospect').on('click', function () {
		let xhr_object = new XMLHttpRequest();
		xhr_object.open('GET', 'prospect.html', true);
		xhr_object.send();

		xhr_object.onload = function() {
			if (xhr_object.status === 200) {
				let prospectVal = document.getElementById("content");
				prospectVal.style.display = "inline-block";
				prospectVal.innerHTML = xhr_object.responseText;
				var $contentVal = $('#content');
				$contentVal.hide();
				$contentVal.fadeIn(1500);
				$contentVal.css({
					'border' : '1.5px solid blue'
				});
			} else { 
				console.log(`Something wrong!`);
			}
		};
	});

$('#convert').on('click', function () {
	let xhr_object = new XMLHttpRequest();
	xhr_object.open('GET', 'convert.html', true);
	xhr_object.send();
	xhr_object.onload = function() {
		if (xhr_object.status === 200) {
			let convertVal = document.getElementById("content");
			convertVal.style.display = "inline-block";
			convertVal.innerHTML = xhr_object.responseText;
			var $contentVal2 = $('#content');
			$contentVal2.hide();
			$contentVal2.fadeIn(1500);
			$contentVal2.css({
				'border' : '1.5px solid blue'
			});
		} else { 
			console.log(`Something wrong!`);
		}
		};
	});

	$('#retain').on('click', function () {
	let xhr_object = new XMLHttpRequest();
	xhr_object.open('GET', 'retain.html', true);
	xhr_object.send();
	xhr_object.onload = function() {
		if (xhr_object.status === 200) {
			var retainVal = document.getElementById("content");
			retainVal.style.display = "inline-block";
			retainVal.innerHTML = xhr_object.responseText;
			var $contentVal3 = $('#content');
			$contentVal3.hide();
			$contentVal3.fadeIn(1500);
			$contentVal3.css({
				'border' : '1.5px solid blue'
			});
		} else { 
			console.log(`Something wrong!`);
		}
	};
	});
});
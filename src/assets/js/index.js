document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('input[type="number"]');
	const checkboxs = document.querySelectorAll('input[type="checkbox"]');
	const row = document.querySelector('.show_grid');
	const select = document.getElementById('select_col');

	let inputValue = parseInt(input.value);

	input.addEventListener('input', () => {
		input.setAttribute('value', input.value);
		inputValue = parseInt(input.getAttribute('value'));
		removeCol();
		createCol();
	});

	select.addEventListener('change', () => {
		removeCol();
		createCol();
	});

	checkboxs.forEach(checkbox => {
		const name = checkbox.getAttribute('name');
		const rowGap = window.getComputedStyle(row, null).rowGap;
		const columnGap = window.getComputedStyle(row, null).columnGap;

		checkbox.addEventListener('change', () => {
			switch (name) {
				case "center":
					row.classList.toggle('jcc', checkbox.checked);
					break;
				case "rowgap":
					if (!checkbox.checked) {
						row.style.rowGap = 0;
					} else row.style.rowGap = rowGap;
					break;
				case "columngap":
					if (!checkbox.checked) {
						row.style.columnGap = 0;
					} else row.style.columnGap = columnGap;
					break;
			}
		});
	});

	createCol();
	function createCol(value = input.getAttribute('value')) {
		const col = document.createElement('div');

		col.classList.add(`${select.value}`);
		col.innerHTML = `
			<div class="block"></div>
		`;

		for (let i = 0; i < value; i++) {
			row.appendChild(col.cloneNode(true));
		}

		const blocks = document.querySelectorAll('.block');
		blocks.forEach(block => {
			block.cssText = `
				nth-child(n) {
					background-color: tomato;
				}

				nth-child(2n) {
					background-color: green;
				}

				.block:nth-child(3n) {
					background-color: yellowgreen;
				}
			`;
		})
	}

	function removeCol() {
		const cols = document.querySelectorAll('.row > [class*=col]');

		cols.forEach(col => row.removeChild(col))
	}
});
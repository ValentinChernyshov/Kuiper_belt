// Получаем элементы
let first = document.getElementById('sidenav')
let second = document.getElementById('main')


// Флаги-индикаторы, показывающие скролит ли сейчас этот блок противоположная функция
// Если это не проверять, будет слетать
var firstScroll = false
var secondScroll = false


// Синхронизация скролла первого со вторым
first.onscroll = function() {
	// Проверяем скролится ли сейчас первый элемент?
	if(!firstScroll){
		// Cтавим флаг, что скролим второй элемент
		secondScroll = true

		// Присваеваем позицию первого элемента второму
		second.scrollTop = this.scrollTop
	}

	// Cбрасываем флаг (из второго эвента)
	firstScroll = false
}


// Аналогично для второго
second.onscroll = function() {
	if(!secondScroll){
		firstScroll = true
		first.scrollTop = this.scrollTop
	}
	secondScroll = false
}
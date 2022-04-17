
  class slider {
    test(){

let offset = 0; //переменная  для отступа
const sliderLine = document.querySelector('.slider-line');

// При нажатии кнопоки увеличиваем значение отступа, при максимальном отступе - возвращаемся на первый слайд
document.querySelector('.btn-next').addEventListener('click', function () {
  offset = offset + 700;
  if (offset > 1400) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
// При нажатии кнопки уменьшаем значение отступа, если значение отступа 0 (первый слайд) возвращаемся на последний
document.querySelector('.btn-prev').addEventListener('click', function () {
  offset = offset - 700;
  if (offset < 0) {
    offset = 1400;
  }
  sliderLine.style.left = -offset + 'px';
});

}
}
export { slider };
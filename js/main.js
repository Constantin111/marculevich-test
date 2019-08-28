


$(function(){

    // Добавление маски ввода для поля телефон

    $('#exampleInputTel').mask('+7(999) 999-99-99');

    // Вывод данных в модальное окно

    $('.btn__modal__start').on('click', function () {

        var imgItem = $(this).parent().parent().parent('.project__item').find('.project__item__img').attr('src');
        var titleItem = $(this).parent().parent().parent('.project__item').find('.project__item__title').text();
        var textItem = $(this).parent().parent().parent('.project__item').attr('title');

        $('#exampleModalCenter').find('.modal-title').text(textItem);
        $('#exampleModalCenter').find('.project__item__img').attr('src', imgItem);
        $('#exampleModalCenter').find('.project__item__title').text(titleItem);


    })
});

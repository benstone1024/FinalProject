$(document).on('click', '.add-writer',function () {
    var currentWriter = $('.writers-block').length;
    var newWriter = currentWriter + 1;
    var lastRepeatingForm = $('.writers-block').last();
    var template = $('.writers-block').first();
    var newSection = template.clone();
    var newHeading = $('h5', newSection).append(' ' + newWriter);

    lastRepeatingForm.removeClass('new-writer');
    newSection.insertAfter(lastRepeatingForm).hide().addClass('new-writer new-role').slideDown(1000);
    newSection.find("input").each(function (index, input) {
        var i = $(this).attr('id');
        $(this).attr('id', i + newWriter);
    });
    newSection.find("label").each(function (index, label) {
        var l = $(this);
        l.attr('for', l.attr('for') + newWriter);
    });
    return false;
});



//define artistSection
var artistSection = $('#sections .section:first').clone();

//define counter
var sectionsCount = 1;

//add new section
$('body').on('click', '.addwriter', function() {

    //increment
    sectionsCount++;

    //loop through each input
    var section = artistSection.clone().find(':input').each(function(){

        //set id to store the updated section number
        var newId = this.id + sectionsCount;

        //update for label
        $(this).prev().attr('for', newId);

        //update id
        this.id = newId;

    }).end()

    //inject new section
    .appendTo('#sections');
    return false;
});

//remove section
$('#sections').on('click', '.remove', function() {
    //fade out section
    $(this).parent().fadeOut(300, function(){
        //remove parent element (main section)
        $(this).parent().parent().empty();
        return false;
    });
    return false;
});

/* this is the end of the clone section*/

/*This is the start of text input capture section*/



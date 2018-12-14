/*//define artistSection
var artistSection = $('#sections .section:first').clone();

//define counter
var sectionsCount = 1;

//add new section
$('body').on('click', '.addwriter', function() {

    //increment
    sectionsCount++;

    //loop through each input
    var section = artistSection.clone().find('.inputPRO','.inputProPercent','.inputPercent','.inputName').each(function(){

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

$('#sendInfo').click(function(event){
    event.preventDefault();
    var songTitle = $('#songTitle').val();
    var nameInput = $('#inputName1').val();
    var writerPercent = $('#inputPercent1').val();
    var ProInput = $('#inputPro1').val();
    var PubPercent = $('#inputProPercent1').val();
    
    console.log(songTitle,nameInput,writerPercent,ProInput,PubPercent)
    

    var songTitle = $('#songTitle').val();
    var nameInput2 = $('#inputName2').val();
    var writerPercent2 = $('#inputPercent2').val();
    var ProInput2 = $('#inputPro2').val();
    var PubPercent2 = $('#inputProPercent2').val();
    
    console.log(songTitle,nameInput2,writerPercent2,ProInput2,PubPercent2)


    var songTitle = $('#songTitle').val();
    var nameInput3 = $('#inputName3').val();
    var writerPercent3 = $('#inputPercent3').val();
    var ProInput3 = $('#inputPro3').val();
    var PubPercent3 = $('#inputProPercent3').val();
    
    console.log(songTitle,nameInput3,writerPercent3,ProInput3,PubPercent3)

    var songTitle = $('#songTitle').val();
    var nameInput4 = $('#inputName4').val();
    var writerPercent4 = $('#inputPercent4').val();
    var ProInput4 = $('#inputPro4').val();
    var PubPercent4 = $('#inputProPercent4').val();
    
    console.log(songTitle,nameInput4,writerPercent4,ProInput4,PubPercent4)

    var songTitle = $('#songTitle').val();
    var nameInput5 = $('#inputName5').val();
    var writerPercent5 = $('#inputPercent5').val();
    var ProInput5 = $('#inputPro5').val();
    var PubPercent5 = $('#inputProPercent5').val();
    
    console.log(songTitle,nameInput5,writerPercent5,ProInput5,PubPercent5)

    var songTitle = $('#songTitle').val();
    var nameInput6 = $('#inputName6').val();
    var writerPercent6 = $('#inputPercent6').val();
    var ProInput6 = $('#inputPro6').val();
    var PubPercent6 = $('#inputProPercent6').val();
    
    console.log(songTitle,nameInput6,writerPercent6,ProInput6,PubPercent6)

    var songTitle = $('#songTitle').val();
    var nameInput7 = $('#inputName7').val();
    var writerPercent7 = $('#inputPercent7').val();
    var ProInput7 = $('#inputPro7').val();
    var PubPercent7 = $('#inputProPercent7').val();
    
    console.log(songTitle,nameInput7,writerPercent7,ProInput7,PubPercent7)

    var songTitle = $('#songTitle').val();
    var nameInput8 = $('#inputName8').val();
    var writerPercent8 = $('#inputPercent8').val();
    var ProInput8 = $('#inputPro8').val();
    var PubPercent8 = $('#inputProPercent8').val();
    
    console.log(songTitle,nameInput8,writerPercent8,ProInput8,PubPercent8)

    var songTitle = $('#songTitle').val();
    var nameInput9 = $('#inputName9').val();
    var writerPercent9 = $('#inputPercent9').val();
    var ProInput9 = $('#inputPro9').val();
    var PubPercent9 = $('#inputProPercent9').val();
    
    console.log(songTitle,nameInput9,writerPercent9,ProInput9,PubPercent9)

    var songTitle = $('#songTitle').val();
    var nameInput10 = $('#inputName10').val();
    var writerPercent10 = $('#inputPercent10').val();
    var ProInput10 = $('#inputPro10').val();
    var PubPercent10= $('#inputProPercent10').val();
    
    console.log(songTitle,nameInput10,writerPercent10,ProInput10,PubPercent10)
});


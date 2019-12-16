$('document').ready(function(){

    $('#fetch').click( function(){
        $('#joke_area').empty();
          getData();

    }
  
    );


    function getData(){
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            type: 'GET',
            dataType: 'json',
            success: function(result){
                console.log(result)
                $('#joke_area').append(result.value.joke);
            }
        })
    }


})




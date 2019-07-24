$( document ).ready(function() {
    console.log( "ready!" );

//Move Large Block w/button---------------------

$("#large_one").click(function(){
    $("#block_large").appendTo("#tower_one");
    
});

$("#large_two").click(function(){
    $("#block_large").appendTo("#tower_two");
    
});

$("#large_three").click(function(){
    $("#block_large").appendTo("#tower_three");
    
});

//Move Medium Block w/button-----------------------------------

$("#med_one").click(function(){
    $("#block_medium").appendTo("#tower_one");
    
});

$("#med_two").click(function(){
    $("#block_medium").appendTo("#tower_two");
    
});

$("#med_three").click(function(){
    $("#block_medium").appendTo("#tower_three");
    
});

//Move Small Block w/button--------------------------------

    $("#sm_one").click(function(){
        $("#block_small").appendTo("#tower_one");
        
    });

    $("#sm_two").click(function(){
        $("#block_small").appendTo("#tower_two");
        
    });

    $("#sm_three").click(function(){
        $("#block_small").appendTo("#tower_three");
        
    });


});
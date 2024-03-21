

// $('button').click(function(){
//     console.log('hello');
// })


// querySelectorAll
$('ul li').click(function(){
    //   console.log(e);
    //   e.target.css('color', 'red') // wrong


    // jquery wala this -> target bas

    $(this).css('color', 'green')
})

// keyup , keydown

// $('input').keyup(function(){
//     console.log("hello");
// })

// $('input').keydown(function(){
//     console.log("rocky");
// })

// addEventlistener()  -> on

// $('button').on('click',function(){
//     let ans = $('input').val()
//     console.log(ans);
// })

//-------------------------------------
// effects

$('#fadeIn').on('click', function(){
     $('#container').fadeIn()
})
$('#fadeOut').on('click', function(){
    $('#container').fadeOut()
})
$('#fadeToggle').on('click', function(){
    $('#container').fadeToggle()
})
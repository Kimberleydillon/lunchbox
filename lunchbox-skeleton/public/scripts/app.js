$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;
  $('#title').on('click', function() {
  	var deg = 0;
  	setInterval(() => {
  		$(this).css({'transform' : 'rotate(' + deg +'deg)'});
  		deg++;
  		deg++;
  	}, 12);
  });

});


// $(document).ready(function(){
//   $('#name_cust').on("mouseover", function(event){
//   var name = $('#name_cust').keyup(function(){
//     $('.confirm').text($(this).val());
//   });
//   var phone = $('#phone_num').keyup(function(){
//     $('.confirm').text($(this).val());
//   });

//    // event.preventDefault();
//     //  var food = $(this).find('name_cust').value()
//     //  console.log(food);
//   $(".confirm").text("Thank you for ordering!" + name + phone);
//   $(".confirm").css("height", "100px");
//   $(".confirm").css("width", "100%");
//   $(".confirm").css("background-color", "yellow");
// });
// });



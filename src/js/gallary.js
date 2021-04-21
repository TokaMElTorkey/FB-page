import $ from 'jquery';
$(document).ready(function () {

  // User Data
  $.getJSON("../src/js/local/gallary.json", function (data) {
    var userGallary = data[0].userGallary;
    var length = userGallary.length;
    for (var i = 0; i < userGallary.length; i++) {
      $("#user-can-post .gallary figure").append(
        '<img srcset="' +
        (userGallary[i].imgMed) +
        ' 2x , ' +
        (userGallary[i].imgFull) +
        ' 3x"' +
        'src="' +
        (userGallary[i].imgSmall) +
        '" alt="' +
        (userGallary[i].alt) +
        '"></img>'
      )
    }


    var modal = $("#imgModal");
    var img = $("#user-can-post .gallary figure img");
    var fullImg = $("#img01");
    img.click(function () {
      modal.css("display", "block");
      fullImg.attr("src", this.src);
    })

    var span = $(".close");
    span.click(function () {
      modal.css("display", "none");
    });
    $(".next").click(function (e) {
      e.preventDefault();
    });
    $(".prev").click(function (e) {
      e.preventDefault();
    });

    $('.next').click(function () {
      fullImg.attr("src", $('#user-can-post .gallary figure img').next().attr('src'));
    });
    $('.prev').click(function () {
      fullImg.attr("src", ($('#user-can-post .gallary figure img').prev().attr('src')));

    });

  }).fail(function () {
    console.log("An error has occurred.");
  });


});



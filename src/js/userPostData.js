import $ from 'jquery';

$(document).ready(function () {

  // User Data
  $.getJSON("../src/js/local/profile-data.json", function (data) {
    var userInfo = data[0].userInfo;
    $("#profile-and-name figure ").append('<img srcset="../src/imgs/profile.jpg 2x" src="../src/imgs/profile-small.jpg" alt="Profile Photo" />')
    $("#profile-and-name h1").append(userInfo.name);
    $("#profile-and-name p.hint-text").append(userInfo.slogan);
    var userDetails = data[0].userDetails;
    $("#user-data-info ul.left-ul li:first-child span.data").append(userDetails.liveIn)
    $("#user-data-info ul.left-ul li:nth-child(2) span.data").append(userDetails.from);
    $("#user-data-info ul.right-ul li:first-child span.data").append(userDetails.education);
    $("#user-data-info ul.right-ul li:nth-child(2) span.data").append(userDetails.dOB);
  }).fail(function () {
    console.log("An error has occurred.");
  });


  //Posts
  $.getJSON("../src/js/local/profile-posts.json", function (data) {
    var userPost = data[0].userPost;
    var length = userPost.length;
    for (var i = 0; i < userPost.length; i++) {
      $(".posts-container").append(
        '<div class="col-12">' +
        '<div class="box-with-shadow">' +
        '<div class="media">' +
        '<figure>' +
        '<img srcset="' + (userPost[i].imgProfile) + '" 2x" src="' + (userPost[i].imgProfileSmall) + '" alt="Profile Photo" class="mr-3 post-profile" />' +
        '</figure>' +
        '<div class="media-body">' +
        '<h5 class="mt-0">' + (userPost[i].name) + '</h5>' +
        '<p>' + (userPost[i].post) + '</p>' +
        '<p>' +
        '<span class="reacts">11<i class="fas fa-heart"></i></span>' +
        '<span class="reacts">5<i class="fas fa-comments"></i></span>' +
        '<span class="hint-text">' + (userPost[i].dateAndTime) + '</span>' +
        '</p>' +
        '<div class="media">' +
        '<figure>' +
        '<img srcset="' + (userPost[i].imgProfile) + '" 2x" src="' + (userPost[i].imgProfileSmall) + '" alt="Profile Photo" class="mr-3 post-profile">' +
        '</figure>' +
        '<div class="media-body comments">' +
        '<h5 class="mt-0">' + (userPost[i].commentedBy) + '</h5>' +
        '<p>' + (userPost[i].comment) + '</p>' +
        '<p>' +
        '<span class="hint-text">' + (userPost[i].dateAndTime) + '</span>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '<div class="form-group mt-3">' +
        '<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your comment here"></textarea>' +
        '</div>' +
        '</div >' +
        '</div >' +
        '</div >' +
        '</div >'
      )
    }
  }).fail(function () {
    console.log("An error has occurred.");
  });
});

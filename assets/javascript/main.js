
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCkRM_8C5obGVgwlWk87Oen6gpaA475yBE",
    authDomain: "rutgersinfocities.firebaseapp.com",
    databaseURL: "https://rutgersinfocities.firebaseio.com",
    projectId: "rutgersinfocities",
    storageBucket: "rutgersinfocities.appspot.com",
    messagingSenderId: "763372287123"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

var intervalId;
var number = 10;
var city;
var user = {
    username: "",
    password: ""
}
var projects = ["Word Game", "Star Wars RPG", "Trivia Game", "GifTastic", "Train Schedule", "InfoCities"];

var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      console.log(user.displayName);
      $(".signIn").addClass("d-none");
      $(".signIn").removeClass("d-inline");
      $(".register").addClass("d-none");
      $(".register").removeClass("d-inline");
      $("#profileLink").text(user.displayName);
      $("#userName").text("Hello, " + user.displayName);
      $("#profileLink").removeClass("d-none");
      uid = user.uid;
  }
})

$(document).ready(function() {



//<---------database code---------//

//<---------web page code---------//

//populates the selection of cities
function populateSelection() {
    for (var i = 0; i < projects.length; i++) {
        var item = $("<a>");
        item.addClass("dropdown-item");
        item.attr("href", "https://joeceran.github.io/" + projects[i] + "/" + projects[i] + ".html");
        item.attr("currentCity", projects[i].toLowerCase());
        item.text(projects[i]);
        $(".dropdownbar").append(item);
      }
    }
//populateSelection();

//---==on-click events-----//
//Drop down menu Items
$(".dropdown-item").on("click",function() {
    city = $(this).attr("currentCity");
    console.log(city);
    localStorage.setItem("currentCity", city);
});

//AboutMe Link
$("#AboutMe").on("click",function() {
    $(".message").fadeOut(500, function() {
        $(".message").empty();
        var row = $("<div>");
        row.addClass("row");
        var row2 = $("<div>");
        row2.addClass("row");
        var col = $("<div>");
        var col2 = $("<div>");
        var col3 = $("<div>");
        var hr = $("<hr>");
        col.addClass("col-md-2");
        col2.addClass("col-md-5 offset-md-2");
        col3.addClass("col-md-12");
        var image = $("<img>");
        image.addClass("JoeImg");
        var header = $("<h1>");
        var breaker = $("<br>");
        header.attr("id","Header");
        var message = $("<p>");
        image.attr("src","assets/images/Joe.PNG");
        header.text("About Me");
        message.text("Hi, my name is Joe Cerankowski and welcome to my webpage! Please feel free to take a look at all my work!"
        + "I am current working on many projects in both Javascript and Python. You can find the links to said projects in the "
        + "NavBar. Feel free to contact me about any questions regarding my work. Thanks again for taking a look at my software!");
        $(".message").append(row).append(hr).append(row2);
        $(row).append(col).append(col2);
        $(col).append(image);
        $(col2).append(header);
        $(row2).append(col3);
        $(col3).append(message);
        $(".message").fadeIn(500);
    });
});

//Contact Link
$("#ContactMe").on("click",function() {
        $(".message").fadeOut(500, function() {
            $(".message").empty();
            var form = $("<form>");
            var row = $("<div>");
            row.addClass("row");
            var row2 = $("<div>");
            row2.addClass("row");
            var row3 = $("<div>");
            row3.addClass("row");
            var row4 = $("<div>");
            row4.addClass("row");
            var row5 = $("<div>");
            row5.addClass("row");
            var row6 = $("<div>");
            row6.addClass("row");
            var row7 = $("<div>");
            row7.addClass("row");
            var row8 = $("<div>");
            row8.addClass("row");
            var col = $("<div>");
            var col2 = $("<div>");
            var col3 = $("<div>");
            var col4 = $("<div>");
            var col5 = $("<div>");
            var col6 = $("<div>");
            var col7 = $("<div>");
            var col8 = $("<div>");
            var col9 = $("<div>");
            var hr = $("<hr>");
            col.addClass("col-md-2");
            col2.addClass("col-md-12");
            col3.addClass("col-md-12");
            var image = $("<img>");
            image.addClass("JoeImg");
            var header = $("<h1>");
            header.attr("id","Header");
            header.text("Contact Me");
            var name = $("<input>");
            var email = $("<input>");
            var message = $("<textarea>");
            var nameHead= $("<label>");
            var emailHead= $("<label>");
            var messageHead= $("<label>");
            var button= $("<button>");
            name.attr("placeholder", "Enter your name...");
            email.attr("placeholder", "Enter your email...");
            message.attr("placeholder", "Enter your message...");
            button.addClass("btn offset-md-1");
            nameHead.text("Name");
            emailHead.text("Email");
            messageHead.text("Message");
            button.text("submit");
            button.attr("id", "submit");
            $(".message").append(row).append(hr).append(form).append(row2).append(row3).append(row4).append(row5).append(row6).append(row7).append(row8);
            $(row).append(col2);
            $(col2).append(header);
            $(row2).append(col3);
            $(col3).append(nameHead);
            $(row3).append(col4);
            $(col4).append(name);
            $(row4).append(col5);
            $(col5).append(emailHead);
            $(row5).append(col6);
            $(col6).append(email);
            $(row6).append(col7);
            $(col7).append(messageHead);
            $(row7).append(col8);
            $(col8).append(message);
            $(row8).append(col9);
            $(col9).append(button);
            $(".message").fadeIn(500);
    });
});

//Javascript Link
$(".Javascript").on("click",function() {
    $(".message").fadeOut(500, function() {
        $(".message").empty();
        var row = $("<div>");
        row.addClass("row");
        var row2 = $("<div>");
        row2.addClass("row");
        var row3 = $("<div>");
        row3.addClass("row");
        var col = $("<div>");
        var col2 = $("<div>");
        var col3 = $("<div>");
        var col4 = $("<div>");
        var col5 = $("<div>");
        var hr = $("<hr>");
        var hr2 = $("<hr>");
        col.addClass("col-md-2");
        col2.addClass("col-md-12 ");
        col3.addClass("col-md-5 offset-md-1");
        col4.addClass("col-md-4 offset-md-1");
        col5.addClass("col-md-5 offset-md-1");
        var image = $("<img>");
        var imageTitle = $("<a>");
        var imageLink = $("<a>");
        var imageTitle2 = $("<a>");
        var imageLink2 = $("<a>");
        var imageTitle3 = $("<a>");
        var imageLink3 = $("<a>");
        var image2 = $("<img>");
        var image3 = $("<img>");
        var image4 = $("<img>");
        image.addClass("LinkImg");
        imageTitle.addClass("btn btnLink");
        imageLink.addClass("btn btnLink");
        imageTitle.attr("href", "https://joeceran.github.io/WordGame/WordGuessingGame.html")
        imageLink.attr("href", "https://github.com/JoeCeran/WordGame/")
        imageTitle2.addClass("btn btnLink");
        imageLink2.addClass("btn btnLink");
        imageTitle2.attr("href", "https://joeceran.github.io/StarWarsRPG/StarWarsRPG.html")
        imageLink2.attr("href", "https://github.com/JoeCeran/StarWarsRPG")
        imageTitle3.addClass("btn btnLink");
        imageLink3.addClass("btn btnLink");
        imageTitle3.attr("href", "https://joeceran.github.io/TriviaGame/TriviaGame.html")
        imageLink3.attr("href", "https://github.com/JoeCeran/TriviaGame/")
        image2.addClass("LinkImg");
        image3.addClass("LinkImg");
        var header = $("<h1>");
        var breaker = $("<br>");
        header.attr("id","Header");
        image.attr("src","/assets/images/Word.PNG");
        imageTitle.text("Word-Game");
        imageLink.text("Github link");
        imageLink2.text("Github link");
        imageLink3.text("Github link");
        imageTitle2.text("RPG-Game");
        imageTitle3.text("Trivia-Game");
        image2.attr("src","/assets/images/RPG.PNG");
        image3.attr("src","/assets/images/Trivia.PNG");
        header.text("Portpholio: Javascript Projects");
        $(".message").append(row).append(hr).append(row2).append(hr2).append(row3);
        $(row).append(col2);
        $(col).append(image);
        $(col2).append(header);
        $(row2).append(col3).append(col4);
        $(col3).append(image).append(imageTitle).append(imageLink);
        $(col4).append(image2).append(imageTitle2).append(imageLink2);
        $(row3).append(col5);
        $(col5).append(image3).append(imageTitle3).append(imageLink3);
        $(".message").fadeIn(500);
    });
});



function changeBackground() {
    intervalId = setInterval(decrement, 3000);
}

//controls the animation and changing of the background images
function decrement() {
number--;
if (number === 10) {
    $(".bimg").fadeOut(500, function() {
    $(".bimg").css("background", "url('/assets/images/Image1.PNG')");
    $(".bimg").css("background-position", "center");
        $(".bimg").css("background-repeat", "no-repeat");
        $(".bimg").css("background-size", "cover");
        $(".bimg").css("height", "100%");
        $(".bimg").css("width", "100%");
    $(".bimg").fadeIn(500);
    });
}
else if (number === 6){
    $(".bimg").fadeOut("slow", function() {
        $(".bimg").css("background", "url('/assets/images/Image2.PNG')");
        $(".bimg").css("background-position", "center");
        $(".bimg").css("background-repeat", "no-repeat");
        $(".bimg").css("background-size", "cover");
        $(".bimg").css("height", "100%");
        $(".bimg").css("width", "100%");
        });
        $(".bimg").fadeIn("slow");
}
else if (number === 3){
    $(".bimg").fadeOut(500, function() {
        $(".bimg").css("background", "url('../images/Image3.JPG')");
        $(".bimg").css("background-position", "center");
        $(".bimg").css("background-repeat", "no-repeat");
        $(".bimg").css("background-size", "cover");
        $(".bimg").css("height", "100%");
        $(".bimg").css("width", "100%");
        });
        $(".bimg").fadeIn(500);
}
else if (number === 0){
    number = 11;
}
}
changeBackground();

var points = [
  {x:780, y:190, city: "Philadelphia"}, 
  {x:801, y:170, city: "New York"},
  {x:68, y:309, city: "Los Angeles"},
  {x:580, y:180, city: "Chicago"},
  {x:172, y:334, city: "phoenix"},
  {x:471, y:447, city: "houston"},
  {x:25, y:214, city: "san francisco"},
  {x:761, y:220, city: "washington dc"},
  {x:313, y:227, city: "denver"},
  {x:758, y:494, city: "miami"},
  {x:89, y:12, city: "seattle"},
  {x:834, y:128, city: "boston"},
  {x:570, y:433, city: "new orleans"},
  {x:558, y:321, city: "memphis"},
  {x:437, y:386, city: "dallas"},
  {x:706, y:303, city: "charlotte"},
  {x:652, y:163, city: "detroit"},
  {x:769, y:210, city: "baltimore"},
  {x:476, y:243, city: "kansas city"},
  {x:658, y:345, city: "atlanta"},
  
]
function drawPoint(point){   
      div = $("<div />")
          div.attr("class", 'cityMarker')
          div.css("top", point.y)
          div.css("left", point.x)
          $("#container").append(div)
}
for (var i = 0; i < points.length; i++) {
drawPoint(points[i]);
}

console.log("hello")
});
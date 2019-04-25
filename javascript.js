/*var img1 = document.getElementById("img1");
	img1.onmouseover = function(){this.src = "images/logo.jpg";};
	//code for the mouse out
	img1.onmouseout = function(){this.src = "images/portfoliopic1.jpg";};

var img2 = document.getElementById("img2");
	img2.onmouseover = function(){this.src = "images/logo.jpg";};
	//code for the mouse out
	img2.onmouseout = function(){this.src = "images/portfoliopic1.jpg";};

var img3 = document.getElementById("img3");
	img3.onmouseover = function(){this.src = "images/logo.jpg";};
	//code for the mouse out
	img3.onmouseout = function(){this.src = "images/portfoliopic1.jpg";}; */
    
    //Change image when mouse is placed over the image
    $("#img1").mouseover(function(){this.src="imgages/logo.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img1").mouseleave(function(){this.src="images/portfoliopic1.jpg";});
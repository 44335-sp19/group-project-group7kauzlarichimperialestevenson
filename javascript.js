


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
$(document).ready(function(){
    $("#img1").mouseover(function(){this.src="images/logo.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img1").mouseout(function(){this.src="images/portfoliopic1.jpg";});
    
    $("#img2").mouseover(function(){this.src="images/pamphlet.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img2").mouseout(function(){this.src="images/portfoliopic2.jpg";});
    
    $("#img3").mouseover(function(){this.src="images/socialmedia.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img3").mouseout(function(){this.src="images/portfoliopic3.jpg";});
    
    $("#img4").mouseover(function(){this.src="images/website.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img4").mouseout(function(){this.src="images/portfoliopic4.jpg";});
    
    $("#img5").mouseover(function(){this.src="images/emailgraphic.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img5").mouseout(function(){this.src="images/portfoliopic5.jpg";});
    
    $("#img6").mouseover(function(){this.src="images/websitedesign.jpg";});
    //Change image back to tower logo when the mouse moves off the image
    $("#img6").mouseout(function(){this.src="images/portfoliopic6.jpg";});
});
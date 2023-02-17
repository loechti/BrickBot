"use strict";

var loaded = false;

e
function render() {


	// how many entries are there?
	var r1 = Math.floor(Math.random() * (items.length));
	var r2 = Math.floor(Math.random() * (constraints.length));
	var r3 = Math.floor(Math.random() * (bricks.length));

	var designItem = items[r1];
	var designConstraint = constraints[r2];
	var brickItem = bricks[r3];


    $("#intro").html("");
    $("#intro").text(prependText);


    $("#design-item").html("");
    $("#design-item").text(designItem);

	if($("#checkConstraint").is(":checked")){
		$("#design-item").append(" ");
		$("#constraint").html("");
		$("#constraint").text(designConstraint);
	} else {
		$("#constraint").html("");
    	$("#constraint").text("");
	}

 	if($("#checkBrick").is(":checked")){
		$("#constraint").append(" ");
		$("#brick").html("");
    	$("#brick").text(brickItem);
	} else {
		$("#brick").html("");
    	$("#brick").text("");
	}

		
	if (designItem.search("a") == 0 || designItem.search("e") == 0 || designItem.search("i") == 0 || designItem.search("o") == 0 || designItem.search("u") == 0 ){
		    $("#intro").append("n ");
	    } else {
		    $("#intro").append(" ");
	    }
    	 

}




   
$("document").ready(render);
    
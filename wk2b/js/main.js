/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
/* %%%%%%%%%%%%%%% Globals %%%%%%%%%%%%%%  */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */

var autoFillData = function(){
	// Retrieves JSON Objects from json.js and adds them to local storage if no default data is present.
	for(var n in json){
		var id = Math.floor(Math.random()*123456789);
		localStorage.setItem(id, JSON.stringify(json[n]));
			console.log("autofill worked");
	}
};

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
/* %%%%%%%%% Get Local Storage %%%%%%%%%%  */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */

var getData = function(){
	if(localStorage.length === 0){
		var verify=confirm("There are no logs in Local Storage so default logs will be added");
		autoFillData();
	}
	$("#loggerList").empty();
    for (var i= 0, j=localStorage.length; i<j ; i++){
        var key = localStorage.key(i);
        var item = JSON.parse(localStorage.getItem(key));
        console.log(item);
        var makeSubList = $("<li></li>");
        var makeSubLi = $( "<h3>"+item.formDate[1]+"</h3>"+
            "<p><strong>"+item.time[1]+"</strong></p>" +
            "<p>"+item.gratitude[1]+"</p>"+
            "<p>"+item.story[1]+"</p>" +
            "<p>"+item.favcolor[1]+"</p>"+
            "<p>"+item.which[1]+"</p>");
        makeSubList.append(makeSubLi).appendTo("#loggerList");
        //how it will appear when it populates
        
       	
    }; // end loop
  	$('#loggerList').listview('refresh');
};

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
/* %%%% Save Form Log Into Local %%%%%%%%  */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */

var saveData = function(key) {
	if(!key) {
		var id = Math.floor(Math.random()*123456789);
	}else{
		id = key;
	}
	getCheckboxValues();
	var item 					= {};
		item.formDate 			= ["DATE", $("#formDate").val()];
		item.time				= ["TIME:", $("#time").val()];
		item.gratitude			= ["WHAT I'M GRATEFUL FOR:", $("#gratitude").val()];
		item.story				= ["IS THERE A STORY BEHIND THIS?:", $("#story").val()];
		item.favcolor			= ["WHAT COLOR DO YOU LIKE BEST TODAY?:", $("#favcolor").val()];
		item.which				= ["WHICH ITEMS MAKE YOU HAPPY?:", $("input:checkbox[name=items]:checked").val()];

			
	// Saves the Data into Local Storage with JSON.stringify
	localStorage.setItem(id, JSON.stringify(item));
	alert("SUCCESSFULLY LOGGED!");
	location.reload();
};

var getCheckboxValues = function(){
    if($('#checks').checked){
        var favoriteValue = $('#checks').value;
    } else {
       	favoriteValue = "No";
    }
};

var deleteItem = function(){
	var ask = confirm(" Are you sure you want to throw this log out?");
	if(ask){
		localStorage.removeItem(this.key);
		alert("Log was tossed!");
		window.location.reload();
	}else{
		alert("Your log was not tossed!");

	}
};

var editItem = function(key) {
	// Grabs data from our log in Local Storage
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	// Populates the Form Fields with current LocalStorage Values
	$('#forDate').val(item.forDate[1]);
	$('#time').val(item.time[1]);
	$('#gratitude').val(item.gratitude[1]);
	$('#story').val(item.story[1]);
	$('#favcolor').val(item.favcolor[1]);
	$('#which').val(item.which[1])
	$('submit').value = "Save Changed Log";
	var editSubmit = $('submit');
	editSubmit.key = this.key;
};

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
/* %%%%Clear Local Storage Fucntion %%%%%  */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */

var clearLogS = function() {
	if (localStorage.length === 0) {
		alert("There are no logs to toss.");
	}else{
		var clear = confirm("Do you really want to toss all logs?");
	if (clear) {
		localStorage.clear();
		alert("All logs have been tossed!");
		window.location.reload();
		return false;
	}else{
		alert("Your logs are still here.");
		}
	}
};

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
/* %%%%%%%%% jQuery Calls %%%%%%%%%%%%%%%  */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */

/*%%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME
  %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME
  %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME
  %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME PAGE %%%%% HOME*/

$('#indexPage').on('pageinit', function(){
	console.log("Index loaded")
});


/*%%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%%
  %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%%
  %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%%
  %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%% FORM PAGE %%%%%*/
  
$('#addGratForms').on('pageinit', function(){
	console.log("Add log Loaded");
/*	var addIF = $('#addGratForm');
    var	errorsLink = $('#addGratErrorsLink');
    addIF.validate({
        invalidHandler: function(form, validator){
        	errorsLink.click();
        	var html = '';
        	for(var key in validator.submitted){
        		var label = $('label[for^="'+ key +'"]').not('[generated]');
        		var legend = label.closest('fieldset').find('.ui-controlgroup-label');
        		var fieldName = legend.length ? legend.text() : label.text();
        		html += '<li>' + fieldName + '</li>';
        	};
        	$("#addGratErrors ul").html(html);
        },
        submitHandler: function(){
            var data = addIF.serializeArray();
            console.log(data);
            saveData(data);
        },
    });*/
});

/*%%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page
  %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page
  %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page
  %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page %%%%% iSpyLocal Page*/
  
$('#iSpyLocal').on('pageinit', function(){
	// console.log("iSpyLocal Loaded")
	$("#clear").click (clearLogS);

	$(".display").click (getData);
});

/*%%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%%
  %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%%
  %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%%
  %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%% oneLog Page %%%%%*/
  
  //imports logs from json and xml

$("#oneLog").on('pageinit',function(){
	console.log("onLog page Loaded")
	$('#jsonBTN').on("click", function(){
        $('#logData').empty();
        $.getJSON('xhr/gratitudes.json', function(jdata) {
        	console.log(jdata);
			var h2 = $('#h2');
            h2.empty().html('<b>JSON Data</b>: ').css("color", "red");
            for ( var i = 0, len = jdata.logs.length; i < len; i++ ) {
                var item = jdata.logs[i];
				// console.log(item);
        	$('#logData').append("<h3>"+ item.formDate[0] + " " + item.formDate[1] +"</h3>")
        				  .append("<p><strong>"+ item.time[0] + " " + item.time[1] +"</strong></p>")
        				  .append("<p>"+ item.gratitude[0] + " " + item.gratitude[1] +"</p>")
        				  .append("<p>"+ item.story[0] + " " + item.story[1] +"</p>")
        				  .append("<p>"+ item.favcolor[0]		+ " " + item.favcolor[1] +"</p>")
        				  .append("<p>"+ item.which[0]		+ " " + item.which[1] +"</p>")
        				  .append("<hr />");
        	}
        });
	});
    $('#xml').on('click', function(){
    	$('#logData').empty();
        $.get('xhr/gratitudes.xml', function(csv) {
            console.log(xml);
            var h2 = $('#h2');
            h2.empty().html('<b>XML LOGS</b>: ').css("color", "green");
            var run = xml.split(/\r\n|\n/);
            var cats = run[0].split('|');
            var info = [];
            for (var i=1; i<run.length; i++) {
              	var data = run[i].split('|');
             	if (data.length == cats.length) {
                   var items = [];
                   for (var j=0; j<cats.length; j++) {
                       items.push(data[j]);
                       }
                       info.push(items);
                       }
                }
			for (var k=0; k<info.length; k++){
			var line = info[k];
            $('#logData').append("<h3>"+ 'DATE: ' + " " + line[0] +"</h3>")
				  .append("<p><strong>"+ 'TIME: '+line[1]+"</strong></p>")
				  .append("<p>"+'WHAT I AM GRATEFUL FOR: '+line[2]+"</p>")
				  .append("<p>"+'IS THERE A STORY BEHIND THIS?: '+line[3]+"</p>")
				  .append("<p>"+'WHAT COLOR DO YOU LIKE BEST TODAY?: '+line[4]+"</p>")
				  .append("<p>"+'WHICH ITEMS MAKE YOU HAPPY?: '+line[5]+"</p>")
				  .append("<hr />");
            }
        }, "text");
    });
});












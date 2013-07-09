$.ajaxSetup({
//Turn off the cache so that the contents are not cached by the browser:
cache: false,
//Set the data type of the response. In this case, since we are going to load the contents from the HTML file, the dataType is HTML:
dataType: "html",
//Define the callback function if the AJAX request fails. The callback function takes in three parameters: the XMLHttpRequest object, the error status, and an exception object:
error: function(xhr, status, error) {
             alert('An error occurred: ' + error);
      },

//Define the global timeout in milliseconds:
timeout: 30000,
//Set the type of HTTP request (GET/POST):
type: "GET",
//Define the callback function to be called before the AJAX request is initiated. This function can be used to modify the Xml HttpRequest object:
beforeSend: function() {
           console.log('In Ajax beforeSend function');
     },

//Define the function to be called when the AJAX request is completed:
complete: function() {
        console.log('In Ajax complete function');
        }
    });

//Now, having set the default properties in the previous code block, we will now invoke the actual AJAX call on clicking the button control on the form.

//Attach a handler for the click event of the button control:
$("#btnSubmit").click(function(e) {
//Prevent default form submission:
e.preventDefault();
//Initiate the AJAX call using the .ajax() method:
$.ajax({
//Specify the URL to send the request to. In this case, we're sending the request to the HTML file:
url: "Content.htm",
//Define the callback function for successful execution of the AJAX call:
success: function(data) {
//The HTML response from the server is received in the data parameter in the preceding callback function.

//Clear the contents of the containing div area to remove the button control and append the received HTML response:
$("#contentArea").html("").append(data);
        }
     });
   });

//Thus, the complete jQuery solution is as follows:

<script language="javascript" type="text/javascript">
   $(document).ready(function() {
     $.ajaxSetup({
        cache: false,
        dataType: "html",
        error: function(xhr, status, error) {
              alert('An error occurred: ' + error);
        },
        timeout: 30000,
        type: "GET",
        beforeSend: function() {
              console.log('In Ajax beforeSend function');
        },
        complete: function() {
        console.log('In Ajax complete function');
        }
    });

$("#btnSubmit").click(function(e) {
    e.preventDefault();
    $.ajax({
        url: "Content.htm",
        success: function(data) {
        $("#contentArea").html("").append(data);
        }
     });
  });
});
</script>


// function init(){
//   $.ajax({
//     contentType:"application/json",
//     dataType:"json",
//     url: 'https://www.parse.com/apps/art_sentiment/collections',
//     username:appId,
//     password:masterKey,
//     processData:false,
//     headers: {
//         "X-Parse-Application-Id": "<REMOVED>",
//         "X-Parse-REST-API-Key": "<REMOVED>"
//     },
//     type:"GET",
//     error:function(e) { alert('error: '+e);}
//   }).done(function(e,status) {
//     var user = e.results[0];
//     var s = user.deviceId;
//     $("#result").html(s);
// });
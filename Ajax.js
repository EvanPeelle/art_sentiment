cookies:  maintain login to fb.
it has the power to be me on facebook.
it needs to be restrained in some ways,
so that the evil websites do not use them,
or be envolved.

tied to domain and you.
long list in one string.

stored in seperate system than local storage.
4k

cross origin js requests -
there are restrictions from browser.


AJAX: makes an ajax request to facebook from evil.com.
evil.com has my cookies as access and fb does not know the difference.

teh html gets send back from evil.com to be rendered on our computer.
Then the page fires off js that makes request to fb with all the evil.com
logic -

browser always checks whith what is related to this domain even before any request.
Cookie associated to domain, then inside cookie has domain association inside of that.

browser is authorized to act on behalf of you.
===========================
Solution: Browser implemented
if you're on evil.com you can't make a request to fb.com unless fb says it's okay.(only other domains give permission). Important restriction solves the problem.

Browser specifies what site url is the referrer. It is in control and objective.

==SOlutions==
CORS:
GraphApi.com probably has cross origin setup.

Playing farmville on facebook:
Make OPTIONS request from facebook
says yes or no by specifying specific headers "named cors".
  yes if it's from these websites(regex or white and black list).
  fb has a chance to say yes or no, then makes normal requests.

====* browser makes options request prior to making the cross origin request* = cors.
  'options request' is the name of the METHOD, it's a normal 'http request' though.
    fyi: the referrer is always included in any request.

Sc: $.ajax makes http request somewhere on fb.

(http requests are cheap to make and expensive to answer)
cors makes 2 requests each time, instead of just one for the ....?res/req.
relative new thing - ie7 does not support it.
** capchas... fool other machines.
-------------------------------------

JSONP:(cdns are cross orig)
ajax request is diff than a script tag dependency.
<script> is legal cross orig.
its' served from fb, fb gives its result, and then we see that on the fb app page.


Script tags are always a get request and the content requested are always the same.
Clear message sending.

want the function to run with some external data source.
It needs facebook data in order to run successfully.


*or do it this way*-------------------
$.ajax({
  url: "http://graph.facebook.com/me",
  type: "jsonp?",
  success: function(fbData){
  console.log(fbData);
  }
});
*done*-------------

<<~Async code~>>
//fbapp.com
<html>
<script>
var myFunc = function(result) {
  console.log(result);
};
//creates script tag pointing to facebook when made into the dom.
document.write('<script src="http://facebook.com/...?callback=myFunc">')//runs async//runs before myfun.
</script>
</html>
--------

//fb.com's response to our script tag.
//the padding is the function call we told it to use.
myFunc({
  id: '23',
  name: 'evpe'
});

dynamic responses are from any http request because it is a page being served.

IFRAMES:
can use post requests to acheive all that functionality.
FLASH:




var captionLength = 0;
var caption = "";
var lines = new Array(" a Designer."," a Hacker."," a UX Researcher.", " a Blogger.", " a Tinkerer.", " a Creator."," a Pixel Pusher.");
var index = 0;

$(document).ready(function()
{
	setInterval ( "cursorAnimation()", 600 );
	testTypingEffect();
});



function testTypingEffect()
{
	type();
}

function type() 
{
	if(index<lines.length)
	{
		caption = lines[index];
		$('span.caption').html(caption.substr(0, captionLength++));
		if(captionLength < caption.length+1)
		{
			setTimeout("type()", 150);
		}
		else
		{
			captionLength = caption.length;
			setTimeout("erase()", 500);
			index++;
		}
	}
	else
	{
		index = 0;
		testTypingEffect();

	}
}

function erase()
{
	$('span.caption').html(caption.substr(0, captionLength--));
	if(captionLength >= 0)
	{
		setTimeout("erase()", 50);
	}
	else
	{
		captionLength = 0;
		caption = "";
		setTimeout("type()", 500);
	}	
}

function cursorAnimation() 
{
  $("span.cursor").animate(
  {
    opacity: 0
  }, "fast", "swing").animate(
  {
    opacity: 1
  }, "fast", "swing");
}

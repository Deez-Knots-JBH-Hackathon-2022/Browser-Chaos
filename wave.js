var text = "The gorillas are great";

for(var i in text)
{ 
  if(text[i] === " ")
    {$(".wavetext").append( $("<span>").html("&nbsp;") ); }
  else
    {$(".wavetext").append( $("<span>").text(text[i]) );  }
}

function AddSpan(element)
{
let text = element.textContent;
for(var i in text)
{ 
  if(text[i] === " ")
    {$(".wavetext").append( $("<span>").html("&nbsp;") ); }
  else
    {$(".wavetext").append( $("<span>").text(text[i]) );  }
}
}

let elements = document.querySelectorAll("div,p,span,h1,h2,h3,h4,h5,h6,b,strong,i,em,mark,u,strike,tt,sub,del,sup,big,small,span,li,button,code,label,time");

for(var element in elements)
{
  element.setAttribute("class",element.getAttribute("class") + " wavetext");
  AddSpan(element);
}





document.head.innerHTML += `<style>
body { background-color : black; }

:root {
  --start_xOffset : 0px;
  --start_yOffset : 0px;
  --end_yOffset : -20px;
}
$startSkew : 0deg;
$skewAmt : 30deg;
$count : 10;
$duration : 2.75;


@keyframes wave {
  /*Double bounce gives nice effect, 1st being fast jelly-bean jump, 2nd being overall wave motion*/
  0%   { transform : translate( var(--start_xOffset),var(--start_yOffset) )   skewY( $startSkew );   color: white; }
  50%  { transform : translate( var(--start_xOffset),var(--end_yOffset)   )   skewY( $startSkew+$skewAmt );}
  30%  { transform : translate( var(--start_xOffset),var(--end_yOffset)   )   skewY( $startSkew+$skewAmt );}
  45%  { transform : translate( var(--start_xOffset),var(--start_yOffset) )   skewY( $startSkew );}
}

.wavetext {
  margin-top : 10em;
  text-align : center;
}


.wavetext span {
  display: inline-block;
  font-family: 'Sans Comic Sans', sans-serif;
                                                
  font-size : 70px;
 
  animation-duration: #{$duration}s;
  animation-name: wave;
  animation-iteration-count: infinite;
  animation-direction: default;
}


@for $i from 0 to $count {
  .wavetext :nth-child( #{$count}n + #{$i} ) {
      animation-delay : -#{($count - $i) * 2 * $duration / $count }s;


      color: rgba(100+$i * 20 % 155,   10,   100+ $i * 40 % 55,   1);
  }
}
</style>`
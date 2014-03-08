mobScroll
=========

Simple &amp; smooth page-scrolling.

=====Usage=======

<strong>Include jQuery</strong><br />


<strong>Include mobScroll</strong><br />

<p>
Make sure to set your jQuery.noConflict():<br>
I like to use:<br />
var $jQ = jQuery.noCoonflict();
</p>
<p>
Attach to your navigation element:<br />
var mobScroll = new mobScroll('#navigation-element-id');<br />
Attach to Additional buttons progromattically(Out side of navigation element):
   $jQ('#learn-btn').click(function(){
       mobScroll.go2('#mobile-services');
   });
</p>


Super simple.

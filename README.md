mobScroll
=========

Simple &amp; smooth page-scrolling.

=====Usage=======

Include jQuery:
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.js" type=""></script>

Include mobScroll:
<script src="mScroll.js" type="text/javascript"></script>    

Make sure to set your jQuery.noConflict() var

I like to use:
var $jQ = jQuery.noCoonflict();

Attach to your navigation element:
var mobScroll = new mobScroll('#navigation-element-id');

Attach to Additional buttons progromattically(Out side of navigation element):
   $jQ('#learn-btn').click(function(){
       mobScroll.go2('#mobile-services');
   });

Super simple.

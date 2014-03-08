mobScroll
=========

Simple &amp; smooth page-scrolling.

=====Usage=======

Include jQuery

Include mobScroll

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

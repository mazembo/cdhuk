/**
 * jQuery Serialize List
 * Copyright (c) 2009 Mike Botsko, Botsko.net LLC
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * Copyright notice and license must remain intact for legal use
 * Version .2
 *
 * Serialize an unordered or ordered list item. Optional ability
 * to determine which attributes are included. The serialization
 * will be read by PHP as a multidimensional array which you may
 * use for saving state.
 *
 * http://github.com/botskonet/jquery.serialize-list
 */
!function(e){e.fn.serializelist=function(t){var r,n,i,a={attributes:["id"],allow_nest:!0,prepend:"ul",att_regex:!1,is_child:!1},l=e.extend(a,t),s=l.attributes,c="",d=function(e,t){if(!l.att_regex)return t;for(n in l.att_regex)if(l.att_regex[n].att===e)return t.replace(l.att_regex[n].regex,"")};return l.is_child||(l.prepend="&"+l.prepend),this.each(function(t,n){e(n).children().each(function(n,a){if(l.allow_nest||s.length>1)for(var h=0;h<s.length;h++)r=d(s[h],e(a).attr(s[h])),c+=l.prepend+"["+t+"]["+n+"]["+s[h]+"]="+r;else r=d(s[0],e(a).attr(s[0])),c+=l.prepend+"["+t+"]["+n+"]="+r;l.allow_nest&&(i=l.prepend+"["+t+"]["+n+"][children]",e(a).children().each(function(){("UL"==this.tagName||"OL"==this.tagName)&&(c+=e(this).serializelist({prepend:i,is_child:!0}))})),n++})}),c}}(jQuery);
define("#iframe-shim/0.9.0/iframe-shim",["jquery","position"],function(a,b,c){function f(a){this.target=d(a).eq(0),this.iframe=h(),this.iframe.appendTo(document.body)}function h(){return d("<iframe>",{frameborder:0,css:{display:"none",border:"none",opacity:0,position:"absolute"}})}var d=a("jquery"),e=a("position");f.prototype.sync=function(){var a=this.target,b=this.iframe,c=a.outerHeight(),d=a.outerWidth(),f=parseInt(a.css("zIndex"))-1||0;return!c||!d||a.is(":hidden")?b.hide():(b.css({height:c,width:d,zIndex:f}),e.pin(b[0],a[0]),b.show()),this},f.prototype.destroy=function(){this.iframe.remove(),delete this.iframe,delete this.target};if(d.browser.msie&&d.browser.version==6)c.exports=f;else{function g(){}g.prototype.sync=g,g.prototype.destroy=g,c.exports=g}});
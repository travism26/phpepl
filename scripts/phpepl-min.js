(function(e,t,n,r){"use strict";if(!n)throw new Error("jquery not found");var i=e.ace,s,o="http://localhost:8888/eval/index.php",u="http://phpepl.cloudcontrolled.com/eval/index.php",a=function(e){n(".output span").html(e)},f=function(){var t=s.getValue();e._gaq.push(["_trackEvent","Run",t]);n.ajax({type:"POST",url:u,data:{code:t},success:function(e){a(e)},error:function(e,t,n){a("Whoopsie daisies!")}})};n(function(){s=i.edit("editor");s.setTheme("ace/theme/textmate");s.getSession().setMode("ace/mode/php");n(".submit button").click(function(){f()});n(t).keydown(function(e){if(e.which===13&&(e.ctrlKey||e.metaKey)){f();e.preventDefault()}});if(e.localStorage){var r=localStorage.getItem("code"),o=r?r:'echo "PHPepl";';s.setValue(o)}n(e).unload(function(){if(e.localStorage){var t=s.getValue();localStorage.setItem("code",t)}})})})(window,document,window.jQuery);
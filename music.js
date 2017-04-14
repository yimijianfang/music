/*! music v1.0.0 | (c) 2017*/
;(function($){
	function CreateMusic(opts){
		$el=$("body");
		this.opts=$.extend({},CreateMusic.DEFAULTS,opts);
		/*背景图片*/
		this.bg_base64_url="data:image/gif;base64,R0lGODlhUABQAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODZjZmIzYy1kZmNkLTQ4NTUtOTg4Yi0zNmI5OTNhNzllZTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDFDRjk0RDM4NzRFMTFFNEE3OTJCRDg1RUEzMENCNDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDFDRjk0RDI4NzRFMTFFNEE3OTJCRDg1RUEzMENCNDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjEwOThmZTMtYjNkYi00NmM5LWFhN2UtZWE0ZDVlZWRlOThjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmU4NmNmYjNjLWRmY2QtNDg1NS05ODhiLTM2Yjk5M2E3OWVlOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFj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";
		/*音符图片*/
		this.music_base64_url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAA3lBMVEUAAAAAAAD///////8SEhIJCQn///93d3cfHx/////m5ub///9NTU3///////////+Li4uBgYFMTEz////////////////6+vru7u729vampqb9/f28vLyoqKgvLy/7+/v39/fr6+v////Jycl/f38iIiL09PT///////////+NjY15eXnMzMzKysokJCT///8bGxv////////w8PBGRkY+Pj6rq6vz8/Pi4uLU1NT9/f26urq1tbWrq6ugoKBra2tfX1+6uroxMTEdHR3m5ubNzc2ysrL29vZtbW3///+PY+y7AAAASXRSTlOZAPvtnZdbvJa9ubCuraebmJiVeUscA/z1z53lo56V/fry7+C/lvj11NLFvampoqCgPTz2raqe9+3m49nV0cy4tKOWlu/i1c65MWHllQAAAhlJREFUOMullelW4kAQhdsOyRAIEEMIa5BdRUA2cddRZ7vv/0ITTOhKOh31HO+v7uI7nE4tt9hRUt66WjrXONfOS9W1J/2YhN0yEiq7mbBhArw5s528rucde9bkgGko4VoRaHdeWUyvnTZQrKVhQ4O205kkfReEDRmuAIUxQbnH5+g0LgCVJHwJ7hMawL1f4uxzXMbhCk6PWUINPInz8SkqBBvgghXwyQ+iOYwDXNPQYikYvZ/i1sKgFsFFFJgCxsQS1wKKIWxAG8ts7np6CzQWh3teg/EOm6BEUDas5RAY5ugh5h52caen4foF29MjUZ07uAFcRocpYba8jT2kg/IR88C7KnifuG2f/rrL4bEVmkwBh1me8t8i1MSaVTHPhtnNiQjNUGUl2CqYh/ADwTZK7AzOB/BoI0IOzpiGvApGCFt9EcpDYxz612Ad/BN42ojDnzzj4Tn+DPpAJXzFEh+oTh3jF3Sm1CmKsrC2izrBsaKs8DcZvHq6QX04oTGhcqca6d8Ge022FKJGklp0hFA0UtSi783fpkxbPIJ7Eqy34YZjtROxISL1c0nYh3kYWFGXesRS09PAkhVI8CNxZAWyydyHD54SRiaTsq/l/ea6/4eKTPaVZYwkMkbJcltZbIssV2nmJDJzeU346TXhaxgYGQvopZvohxdaQOrVNredN11/c+y5WG3fWJokbxWs4wHng2Adr+R1/B+RXVzDNR25fgAAAABJRU5ErkJggg==";
		var op=this.opts;
		this.addcss();
		var audio=this.getaudiodom();//获取audio控件
		var music;
		if(this.opts.type==1)
		{
			music= this.getmusicdom();//获取music控件
		}
		else if(this.opts.type==2)
		{
			music= this.getmusicdomtype2();//获取music控件
		}
		$el.append(audio);
		$el.append(music);
		if(this.opts.autoplay)
		{
			$("#music-audio").get(0).play();
			$("#music-audio").get(0).volume=this.opts.volume;//音量
		}
		var flag;//状态
		flag=this.opts.autoplay?1:0;
		$("#music").on("click",function(){
			var restore=op.restore;//点击后是否复原
			if(flag==1)
			{
				if(!restore)
				{
					console.log(restore);
					$(this).css({"animation-play-state":"paused",
						"-ms-animation-play-state":"paused",
						"-o-animation-play-state":"paused",
						"-webkit-animation-play-state":"paused",
						"-moz-animation-play-state":"paused"
					});
				}
				else{
					$(this).removeClass("musicdefault");
				}
				flag=0;
				$("#music-audio").get(0).pause();
				if(op.type==2)
				{
					$("#music_bg").css("backgroundSize","0");
				}
			}
			else{
				if(!restore)
				{
					$(this).css({"animation-play-state":"running",
						"-ms-animation-play-state":"running",
						"-o-animation-play-state":"running",
						"-webkit-animation-play-state":"running",
						"-moz-animation-play-state":"running"
					});
				}
				$(this).addClass("musicdefault");
				flag=1;
				$("#music-audio").get(0).play();
				if(op.type==2)
				{
					$("#music_bg").css("backgroundSize","100%");
				}
			}
		});

	}
	CreateMusic.DEFAULTS={
		type:2,//类型  1无gif 2有
		x:"right",//X轴
		y:"top",//Y轴
		musicsrc:"http://www.yimijianfang.com/statics/resource/music",//资源地址
		autoplay:true,//是否自动播放
		loop:true,//是否循环播放
		restore:false,//暂停后音符是否恢复原位
		volume:1//音量 范围0.0-1.0
	}
	/*生成CSS*/
	CreateMusic.prototype.addcss=function(){
		var dom='<style type="text/css">';
		dom+='@keyframes rotate{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}';
		dom+='@-moz-keyframes rotate{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}';
		dom+='@-webkit-keyframes rotate{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}';
		dom+='@-ms-keyframes rotate{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}';
		dom+='@-o-keyframes rotate{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}';
		dom+='.musicdefault{animation: rotate 1.2s linear infinite;-o-animation: rotate 1.2s linear infinite;-moz-animation: rotate 1.2s linear infinite;-webkit-animation: rotate 1.2s linear infinite;-ms-animation: rotate 1.2s linear infinite;}';
		dom+='</style>';//
		$("head").append(dom);
	}
	/*生成audio的DOM*/
	CreateMusic.prototype.getaudiodom=function(){
		var opts=this.opts;
		var audio='<audio id="music-audio"  src="';
		audio+=opts.musicsrc;
		audio+='"';
		if(opts.autoplay)
		{
			audio+='';
		}
		if(opts.loop)
		{
			audio+=' loop';
		}
		audio+='></audio>';
		return audio;
	}
	/*生成类型1的DOM*/
	CreateMusic.prototype.getmusicdom=function(){
		var opts=this.opts;
		var width=$("body,html").width();
		var musicwidth=width/10;
		var musicdom='<div id="music" style="position: absolute;'
		musicdom+='width: '+musicwidth+'px;height: '+musicwidth+'px;background:url('+this.music_base64_url+') no-repeat center center;';
		musicdom+=opts.x+':18px;';
		musicdom+=opts.y+':24px;';
		musicdom+='background-size: 100%;overflow: hidden;z-index: 100;"';
		if(opts.autoplay)
		{
			musicdom+=' class="musicdefault"';
		}
		musicdom+='></div>';
		return musicdom;
	}
	/*生成类型2的DOM*/
	CreateMusic.prototype.getmusicdomtype2=function(){
		var opts=this.opts;
		var width=$("body,html").width();
		var musicwidth=width/10;
		var musicdom='<div id="music_bg" style="position: fixed;z-index:999;width:'+musicwidth*1.5+'px;height:'+musicwidth*1.5+'px;background:url('+this.bg_base64_url+') no-repeat center center;';
		if(opts.autoplay)
		{
			musicdom+='background-size:100%;';
		}
		else{
			musicdom+='background-size:0;';
		}
		musicdom+=opts.x+':10px;';
		musicdom+=opts.y+':15px;">';
		musicdom+='<div id="music" style="position: absolute;'
		musicdom+='width: '+musicwidth+'px;height: '+musicwidth+'px;background:url('+this.music_base64_url+') no-repeat center center;';
		musicdom+='left:'+musicwidth/4+'px;';
		musicdom+='top:'+musicwidth/4+'px;';
		musicdom+='background-size: 100%;overflow: hidden;z-index: 100;"';
		if(opts.autoplay){
			musicdom+=' class="musicdefault"';
		}
		musicdom+='></div></div>';
		return musicdom;
	}
	$.extend({
		music:function(opts){
			new CreateMusic(opts);
			//UC等手机浏览器屏蔽自动播放。取折中方案：当用户滑动时播放音乐
			if(opts.autoplay)
			{
				$('html').one('touchstart',function(){ 
					$("#music-audio").get(0).play();
				})
			}
			/*页面调整大小时*/
			window.onresize = function () {
				var width=$("body,html").width();
				var musicwidth=width/10;
				if($("#music").length>0)
				{
					$("#music").css({"width":musicwidth+"px","height":musicwidth+"px"});
				}
				if($("#music_bg").length>0)
				{
					$("#music_bg").css({"width":musicwidth*1.5+"px","height":musicwidth*1.5+"px"});
					$("#music").css({"left":musicwidth/4+'px',"top":musicwidth/4+'px'});
				}
			}
		}
	})
})(jQuery)
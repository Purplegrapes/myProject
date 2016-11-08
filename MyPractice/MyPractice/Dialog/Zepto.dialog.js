;(function($){
	var Dialog=function(config){
    var _this_=this;
    //默认配置参数
    this.config={
    	//弹出框宽度
    	width:"auto",
    	height:"auto",
    	//弹出框提示信息
    	message:null,
    	type:"loading",
    	buttons:null,
    	delay:null,
    	//弹出框透明度
    	maskOpacity:null,
    	effect:null,
    	delayCallback:null,
    	maskClose:null
    }
    //默认参数扩展
    if(config&& $.isPlainObject(config)){
    	$.extend(this.config,config);
    	
    }else{
    	this.isConfig=true;
    }
    //创建基本的DOM
    this.body = $("body");
    //创建遮罩层
    this.mask = $('<div class="g-dialog-container"></div>');
    //创建弹出框
    this.win = $('<div class="dialog-window"></div>');
    //创建弹出框头部
    this.winHeader = $('<div class="dialog-header"></div>');
    this.winContent= $('<div class="dialog-content"></div>');
    this.winFooter = $('<div class="dialog-footer"></div>');
    this.create();
	};
	Dialog.zindex=10000;
	Dialog.prototype={
		animate:function(){
			var _this_=this
			this.win.css("-webkit-transform","scale(0,0)");
			window.setTimeout(function(){
				_this_.win.css("-webkit-transform","scale(1,1)");
			},200)		
		},
		create:function(){
			var _this_=this,
		    config=this.config,
		    mask=this.mask,
		    win=this.win,
		    header=this.winHeader,
		    content=this.winContent,
		    footer=this.winFooter,
		    body=this.body;
		    Dialog.zindex++;
		    this.mask.css("z-index",Dialog.zindex);
		    //如果没有配置参数，就弹出一个等待图标形式的弹框
		    if(this.isConfig){
		    	win.append(header.addClass("loading"));
		    	mask.append(win);
		    	body.append(mask)	    	
		    		this.animate();		    		    	
		    }else{
		    	//根据配置参数创建相应弹框
		    	header.addClass(config.type);
		    	win.append(header);
		    	//如果传来信息文本
		    	if(config.message){
		    		win.append(content.html(config.message));
		    	}
		    	if(config.buttons){
		    		this.createButtons(footer,config.buttons);
		    		win.append(footer);
		    	}
		    	mask.append(win);
		    	body.append(mask);
		    	//设置弹出框宽高
		    	if(config.width!="auto"){
		    		win.width(config.width);
		    	}
		    	if(config.height!="auto"){
		    		win.height(config.height);
		    	}
		    	//设置遮罩层透明度
		    	if(config.maskOpacity){
		    		mask.css("backgroundColor","rgba(0,0,0,"+config.maskOpacity+")");
		    	}
		    	//设置弹出框弹出多久后关闭
		    	if(config.delay&&config.delay!=0){

		    		window.setTimeout(function(){
		    			_this_.close();
		    			 config.delayCallback && config.delayCallback();

		    		},config.delay);
		    	};
		    	//设置弹出框动画
		    	if(config.effect){
		    		this.animate();
		    	};
		    	if(config.maskClose){
		    		mask.click(function(){
		    			_this_.close();
		    		})
		    			    	}

		    };
		},
		close:function(){
			this.mask.remove();
		},
		createButtons:function(footer,buttons){
			
			var _this_=this;
			$(buttons).each(function(i){
        var type = this.type ? " class="+this.type : "";
        var btnText = this.text || "按钮"+(i);
        var callback = this.callback || null;
        var button = $('<button'+ type +'>'+btnText+'</button>');
        footer.append(button);
        if(callback){
          button.click(function(e){
          	   e.stopPropagation();
          	if(callback() != false) {            
              _this_.close();

          }

          
          });

        }
        else {
          button.click(function(e){
          	 e.stopPropagation();
            _this_.close();
            
          });
   
        }

      })
    },
};
	
	$.dialog = function(config){
        return new Dialog(config);
    };

})(Zepto);
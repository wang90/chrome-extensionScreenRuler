



;(function(){
    console.log('is runinng');
    require('../css/index.css');
    //创建横纵坐标
    const  background = document.createElement('div');
    background.className = 'BJ-background-class';
    background.id = 'background_id';
    const  horizontal = '<div class="BJ-horizontal-line" id="size_x"></div>';
    const vertical = '<div class="BJ-vertical-line" id="size_y"></div>';
    background.innerHTML = horizontal + vertical;
    document.body.appendChild(background);
    creatRuler();

    //点击横纵坐标创建线条
    //移动线条
    //删除线条
    function getScreen(){
        return {
           x : Math.ceil( window.screen.width/100),
           y : Math.ceil( window.screen.height/100)
        };
    }
    function creatRuler(){
        const size = getScreen();
        console.log(size);
        const horizontal = document.getElementById('size_x');
        const vertical = document.getElementById('size_y');
        setRuleLine(horizontal,size.x);
        setRuleLine(vertical,size.y,true);
        horizontal.onclick = function(e){
            console.log('水平');
            if(e.target.className.indexOf('BJ-item') <0){
                console.log('创建水平');
                new Line(0,e.clientY,'BJ-item-horizontal');
            }
           
        };
        vertical.onclick = function(e){
            console.log('垂直');
            if(e.target.className.indexOf('BJ-item') <0){
                console.log('创建垂直');
                new Line(e.clientX,0,'BJ-item-vertical');
            }
        };
    }
    function setRuleLine(dom,len,type){
        var html = '';
        for(var i = 0 ; i < len; i ++){
            html +='<div class="BJ-rule">';
            if(!(type && i == 0)){
                html +='<span class="BJ-rule-num">'+(i*100)+'</span>';
            }
            for(var k = 0 ; k < 10 ;k++){
                html +='<span class="BJ-rule-pre '+ ( k%2 !=0 ? 'two':'') +'"></span>';
            }
            html +='</div>';
        }
        dom.innerHTML = html;
    }

    function Line(x,y,className){
        var item = document.createElement('div');
        item.className = 'BJ-item ' + className;
        if ( x > 0 ) {
            item.style = 'left:' + x + 'px';
        }
        if ( y > 0 ) {
            item.style = 'top:' + y + 'px';
        }
        document.getElementById('background_id').appendChild(item);
        var _this = this,
        _className = item.className ;
        item.onclick = function(e){
            console.log(e.target);
            var className = item.className;
            if( className.indexOf('active') < 0 ) {
                item.className = _className+' active';
            }else{
                item.className = _className;
            }
        };
        item.onmousedown = function(ev) {
            console.log(ev);
            // var ev = ev || event;  
            // disX = ev.clientX - this.offsetLeft;
            // disY = ev.clientY - this.offsetTop;
            // console.log(_this.disX,_this.disY);
        };
        item.onmousemove = function(ev) {
            console.log(ev);
            console.log('move');
            if(x>0){
                item.style = 'left:'+ev.clientX + 'px';
            }
            if(y>0){
                item.style = 'top:'+ev.clientY + 'px';
            }
        };
        item.onmouseup = function(ev){
            console.log('鼠标离开');
            item.className = _className;
        };

    }
}());
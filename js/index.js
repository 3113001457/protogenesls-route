// 路由切换
	function Router(){
	    this.routes = {};
	    this.currentUrl = '';
    };
    Router.prototype.route = function(path, callback) {
        this.routes[path] = callback || function(){};
    };
    Router.prototype.refresh = function() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl]();
    };
    Router.prototype.init = function() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
    window.Router = new Router();
    window.Router.init();

// change Page anything
    Router.route('/', function() {
       $("iframe").attr("src","views/home.html")
    });
    Router.route('/information', function() {
         $("iframe").attr("src","views/information.html")
    });
    Router.route('/data', function() {
         $("iframe").attr("src","views/data.html")
    });

// nav 导航点击
    var nav_now=["images/home_now.png","images/infor_now.png","images/data_now.png"]
    var nav_img=["images/nav_home.png","images/nav_infor.png","images/nav_data.png"]
 
    $(".nav li").each(function(i,k){
        $(this).find("a").find("img").attr("src",nav_img[i])
        $(this).click(function(){
            $(".nav li").each(function(i,k){
                $(this).find("a").find("img").attr("src",nav_img[i]).css("marginTop","")
             })
            $(this).find("a").find("img").attr("src",nav_now[i]).css("marginTop","-2px")

        })
    })
    $(".nav li").eq(0).find("a").find("img").attr("src",nav_now[0]).css("marginTop","-2px")
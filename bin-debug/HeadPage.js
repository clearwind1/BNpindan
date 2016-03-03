/**
 * Created by pior on 16/3/3.
 */
var HeadPage = (function (_super) {
    __extends(HeadPage, _super);
    function HeadPage() {
        _super.call(this);
        this.mPagetag = 0;
    }
    var d = __define,c=HeadPage;p=c.prototype;
    p.init = function () {
        this.showpage();
    };
    p.showpage = function () {
        var frame = new GameUtil.MyBitmap(RES.getRes('bottomrect_png'), 0, this.stage.stageHeight);
        frame.setanchorOff(0, 1);
        this.addChild(frame);
        var btnname = ['homepage_png', 'Mypindan_png', 'Myorder_png'];
        for (var i = 0; i < 3; i++) {
            var btn = new GameUtil.Menu(this, btnname[i], btnname[i], this.page, [i]);
            btn.x = 120 + 255 * i;
            btn.y = GameUtil.setscreenY(1285);
            this.addChild(btn);
        }
        this.mPageCont = new egret.DisplayObjectContainer();
        this.addChild(this.mPageCont);
        this.showhomepage();
    };
    p.page = function (pagenum) {
        if (this.mPagetag == pagenum) {
            return;
        }
        else {
            this.mPagetag = pagenum;
            this.mPageCont.removeChildren();
            if (pagenum == 1) {
                this.showhomepage();
            }
            else if (pagenum == 2) {
                this.showmypindan();
            }
            else {
                this.showmyorder();
            }
        }
    };
    //拼单首页
    p.showhomepage = function () {
        document.title = '拼单'; //改变网页标题
        var scroll = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth, this.stage.stageHeight - 128 - 99);
        scroll.y = 128;
        this.mPageCont.addChild(scroll);
        var heioff = 630;
        for (var i = 0; i < 5; i++) {
            var item = new GameUtil.MyBitmap(RES.getRes('produpic_png'), GameUtil.GameConfig.DesignWidth / 2, 309 + i * heioff);
            scroll.putItem(item);
            //目前拼单人数
            var curpetext = new GameUtil.MyTextField(32, 580 + i * heioff, 25, 0);
            curpetext.fontFamily = '楷体';
            curpetext.setText('已');
            curpetext.textFlow = [
                { text: "已有", style: { "textColor": 0x000000 } },
                { text: "5", style: { "textColor": 0xff0000 } },
                { text: "人正在拼单", style: { "textColor": 0x000000 } }
            ];
            scroll.putItem(curpetext);
            //价格文字
            var pricetext = new GameUtil.MyTextField(719, 580 + i * heioff, 25, 1);
            pricetext.fontFamily = '楷体';
            pricetext.setText('3人团:￥8.00');
            pricetext.textColor = 0xff0000;
            scroll.putItem(pricetext);
            //折扣信息
            var discountframe = new GameUtil.MyBitmap(RES.getRes('discountframe_png'), 58, 40 + i * heioff);
            scroll.putItem(discountframe);
            //折扣文字
            var discounttext = new GameUtil.MyTextField(58, 40 + i * heioff, 25, 0.5, 0.5);
            discounttext.fontFamily = '楷体';
            discounttext.setText('2折\n3人团');
            discounttext.textAlign = egret.HorizontalAlign.CENTER;
            discounttext.textColor = 0xffffff;
            scroll.putItem(discounttext);
        }
    };
    //我的拼单
    p.showmypindan = function () {
        document.title = '我的拼单'; //改变网页标题
    };
    //我的订单
    p.showmyorder = function () {
        document.title = '我的订单'; //改变网页标题
    };
    return HeadPage;
})(GameUtil.BassPanel);
egret.registerClass(HeadPage,"HeadPage");

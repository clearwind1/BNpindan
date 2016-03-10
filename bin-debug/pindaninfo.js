/**
 * Created by pior on 16/3/10.
 * 拼单详情页
 */
var pindaninfo = (function (_super) {
    __extends(pindaninfo, _super);
    function pindaninfo() {
        _super.call(this);
        this.curshowprotag = 0;
    }
    var d = __define,c=pindaninfo;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        document.title = '拼单详情页'; //改变网页标题
        var scroll = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth, this.stage.stageHeight);
        scroll.y = 0;
        this.addChild(scroll);
        //放产品展示框
        var pindanprodu = new GameUtil.MyBitmap(RES.getRes('pindanprodu_png'), GameUtil.GameConfig.DesignWidth / 2, 408);
        scroll.putItem(pindanprodu);
        //产品图
        var pindanpropic = new GameUtil.MyBitmap(RES.getRes('pindanpropic_png'), GameUtil.GameConfig.DesignWidth / 2, 176);
        scroll.putItem(pindanpropic);
        //圆点
        for (var i = 0; i < 3; i++) {
            var blackcircle = new GameUtil.MyBitmap(RES.getRes('blackcircle_png'), 334 + 42 * i, 336);
            scroll.putItem(blackcircle);
        }
        //红色圆点
        this.redcircle = new GameUtil.MyBitmap(RES.getRes('redcircle_png'), 334, 336);
        scroll.putItem(this.redcircle);
        var sellnumtext = new GameUtil.MyTextField(34, 574, 25, 0);
        sellnumtext.setText('已售: 20件');
        sellnumtext.textFlow = [
            { text: "已售: ", style: { "textColor": 0x000000 } },
            { text: "20", style: { "textColor": 0xff0000 } },
            { text: "件", style: { "textColor": 0x000000 } }
        ];
        scroll.putItem(sellnumtext);
        var destext = new GameUtil.MyTextField(370, 638, 25);
        destext.textColor = 0xff0000;
        destext.setText('支付并邀请2人发起拼单，人数不足自动退款，详见下方拼单说明');
        scroll.putItem(destext);
        var faqipindanbtn = new GameUtil.Menu(this, 'pindanfaqibtn_png', 'pindanfaqibtn_png', this.faqipindan);
        faqipindanbtn.addButtonText('8.00/件     发起拼单', 25);
        faqipindanbtn.setScaleMode();
        faqipindanbtn.x = 194;
        faqipindanbtn.y = 729;
        scroll.putItem(faqipindanbtn);
        var pindangoumaibtn = new GameUtil.Menu(this, 'pindangoumaibtn_png', 'pindangoumaibtn_png', this.pindangoumai);
        pindangoumaibtn.addButtonText('15.00/件     单独购买', 25);
        pindangoumaibtn.setScaleMode();
        pindangoumaibtn.x = 555;
        pindangoumaibtn.y = 729;
        scroll.putItem(pindangoumaibtn);
    };
    //发起拼单
    p.faqipindan = function () {
    };
    //单独购买
    p.pindangoumai = function () {
    };
    return pindaninfo;
})(GameUtil.BassPanel);
egret.registerClass(pindaninfo,"pindaninfo");

/**
 * Created by pior on 16/3/10.
 * 拼单说明页
 */
var DescribePage = (function (_super) {
    __extends(DescribePage, _super);
    function DescribePage() {
        _super.call(this);
    }
    var d = __define,c=DescribePage;p=c.prototype;
    p.init = function () {
        this.show();
    };
    p.show = function () {
        document.title = '拼单说明详情'; //改变网页标题
        var scroll = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth, this.stage.stageHeight);
        scroll.y = 0;
        this.addChild(scroll);
        var item = new GameUtil.MyBitmap(RES.getRes('describepic_png'), GameUtil.GameConfig.DesignWidth / 2, 0);
        item.setanchorOff(0.5, 0);
        scroll.putItem(item);
    };
    return DescribePage;
})(GameUtil.BassPanel);
egret.registerClass(DescribePage,"DescribePage");

/**
 * Created by pior on 16/3/10.
 * 拼单说明页
 */

class DescribePage extends GameUtil.BassPanel
{
    public constructor()
    {
        super();
    }
    public init()
    {
        this.show();
    }

    private show()
    {
        document.title = '拼单说明详情';          //改变网页标题
        var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight);
        scroll.y = 0;
        this.addChild(scroll);

        var item: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('describepic_png'),GameUtil.GameConfig.DesignWidth/2,0);
        item.setanchorOff(0.5,0);
        scroll.putItem(item);

    }
}

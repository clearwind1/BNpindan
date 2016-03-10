/**
 * Created by pior on 16/3/10.
 * 拼单详情页
 */

class pindaninfo extends GameUtil.BassPanel
{

    private redcircle: GameUtil.MyBitmap;
    private curshowprotag: number = 0;

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
        document.title = '拼单详情页';          //改变网页标题
        var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight);
        scroll.y = 0;
        this.addChild(scroll);

        //放产品展示框
        var pindanprodu: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('pindanprodu_png'),GameUtil.GameConfig.DesignWidth/2,408);
        scroll.putItem(pindanprodu);
        //产品图
        var pindanpropic: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('pindanpropic_png'),GameUtil.GameConfig.DesignWidth/2,176);
        scroll.putItem(pindanpropic);
        //圆点
        for(var i: number=0;i < 3;i++){
            var blackcircle: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('blackcircle_png'),334+42*i,336);
            scroll.putItem(blackcircle);
        }
        //红色圆点
        this.redcircle = new GameUtil.MyBitmap(RES.getRes('redcircle_png'),334,336);
        scroll.putItem(this.redcircle);

        var sellnumtext: GameUtil.MyTextField = new GameUtil.MyTextField(34,574,25,0);
        sellnumtext.setText('已售: 20件');
        sellnumtext.textFlow = <Array<egret.ITextElement>>[
            {text: "已售: ", style: {"textColor": 0x000000}},
            {text: "20", style: {"textColor": 0xff0000}},
            {text: "件", style: {"textColor": 0x000000}}
        ];
        scroll.putItem(sellnumtext);

        var destext: GameUtil.MyTextField = new GameUtil.MyTextField(370,638,25);
        destext.textColor = 0xff0000;
        destext.setText('支付并邀请2人发起拼单，人数不足自动退款，详见下方拼单说明');
        scroll.putItem(destext);

        var faqipindanbtn: GameUtil.Menu = new GameUtil.Menu(this,'pindanfaqibtn_png','pindanfaqibtn_png',this.faqipindan);
        faqipindanbtn.addButtonText('8.00/件     发起拼单',25);
        faqipindanbtn.setScaleMode();
        faqipindanbtn.x = 194;
        faqipindanbtn.y = 729;
        scroll.putItem(faqipindanbtn);

        var pindangoumaibtn: GameUtil.Menu = new GameUtil.Menu(this,'pindangoumaibtn_png','pindangoumaibtn_png',this.pindangoumai);
        pindangoumaibtn.addButtonText('15.00/件     单独购买',25);
        pindangoumaibtn.setScaleMode();
        pindangoumaibtn.x = 555;
        pindangoumaibtn.y = 729;
        scroll.putItem(pindangoumaibtn);

    }

    //发起拼单
    private faqipindan()
    {

    }

    //单独购买
    private pindangoumai()
    {

    }

}

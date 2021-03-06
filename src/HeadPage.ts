/**
 * Created by pior on 16/3/3.
 */

class HeadPage extends GameUtil.BassPanel
{

    private mbottombtn: GameUtil.Menu[] = [];
    private mPagetag: number = -1;
    private mPageCont: egret.DisplayObjectContainer;

    private morderCont: egret.DisplayObjectContainer;
    private mordertopbtn: GameUtil.Menu[] = [];
    private mordertopselect: GameUtil.MyBitmap;
    private mordertoptag: number = -1;

    public constructor()
    {
        super();
    }

    public init()
    {
        this.showpage();
    }

    private showpage()
    {
        var frame: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('bottomrect_png'),0,this.stage.stageHeight);
        frame.setanchorOff(0,1);
        this.addChild(frame);

        var btnname:string[] = ['homepage_png','Mypindan_png','Myorder_png'];
        for(var i:number=0;i < 3;i++){
            this.mbottombtn[i] = new GameUtil.Menu(this,btnname[i],btnname[i],this.page,[i]);
            this.mbottombtn[i].x = 120+255*i;
            this.mbottombtn[i].y = GameUtil.setscreenY(1285);
            this.addChild(this.mbottombtn[i]);
        }

        this.mPageCont = new egret.DisplayObjectContainer();
        this.addChild(this.mPageCont);

        this.page(0);

    }

    private page(pagenum:number)
    {
        if(this.mPagetag == pagenum){
            return;
        }else
        {
            var btnnameselect:string[] = ['homepagedown_png','Mypindandown_png','Myorderdown_png'];
            var btnname:string[] = ['homepage_png','Mypindan_png','Myorder_png'];
            for(var i:number = 0;i < 3;i++){
                if(i==pagenum){
                    this.mbottombtn[i].setButtonTexture(btnnameselect[i],btnnameselect[i]);
                }
                else{
                    this.mbottombtn[i].setButtonTexture(btnname[i],btnname[i]);
                }
            }

            this.mPagetag = pagenum;
            this.mPageCont.removeChildren();
            this.mordertoptag = -1;
            if(pagenum == 0){
                this.showhomepage();
            }
            else if(pagenum == 1){
                this.showmypindan();
            }
            else
            {
                this.showmyorder();
            }
        }
    }

    //拼单首页
    private showhomepage()
    {
        document.title = '拼单';          //改变网页标题
        var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight-99);
        scroll.y = 0;
        this.mPageCont.addChild(scroll);

        var heioff: number = 630;
        for(var i:number = 0;i < 5;i++){
            var item: GameUtil.Menu = new GameUtil.Menu(this,'produpic_png','produpic_png',this.gopindan);
            item.x = GameUtil.GameConfig.DesignWidth/2;
            item.y = 309+i*heioff;//new GameUtil.MyBitmap(RES.getRes('produpic_png'),GameUtil.GameConfig.DesignWidth/2,309+i*heioff);
            scroll.putItem(item);

            //目前拼单人数
            var curpetext: GameUtil.MyTextField = new GameUtil.MyTextField(32,580+i*heioff,25,0);
            curpetext.fontFamily = '楷体';
            curpetext.setText('已');
            curpetext.textFlow = <Array<egret.ITextElement>>[
                {text: "已有", style: {"textColor": 0x000000}}
                , {text: "5", style: {"textColor": 0xff0000}},
                {text: "人正在拼单", style: {"textColor": 0x000000}}
            ];
            scroll.putItem(curpetext);

            //价格文字
            var pricetext: GameUtil.MyTextField = new GameUtil.MyTextField(719,580+i*heioff,25,1);
            pricetext.fontFamily = '楷体';
            pricetext.setText('3人团:￥8.00');
            pricetext.textColor = 0xff0000;
            scroll.putItem(pricetext);

            //折扣信息
            var discountframe: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('discountframe_png'),58,40+i*heioff);
            scroll.putItem(discountframe);

            //折扣文字
            var discounttext: GameUtil.MyTextField = new GameUtil.MyTextField(58,40+i*heioff,25,0.5,0.5);
            discounttext.fontFamily = '楷体';
            discounttext.setText('2折\n3人团');
            discounttext.textAlign = egret.HorizontalAlign.CENTER;
            discounttext.textColor = 0xffffff;
            scroll.putItem(discounttext);

        }
    }

    private gopindan()
    {
        GameUtil.GameScene.runscene(new pindaninfo());
    }

    //我的拼单
    private showmypindan()
    {
        document.title = '我的拼单';          //改变网页标题
        var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight-99);
        scroll.y = 0;
        this.mPageCont.addChild(scroll);

        var heioff: number = 270;
        var pindaninfo:string[] = ['pindansc_png','pindanfa_png','pindaning_png'];
        for(var i:number = 0;i < 5;i++){
            var item: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('mypropic_png'),GameUtil.GameConfig.DesignWidth/2,0);
            item.$setY(item.$getHeight()/2 + i*heioff);
            scroll.putItem(item);

            //拼单价
            var curpetext: GameUtil.MyTextField = new GameUtil.MyTextField(311,135+i*heioff,25,0);
            curpetext.fontFamily = '楷体';
            curpetext.textColor = 0x000000;
            curpetext.setText('拼单价:￥8.00/件');
            scroll.putItem(curpetext);

            //拼单信息
            var rd: number = Math.floor(Math.random()*100)%3;
            //console.log('rd====',rd);
            var pindansc: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes(pindaninfo[rd]),652,105+i*heioff);
            scroll.putItem(pindansc);

            //查看拼单详情
            var pindaninfobtn: GameUtil.Menu = new GameUtil.Menu(this,'pindaninfobtn_png','pindaninfobtn_png',this.pindaninfo);
            pindaninfobtn.x = 405;
            pindaninfobtn.y = 210 + i*heioff;
            scroll.putItem(pindaninfobtn);

            if(rd != 2){
                //查看订单详情
                var orderinfobtn: GameUtil.Menu = new GameUtil.Menu(this,'orderinfobtn_png','orderinfobtn_png',this.orderinfo);
                orderinfobtn.x = 625;
                orderinfobtn.y = 210+i*heioff;
                scroll.putItem(orderinfobtn);
            }
        }
    }

    private pindaninfo()
    {

    }

    private orderinfo()
    {

    }

    //我的订单
    private showmyorder()
    {
        document.title = '我的订单';          //改变网页标题

        var btnname:string[] = ['全部订单','待付款','待收货','退款'];
        for(var i:number = 0;i < 4;i++){
            this.mordertopbtn[i] = new GameUtil.Menu(this,'ordertopframe_png','ordertopframe_png',this.order,[i]);
            this.mordertopbtn[i].x = 94+189*i;
            this.mordertopbtn[i].y = 41;
            this.mPageCont.addChild(this.mordertopbtn[i]);
            this.mordertopbtn[i].addButtonText(btnname[i],30);
            this.mordertopbtn[i].getBtnText().textColor = 0x000000;
            this.mordertopbtn[i].getBtnText().fontFamily = '楷体';
        }

        this.mordertopselect = new GameUtil.MyBitmap(RES.getRes('ordertopselect_png'),94,83);
        this.mPageCont.addChild(this.mordertopselect);

        this.morderCont = new egret.DisplayObjectContainer();
        this.mPageCont.addChild(this.morderCont);

        this.order(0);

    }

    private order(ordertag:number)
    {
        if(this.mordertoptag == ordertag){
            return;
        }
        else
        {
            for(var i:number = 0;i < 4;i++){
                if(i==ordertag){
                    this.mordertopbtn[i].getBtnText().textColor = 0xff0000;
                }
                else{
                    this.mordertopbtn[i].getBtnText().textColor = 0x000000;
                }
            }

            this.mordertopselect.x = 94 + ordertag*189;

            this.mordertoptag = ordertag;
            this.morderCont.removeChildren();


            var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight-99-82);
            scroll.y = 82;
            this.morderCont.addChild(scroll);

            if(ordertag == 0){
                this.Myorder(scroll);
            }
            else if(ordertag == 1){
                this.waitPayPage(scroll);
            }
            else if(ordertag == 2)
            {
                this.waitGetPage(scroll);
            }
            else
            {
                this.refundPage(scroll);
            }
        }
    }

    //我的订单
    private Myorder(scroll: GameUtil.ScrollView)
    {
        for(var i:number = 0;i < 5;i++) {
            var rdstate:number = Math.floor(Math.random() * 100) % 5;
            this.Allorder(scroll,rdstate,i);
        }
    }
    //待付款
    private waitPayPage(scroll: GameUtil.ScrollView)
    {
        for(var i:number = 0;i < 5;i++) {
            var rdstate:number = 0;
            this.Allorder(scroll,rdstate,i);
        }
    }

    //待收货
    private waitGetPage(scroll: GameUtil.ScrollView)
    {
        for(var i:number = 0;i < 5;i++) {
            var rdstate:number = 1;
            this.Allorder(scroll,rdstate,i);
        }
    }

    //退款
    private refundPage(scroll: GameUtil.ScrollView)
    {
        for(var i:number = 0;i < 5;i++) {
            var rdstate:number = 2+Math.floor(Math.random() * 100) % 2;
            this.Allorder(scroll,rdstate,i);
        }
    }
    //全部订单
    private Allorder(scroll: GameUtil.ScrollView,rdstate: number,i: number)
    {

        var heioff: number = 415;
        var orderstate:string[] = ['待付款','待收货','退款-退款成功','退款-退款中','已完成'];

            var ordertime: GameUtil.MyTextField = new GameUtil.MyTextField(31,5+i*heioff,25,0,0);
            ordertime.fontFamily = '楷体';
            ordertime.textColor = 0x000000;
            ordertime.setText('2016-01-03 09:21:35');
            scroll.putItem(ordertime);


            var item: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('orderpropic_png'),GameUtil.GameConfig.DesignWidth/2,0);
            item.$setY(item.$getHeight()/2 + i*heioff + 28);
            scroll.putItem(item);

            //数量
            var counttext: GameUtil.MyTextField = new GameUtil.MyTextField(310,220+i*heioff,25,0);
            counttext.fontFamily = '楷体';
            counttext.textColor = 0x000000;
            counttext.setText('数量:1');
            scroll.putItem(counttext);
            //价格
            var pricetext: GameUtil.MyTextField = new GameUtil.MyTextField(719,220+i*heioff,25,1);
            pricetext.fontFamily = '楷体';
            pricetext.textColor = 0x000000;
            pricetext.setText('￥8.00/件');
            scroll.putItem(pricetext);
            //订单编号
            var ordernumtext: GameUtil.MyTextField = new GameUtil.MyTextField(31,307+i*heioff,25,0);
            ordernumtext.fontFamily = '楷体';
            ordernumtext.textColor = 0x000000;
            ordernumtext.setText('订单编号:20160103567896');
            scroll.putItem(ordernumtext);
            //实付
            var paytext: GameUtil.MyTextField = new GameUtil.MyTextField(719,307+i*heioff,30,1);
            paytext.fontFamily = '楷体';
            paytext.setText('实付:￥8.00');
            paytext.textFlow = <Array<egret.ITextElement>>[
                {text: "实付:", style: {"textColor": 0x000000,"size": 25}},
                {text: "￥8.00", style: {"textColor": 0xff0000}}
            ];
            scroll.putItem(paytext);

            //订单状态
            var orderstatetext: GameUtil.MyTextField = new GameUtil.MyTextField(31,372+i*heioff,30,0);
            orderstatetext.fontFamily = '楷体';
            orderstatetext.textColor = 0xff0000;
            orderstatetext.setText(orderstate[rdstate]);
            scroll.putItem(orderstatetext);

            if(rdstate == 0){   //待付款
                //去付款
                var forpaybtn: GameUtil.Menu = new GameUtil.Menu(this,'forpaybtn_png','forpaybtn_png',this.forpay);
                forpaybtn.x = 450;
                forpaybtn.y = 372+i*heioff;
                scroll.putItem(forpaybtn);
                //取消订单
                var cancelorderbtn: GameUtil.Menu = new GameUtil.Menu(this,'cancelorderbtn_png','cancelorderbtn_png',this.cancelorder);
                cancelorderbtn.x = 640;
                cancelorderbtn.y = 372+i*heioff;
                scroll.putItem(cancelorderbtn);
            }
            else if(rdstate == 1){
                //确认收货
                var msgetbtn: GameUtil.Menu = new GameUtil.Menu(this,'msgetbtn_png','msgetbtn_png',this.makesureget);
                msgetbtn.x = 640;
                msgetbtn.y = 372+i*heioff;
                scroll.putItem(msgetbtn);
            }
            else
            {
                //查看详情
                var showinfobtn: GameUtil.Menu = new GameUtil.Menu(this,'showinfobtn_png','showinfobtn_png',this.showinfo);
                showinfobtn.x = 640;
                showinfobtn.y = 372+i*heioff;
                scroll.putItem(showinfobtn);
            }

    }

    //去付款
    private forpay()
    {

    }
    //取消订单
    private cancelorder()
    {

    }
    //确认收货
    private makesureget()
    {

    }
    //查看详情
    private showinfo()
    {

    }

}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        GameUtil.GameScene.init(this.stage);
        GameUtil.GameScene.runscene(new GameUtil.LoadingPanel(this.createGameScene,this,0,0,true));
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {

        //var sky:GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes("bgImage"),this.stage.stageWidth/2,this.stage.stageHeight/2);
        //this.addChild(sky);

        document.title = '测试';          //改变网页标题

        var sc: number = this.stage.stageHeight/GameUtil.GameConfig.DesignHeight;
        console.log('sc=====',sc);
        console.log('sche=====',this.stage.stageHeight);
        for(var i:number = 0;i < 3;i++){
            var frame: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('frame_png'),160*i,0);
            frame.setanchorOff(0,0);
            this.addChild(frame);
        }
        for(var i:number = 0;i < 3;i++){
            var frame: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('frame_png'),160*i,this.stage.stageHeight);
            frame.setanchorOff(0,1);
            this.addChild(frame);
        }

        var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(GameUtil.GameConfig.DesignWidth,this.stage.stageHeight-160);
        scroll.y = 80;
        this.addChild(scroll);

        for(var i:number = 0;i < 5;i++){
            var item: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('egretIcon'),GameUtil.GameConfig.DesignWidth/2,150+i*300);
            scroll.putItem(item);
        }

        //console.log("scollheight======",scroll.height);

        //alert("width===="+window.screen.availWidth+"\nheight====="+window.screen.availHeight);

    }

}



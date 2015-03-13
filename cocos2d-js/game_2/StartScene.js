var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        this.bgSprite = new cc.Sprite(res.Background_png);
        this.bgSprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.bgSprite, 0);

        var startItem = new cc.MenuItemImage(
            res.Start_N_png,
            res.Start_S_png,
            function () {
                console.log("Menu is clicked !");
                //console.log(cc.director);
                //cc.director.runScene(cc.TransitionPageTurn(1,new PlayScene(),false));
                cc.director.runScene(new PlayScene());
            },
            this
        );
        startItem.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var menu = new cc.Menu(startItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});
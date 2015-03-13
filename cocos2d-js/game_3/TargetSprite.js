var TargetSprite = cc.Sprite.extend({
    onEnter: function () {
        console.log("onEnter TargetSprite");
        this._super();
        this.addTouchEventListenser();
        this.disappearAction = this.createDisapperAction();
        this.disappearAction.retain();
    },
    onExit: function () {
        console.log("onExit TargetSprite");
        this.disappearAction.release();
        this._super();
    },
    addTouchEventListenser: function () {
        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (cc.rectContainsPoint(target.getBoundingBox(), pos)) {
                    console.log("touched");
                    target.removeTouchEventListenser();
                    console.log("pos.x=" + pos.x + ",pos.y=" + pos.y);
                    target.stopAllActions();
                    var ac = target.disappearAction;
                    var seqAc = cc.Sequence.create(ac, cc.CallFunc.create(function () {
                        console.log("callFun...");
                        target.removeFromParent();
                    }, target));
                    target.runAction(seqAc);
                    currentLayer.addScore();
                    return true;
                }
                return false;
            }
        });
        cc.eventManager.addListener(this.touchListener, this);
    },
    removeTouchEventListenser: function () {
        cc.eventManager.removeListener(this.touchListener);
    },
    createDisapperAction: function () {
        var frames = [];
        for (var i = 1; i < 10; ++i) {
            var str = "target" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            frames.push(frame);
        }

        var animation = new cc.Animation(frames, 0.02);
        var action = new cc.Animate(animation);

        return action;
    },
    disappearAction: null
});
System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,s,l,a,c,p,h,u,d,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,l=e.SpriteFrame,a=e.CCFloat,c=e.Collider2D,p=e.Contact2DType,h=e.Sprite,u=e.Vec3,d=e.CircleCollider2D,v=e.Component}],execute:function(){var g,f,C,B,m,y,T;r._RF.push({},"97c15fYP5dG6acvg0/vkgHR","Bird",void 0);var R=s.ccclass,b=s.property;e("Bird",(g=R("Bird"),f=b({type:[l]}),C=b({type:[a]}),g((y=t((m=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBirds",y,o(t)),n(t,"sizeBirds",T,o(t)),t.baseRadius=8.8,t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this)},r.onBeginContact=function(e,i,n){var o=this,r=e.node.getComponent(t),s=i.node.getComponent(t);e.group==i.group&&s&&r.level==s.level&&this.scheduleOnce((function(){i.node&&i.node.active&&(o.listToRemove.push(i.node),o.levelUp())}),0),console.log("onBeginContact")},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){if(this.level+1<this.spriteBirds.length){if(this.level++,this.getComponent(h).spriteFrame=this.spriteBirds[this.level],this.level<this.sizeBirds.length){var e=this.sizeBirds[this.level];this.node.setScale(new u(e,e,1))}var t=this.getComponent(c);t instanceof d&&(t.radius=this.baseRadius*this.sizeBirds[this.level]),console.log("level: "+this.level)}},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(v)).prototype,"spriteBirds",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(m.prototype,"sizeBirds",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=m))||B));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,l,p,s,c,u,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Prefab,p=t.input,s=t.Input,c=t.instantiate,u=t.RigidBody2D,f=t.ERigidBody2DType,y=t.Component}],execute:function(){var b,d,h,g,m,v;i._RF.push({},"238b0E+eIVOj66bfOzMs2R/","GameController",void 0);var C=a.ccclass,P=a.property;t("GameController",(b=C("GameController"),d=P({type:l}),b((m=e((g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",m,o(e)),n(e,"spawnY",v,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){p.on(s.EventType.TOUCH_END,this.onTouchStart,this)},i.onTouchStart=function(t){var e=c(this.birdPrefab);e.setParent(this.node);var r=t.getUILocation();e.setWorldPosition(r.x,this.spawnY,0),e.getComponent(u).type=f.Dynamic,e.getComponent(u).wakeUp()},i.update=function(t){},e}(y)).prototype,"birdPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(g.prototype,"spawnY",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 500}}),h=g))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
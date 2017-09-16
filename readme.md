# 像素鸟 Flappy Bird

## 对难度有影响的参数

- 捕捉网的移动速度 `#68` `#77`
``` js
web.body.velocity.x = -150;
```
- 捕捉网的生成频率 `#35`
``` js
game.time.events.loop(1250, createWeb, this);
```
- 上下网的间隔大小 `#61` `#75`
``` js
var offsetY = 50 + Math.random() * (game.height - 130 - 150 -100) | 0;

web.reset(game.width,
    offsetY + 150
);
```
- 落差（未完全控制）
- 鸟的飞行高度 `#48`
``` js
bird.body.velocity.y = -300;
```
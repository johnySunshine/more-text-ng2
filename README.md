# more-text-ng2

本组件是一个基于`angular2`的开发的组件，采用`typesript`进行编写。

最终效果图：
![最终效果图](http://i.imgur.com/utyVQ6Q.png)
## :question: 如何使用组件？
导入组件 MoreTextComponent 到你所需要加载此组件的@NgModule.
```typescript
import { MoreTextComponent } from './moreText/moreText.component';
@NgModule({
  // ...
  imports: [],
  declarations: [
	MoreTextComponent //由于该组件较小，所有没有封装成NgModule
  ],
  // ...
})

```
在你的html模板中, 使用组件指令:
```html
 <more-text [lineHeight]="26" [showLine]="6">{{demoText}}</more-text>
```

##:lock: 参数说明
>no:number 类型

|参数|参数含义|结果类型|
|:----:|:----:|:----:|
|lineHeight|同CSS的lineHeight|no|
|showLine|展示的行数|no|

##:warning: note 
- 使用时项目中一定将**moretextCompoent**先导入你的项目中；
- 加载时，可能没有箭头，请参考scss文件中自行修改，本项目不提供图片
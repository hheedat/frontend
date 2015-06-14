title: 正则表达式
speaker: 赵宇翔
url: https://github.com/ksky521/nodePPT
transition: slide2
theme:dark
files: /js/slide.js,/css/slide.css

[slide]
# 正则表达式
## 演讲者：赵宇翔

[slide]
# 主要内容： {:&.flexbox.vleft}
## 背景知识
## JavaScript 和 正则
## 表达式的匹配原理

[slide]
# 背景知识

[slide]
{:&.flexbox.vleft}
## 1.起源  
### 关于正则表达式，最初的想法来自20世纪40年代的两位神经科学家， Warren McCulloch 和 Walter Pitts，他们研究出一种模型，认为神经系统在神经元层面上就是这样工作的。若干年后，数学家 Stephen Kleene 在代数学中正式描述了这种被他称为“正则集合”（regular sets）的模型，正则表达式才成为现实。Stephen 发明了一套简介的表示正则集合的方法，他称之为“正则表达式”（regular expressions）

[slide]
{:&.flexbox.vleft}
## 2.流派（flavor）
### 不同工具，不同语言，支持的元字符等特性各有不同；（即使支持的元字符相同，不同流派中，对元字符的理解也可能不同）

[slide]
# JavaScript 和 正则

[slide]
{:&.flexbox.vleft}
##元字符的分类：

| 类别    | 元字符     |
| :------------- | :------------- |
| 匹配对象的元字符       | . […] [^…] \char        |
| 提供计数功能的元字符    | ? * + {min,max}         |
| 匹配位置的元字符       | ^ $ \b  ?=  ?!          |
| 其他元字符 |  (…) \1 \2 |

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

[slide]
{:&.flexbox.vleft}
##使用正则表达式的方法：

| 方法 | 描述 |
| :------------- | :------------- |
| exec | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null） |
| test | 一个在字符串中测试是否匹配的RegExp方法，它返回true或false |
| match | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组或者在未匹配到时返回null |
| search | 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1 |
| replace | 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串 |
| split | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法 |

[slide]
{:&.flexbox.vleft}
##支持的参数

| 参数 | 描述 |
| :------------- | :------------- |
| i       | 忽略大小写       |
| m       | 让开始和结束字符（^ 和 $）工作在多行模式   |
| g       | 全局匹配      |
| y       | sticky 粘滞 demo1       |  
<br>
![兼容性视图](/img/compatibility1.png)


[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]

[slide]







```javascript
alert('nodeppt');
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.2.3

Github：https://github.com/ksky521/nodePPT

# Tooltip Replacer

### これ何？

HTML文書内にTooltipを大量に付けたいときに，DIVやらclassやらをたくさん書くのが面倒なときに使用します．

### 使い方

HTML文書内にokikaeというクラスの要素を作って，その中に置き換えたい文字を含んだ文書を書いてください．
手抜きをしているので，要素内にタグが有っても（おそらく）無効化されます．

### 書式

okikaeクラスの要素内に「｜（全角） ツールチップの目印 ／（全角） 説明 ｜（全角）」があると，自動的に置き換えます．

### 例

以下のように記述します．
okikaeクラスを持つ要素は，pでもspanでもdivでも大丈夫（なはず）です．

```
<p class="okikae">
    もしもし｜亀／かめ｜よ｜亀／かめ｜さんよ｜世界／せかい｜のうちで｜お前／おまえ｜ほど｜歩み／あゆみ｜の｜鈍い／のろい｜ものはないどうしてそんなに｜鈍い／のろい｜のか？
</p>
```

### デモページ

[https://sudahiroshi.github.io/tooltip_replacer/](https://sudahiroshi.github.io/tooltip_replacer/)

### 参考

Tooltipの表示には，下記サイトのソースコードを利用しました．
[【CSS】ツールチップをHTMLとCSSだけで簡単に作る](https://www.jungleocean.com/programming/190308tooltip-css)

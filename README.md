# critical_example
クリティカルCSSをgulpで自動化させる

## htmlファイルとcssファイルはGit管理対象外のため、リポジトリにありません。
gitigore対象
```
*.html
/css/*
```
→現在も使用されているLPのため、リポジトリがpublicであることから管理対象外としました。  
　criticalタスクのサンプルを見る際は、リポジトリをローカルにクローンし、適当なhtmlファイルとCSSファイルを用意してお試しください。

## 参考URL
https://www.npmjs.com/package/critical

https://www.npmjs.com/package/exact-critical

## npmでinstallしたプラグイン
https://github.com/addyosmani/critical

https://github.com/bezoerb/inline-critical


# クリティカルCSSテスト方法
```
// SPの場合
glup sp-critical

// PCの場合
glup pc-critical
```
それぞれ  
index-critical.html  
sp_index-critical.html  
に、CSSがインライン化されたHTMLファイルができる。

# 問題点、等
* heightとwidthを指定しなければならないため、SPとPCとタスクを分けなければならない。
* destに対象ファイルを指定すると2回目以降にタスクを発火したときに、インラインされたstyleタグが増えていってしまう。なので、「-critical.html」のファイルを生成している。  
実際に利用する場合に、index.htmlで使用したい場合は、タスク対象をディレクトリで分けるか、「-critical.html」を対象とし、destにindex.htmlとする等の対策が必要である。

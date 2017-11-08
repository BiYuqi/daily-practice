# 1.Homebrew 安装MongoDB

## 更新brew本身

* brew update

## 安装monggo

有了brew，我们安装mongodb就变得很简单了：

brew install mongodb

在启动mongo之前，我们需要创建一个目录，为mongo默认的数据写入目录:默认目录为根目录下的data/db
```js
sudo mkdir -p /data/db
```

然后给刚刚创建的目录以可读可写的权限

```js
sudo chown `id -u` /data/db
```


修改目录

```js
// /data/db 目录是mongo的默认目录，如果你想使用其他目录，可以使 --dbpath 参数
mongo --dbpath dir_name
// dir_name 为你的目录名字
```

现在，你可以放心的启动mongodb了，执行下面的命令：

```js
mongod
```

然后再开启一个新的终端，执行下面的命令：
```js
mongo
```
注：要先执行mongod成功后执行mongo，出现箭头表示链接成功如图所示

如果有一天你发现你的数据库突然启动不了了，可能是你为正常关闭导致的，你可以删除掉/data/db文件夹中的mongod.lock文件，然后重新启动，如果还是不可以，你可以查看一下进程，然后杀掉：
```js
ps -aef | grep mongo
```
然后根据进程ID杀掉进程，最后重启mongodb。

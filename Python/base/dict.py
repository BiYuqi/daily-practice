# coding=UTF-8
print('---------------------------字典(也就是JS中的对象)---------------------')
myInfo = {
    "name": "毕宇旗",
    "age": "25",
    "isMarry": "true",
    "adress": "河南省平舆县毕庄"
}

print(myInfo)
print('---------------------------in 判断 存在与否---------------------')

print('name' in myInfo)

print('size' in myInfo)

print('---------------------------get 判断 存在与否 如果key不存在，可以返回None，或者不存在是指定value---------------------')

print(myInfo.get('size'))

print(myInfo.get('size','不存在'))

print(myInfo.get('name'))

# 往字典添加数据

myInfo['size'] = 1024
print(myInfo)

print('要删除一个key，用pop(key)方法，对应的value也会从dict中删除 并返回该值')

print(myInfo.pop('size'))

# 和list比较，dict有以下几个特点：
#   查找和插入的速度极快，不会随着key的增加而变慢；
#   需要占用大量的内存，内存浪费多。
# 而list相反：
#   查找和插入的时间随着元素的增加而增加；
#   占用空间小，浪费内存很少。
# 所以，dict是用空间来换取时间的一种方法。


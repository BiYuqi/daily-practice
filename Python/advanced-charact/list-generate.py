# coding = UTF-8
# 列表生成式

# 列表生成式即List Comprehensions，
# 是Python内置的非常简单却强大的可以用来创建list的生成式

L = list(range(100))
print(L)

# 如果要生成[1x1, 2x2, 3x3, ..., 10x10]怎么做？
M = list(range(11))
R = []
for i, v in enumerate(M):
    R.append(i*i)
print(R)

print('------------列表生成式----------')
# 列表生成式时，把要生成的元素x * x放到前面
# 后面跟for循环，就可以把list创建出来
T = [x * x for x in range(1, 11)]

print(T)

X = [x * x for x in range(1, 22) if x % 2 == 0]

print(X)

# 还可以使用两层循环，可以生成全排列
print('-----还可以使用两层循环，可以生成全排列----')

S = [m + n for m in 'ABC' for n in 'XYZ']
print(S)

# 列出当前目录下的所有文件和目录名，可以通过一行代码实现
# 导入os模块，模块的概念后面讲到
# 这里就不放在头部import

import os

LL = [d for d in os.listdir('.')]
print(LL)


print('-------------------------------------------------------')
# for循环其实可以同时使用两个甚至多个变量，比如dict的items()可以同时迭代key和value：
obj = {
    "name": "biyuqi",
    "age": "23"
}
for k, v in obj.items():
    print(k + '=' + v)

# 列表生成式
D = [k + '=' + v for k, v in obj.items()]

print(D)
L1 = ['Hello', 'World', 18, 'Apple', None]
TT = [x.lower() for x in L1 if isinstance(x, str)]

print(TT)




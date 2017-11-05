# coding=UTF-8
# 匿名函数

# 匿名函数有个限制，就是只能有一个表达式，不用写return
# 匿名函数lambda x: x * x实际上就是

from functools import reduce


def f(x):
    return x * x


s = list(map(lambda x: x * x, [1, 2, 3, 4, 5]))
m = reduce(lambda x, y: x + y, [1, 2, 3, 4, 5])
print(s)
print(m)

# Python对匿名函数的支持有限，只有一些简单的情况下可以使用匿名函数。
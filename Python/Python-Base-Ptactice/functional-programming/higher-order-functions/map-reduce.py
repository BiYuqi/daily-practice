# coding=UTF-8

"""
Python内建了map()和reduce()函数。
map()函数接收两个参数，一个是函数，一个是Iterable
map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回。
"""

"""
举例说明，比如我们有一个函数f(x)=x2，
要把这个函数作用在一个list [1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map()实现如下：
"""

L = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def f(x):
    return x * x


res = map(f, L)
# map()传入的第一个参数是f，即函数对象本身。
# 由于结果r是一个Iterator，Iterator是惰性序列，
# 因此通过list()函数让它把整个序列都计算出来并返回一个list。
print(list(res))

# to str
r = map(str, L)
print(list(r))

"""
reduce的用法。reduce把一个函数作用在一个序列[x1, x2, x3, ...]上，
这个函数必须接收两个参数，reduce把结果继续和序列的下一个元素做累积计算

ex:
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
"""

# 比方说对一个序列求和，就可以用reduce实现：
from functools import reduce
M = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def add(x, y):
    return x + y


tt = reduce(add, M)
print(tt)

# 当然求和运算可以直接用Python内建函数sum()，没必要动用reduce。

print(sum(M))


def add_2(x, y):
    # print(isinstance(str(x), str))
    return str(x) + str(y)


def add_3(x, y):
    return x * 10 + y


tt2 = reduce(add_2, M)
tt3 = reduce(add_3, M)
print(tt2, tt3)
print(isinstance(tt2, str))
print(isinstance(tt3, str))

print('---------------------------------')


def char2num(s):
    return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]


print(list(map(char2num, '13579')))

#


def normal(n):
    m = n[0:1].upper()
    s = n[1:].lower()
    return m + s


TEST = ['biyuqi', 'caiyiingjie', 'hujintao']

result = list(map(normal, TEST))

print(result)

# 整理 2中方法

def str2stand(source):
    def inner_math(r):
        # m = r[0:1].upper()
        # n = r[1:].lower()
        # return m + n
        return str.title(r)
    return list(map(inner_math, source))


print(str2stand(['biyuqi', 'caiyiingjie', 'hujintao']))

# 原来有title 方法
print(str.title('biyuqi'))


# 利用reduce求和

def prod(s):
    def add(x, y):
        return x + y
    return reduce(add, s)


print(prod([1, 2, 3, 4, 5]))

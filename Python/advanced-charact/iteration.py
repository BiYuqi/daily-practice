# coding=UTF-8
from collections import Iterable

# 迭代
print('---------------迭代-----------')
L = [1, 2, 3, 45]
for i in L:
    print(i)


M = {
    "name": "biyuqi",
    "age": "25"
}
for item in M:
    print("key:" + item)
    print("value:" + M[item])

print('--------------------字典---------------')
# dict迭代的是key。如果要迭代value，可以用for value in d.values()
# 如果要同时迭代key和value，可以用for k, v in d.items()

for value in M.values():
    print(value)

for k, v in M.items():
    print(k, v)

print('-------------------是否可迭代------------')
# 顶部已经 import  Iterable
print(isinstance('ABC', Iterable))
print(isinstance(M, Iterable))
print(isinstance(111, int))
print(isinstance(111, float))

# 如果要对list实现类似Java那样的下标循环怎么办？
# Python内置的enumerate函数可以把一个list变成索引-元素对，
# 这样就可以在for循环中同时迭代索引和元素本身：

TEST = ['A', 'B', 'C']
for i in TEST:
    print(i)

for i, value in enumerate(TEST):
    print(i, value)
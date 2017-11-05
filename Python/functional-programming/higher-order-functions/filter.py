# coding=UTF-8
# Python内建的filter()函数用于过滤序列。

# test

L = [1, 2, 3, 4, 5, 67]


def filter_num(d):
    def inner(n):
        return n % 2 == 0
    return list(filter(inner, d))


print(filter_num(L))

# 把一个序列中的空字符串删掉，可以这么写


def filter_null(d):
    def inner(v):
        if isinstance(v, int):
            v = str(v)
        return v and v.strip()
    return list(filter(inner, d))


print(filter_null([1, 2, 3, 4, '', 5, '毕宇旗', '', '小菜菜']))


# 判断回文数

def back(s):
    ll = len(s)
    for i in range(0, ll // 2):
        if s[i] != s[ll-i-1]:
            return False
    return True


print(back('121'))


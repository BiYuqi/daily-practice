# coding=UTF-8

# 函数作为返回值
# 求和


def calc_sum(*args):
    def inner_sum():
        s = 0
        for i in args:
            s = s + i
        return s
    return inner_sum


f = calc_sum(1, 2, 34, 5, 6, 9)
print(f())

# 返回一个函数时，牢记该函数并未执行，返回函数中不要引用任何可能会变化的变量。
# 闭包 索引丢失


def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i*i
        fs.append(f)
    return fs


f1, f2, f3 = count()

print(f1(), f2(), f3())

#


def count2():
    def f22(h):
        def g():
            return h * h
        return g
    fs = []
    for i in range(1, 4):
        fs.append(f22(i))
    return fs


f1, f2, f3 = count2()
print(f1(), f2(), f3())
# coding = UTF-8
# 生成器


def fib(ma):
    n, a, b = 0, 0, 1
    while n < ma:
        print(b)
        a, b = b, a + b
        n = n + 1
    return 'done'


fib(20)

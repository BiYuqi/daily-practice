# coding=UTF-8

# 装饰器


def outer(fun):

    def wrapper():
        print('记录日志开始...')
        if isinstance('abs', int):
            fun()
        else:
            print('还未登录，请重试')
        print('打印日志结束...')
    return wrapper


@outer
def foo():
    print('foo 正在执行')


# f = outer(foo)
# f()

foo()

"""
没有修改 foo 函数里面的任何逻辑，
只是给 foo 变量重新赋值了，指向了一个新的函数对象。
最后调用 foo()，不仅能打印日志，业务逻辑也执行完了。现在来分析一下它的执行流程。

这里的 outer 函数其实就是一个装饰器，
装饰器是一个带有函数作为参数并返回一个新函数的闭包，
本质上装饰器也是函数。outer 函数的返回值是 inner 函数，在 inner 函数中，
除了执行日志操作，还有业务代码，该函数重新赋值给 foo 变量后，调用 foo() 就相当于调用 inner()
"""
# coding=UTF-8
# 定制类

print('__str__')


class Student(object):
    def __init__(self, name):
        self.name = name


print(Student('Micale'))
"""
打印出一堆<__main__.Student object at 0x109afb190>，不好看。
怎么才能打印得好看呢？只需要定义好__str__()方法，返回一个好看的字符串就可以了：
"""


class Student2(object):
    def __init__(self, name):
        self.name = name

    '此处覆盖的内置方法'
    def __str__(self):
        return 'Student object (naem: %s)' % self.name


print(Student2('Micale'))

"""
这样打印出来的实例，不但好看，而且容易看出实例内部重要的数据。
但是细心的朋友会发现直接敲变量不用print，打印出来的实例还是不好看：
解释器环境才能看到，本例子看不到
"""
s = Student2('毕宇旗')

"""
这是因为直接显示变量调用的不是__str__()，而是__repr__()，
两者的区别是__str__()返回用户看到的字符串，
而__repr__()返回程序开发者看到的字符串，也就是说，__repr__()是为调试服务的。
解决办法是再定义一个__repr__()。但是通常__str__()和__repr__()代码都是一样的
偷懒的写法
"""


class Student3(object):
    def __init__(self, name):
        self.name = name

    '此处覆盖的内置方法'
    def __str__(self):
        return 'Student object (naem: %s)' % self.name

    __repr__ = __str__


print('__iter__')

"""
如果一个类想被用于for ... in循环，类似list或tuple那样，
就必须实现一个__iter__()方法，该方法返回一个迭代对象，
然后，Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，
直到遇到StopIteration错误时退出循环。
"""


class Fib(object):

    def __init__(self):
        self.a, self.b = 0, 1 #初始化计数器

    def __iter__(self):
        return self

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b # 计算下一个值
        if self.a > 3000:
            raise StopIteration()
        return self.a


for i in Fib():
    print(i)




# __getattr__

print('__getattr__')


class Chain(object):

    def __init__(self, path=''):
        self._path = path

    def __getattr__(self, path):
        return Chain('%s/%s' % (self._path, path))

    def __str__(self):
        return self._path

    __repr__ = __str__


print(Chain().users.status.islogin)
# /users/status/islogin

# 这样，无论API怎么变，SDK都可以根据URL实现完全动态的调用，而且，不随API的增加而改变！





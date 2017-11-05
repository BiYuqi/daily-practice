# coding=UTF-8

# 获取对象信息
# 当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？

# 基本类型都可以用type()判断：
print('使用type()')

# int
print(type(123))

# str
print(type('oo'))

# dict
print(type({"name": '123'}))

# list
print(type([1, 2]))

"""
判断基本数据类型可以直接写int，str等，但如果要判断一个对象是否是函数怎么办？可以使用types模块中定义的常量：
"""
import types


def fn():
    pass


print(type(fn) == types.FunctionType)

print(type(abs)==types.BuiltinFunctionType)

print(type(lambda x: x)==types.LambdaType)

print(type((x for x in range(10)))==types.GeneratorType)

print('使用isinstance()')
print('用type()判断的基本类型也可以用isinstance()判断：')


class Animate(object):
    def __init__(self):
        pass

    def run(self):
        print('Animate is running...')


class Dog(Animate):

    '子类方法可以覆盖父类'

    def run(self):
        print('Dog is running...')


class Cat(Animate):
    pass


a = Animate()
d = Dog()
c = Cat()
print(isinstance(a, Animate))
print(isinstance(d, Dog))
print(isinstance(c, Cat))

print(isinstance(d, Dog) and isinstance(d, Animate))

# 用type()判断的基本类型也可以用isinstance()判断：


print('使用dir()')
print('如果要获得一个对象的所有属性和方法，可以使用dir()函数，'
      '它返回一个包含字符串的list，比如，'
      '获得一个str对象的所有属性和方法：')


# 类似__xxx__的属性和方法在Python中都是有特殊用途的，
# 比如__len__方法返回长度。在Python中，
# 如果你调用len()函数试图获取一个对象的长度，
# 实际上，在len()函数内部，它自动去调用该对象的__len__()方法，所以，
# 下面的代码是等价的：

print(dir('abc'))
print(len('abc'))
print('abc'.__len__())


print('-----------------------------------------')
print('仅仅把属性和方法列出来是不够的，配合getattr()、setattr()以及hasattr()，我们可以直接操作一个对象的状态：')


class MyObject(object):

    def __init__(self):
        self.x = 9

    def power(self):
        return self.x * self.x


obj = MyObject()

print(hasattr(obj, 'x'))
print(obj.x)

print(hasattr(obj, 'y'))
# print(obj.y) 报错

setattr(obj, 'y', 89)
print(getattr(obj, 'y'))
# 可以传入一个default参数，如果属性不存在，就返回默认值

print(getattr(obj, 's', '404'))

"""
通过内置的一系列函数，我们可以对任意一个Python对象进行剖析，
拿到其内部的数据。要注意的是，
只有在不知道对象信息的时候，我们才会去获取对象信息。如果可以直接写：
"""

# a good ex:


def read_image(fp):
    if hasattr(fp, 'read'):
        return readData(fp)
    return None


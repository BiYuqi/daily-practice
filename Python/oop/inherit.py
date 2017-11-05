# coding=UTF-8
# 继承和多态
print('继承和多态')


class Animate(object):
    def __init__(self):
        pass

    def run(self):
        print('Animate is running...')


# 当我们需要编写Dog和Cat类时，就可以直接从Animal类继承：


class Dog(Animate):

    '子类方法可以覆盖父类'

    def run(self):
        print('Dog is running...')


class Cat(Animate):
    pass


demo = Dog()
demo.run()
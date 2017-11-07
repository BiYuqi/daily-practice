# coding=UTF-8

# 多重继承

#通过多重继承，一个子类就可以同时获得多个父类的所有功能。


class Animal(object):
    pass


class Mammal(Animal):
    pass


class Runnable(object):

    def run(self):
        print('Running...')


class Flyable(object):

    def fly(self):
        print('Flying...')


# 多重继承


class Dog(Mammal, Runnable, Flyable):
    pass


dog = Dog()

dog.run()
dog.fly()


# mixin
print('MixIn')
# MixIn的目的就是给一个类增加多个功能，这样，在设计类的时候，
# 我们优先考虑通过多重继承来组合多个MixIn的功能，而不是设计多层次的复杂的继承关系


# 比如，编写一个多进程模式的TCP服务，定义如下：


class MyTCPServer(TCPServer, ForkingMixIn):
    pass


# 编写一个多线程模式的UDP服务，定义如下：


class MyUDPServer(UDPServer, ThreadingMixIn):
    pass
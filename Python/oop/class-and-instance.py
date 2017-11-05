# coding=UTF-8
print('----类和实例----')

__author__ = "毕宇旗"

"""
在Python中，定义类是通过class关键字：
class后面紧接着是类名，即Student，类名通常是大写开头的单词，紧接着是(object)
表示该类是从哪个类继承下来的
通常，如果没有合适的继承类，就使用object类，这是所有类最终都会继承的类。

"""


class Student(object):
    pass


bart = Student()

print(bart)
print(Student)

# 变量bart指向的就是一个Student的实例，后面的0x10a67a590是内存地址
# 可以自由地给一个实例变量绑定属性，比如，给实例bart绑定一个name属性

bart.name = "毕宇旗"
print(bart.name)


print('------------------------------------------------------')

"""
注意到__init__方法的第一个参数永远是self，
表示创建的实例本身，因此，在__init__方法内部，
就可以把各种属性绑定到self，因为self就指向创建的实例本身。

有了__init__方法，在创建实例的时候，
就不能传入空的参数了，必须传入与__init__方法匹配的参数，
但self不需要传，Python解释器自己会把实例变量传进去：
"""


class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s分数： %s' % (self.name, self.score))



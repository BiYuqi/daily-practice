# coding=UTF-8
# 访问控制

"""
在Class内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，这样，就隐藏了内部的复杂逻辑。

但是，从前面Student类的定义来看，外部代码还是可以自由地修改一个实例的name、score属性：
"""


class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s分数： %s' % (self.name, self.score))


bart = Student('毕宇旗', 89)
bart.score = 100

# 此处被修改了
bart.print_score()

print('-------------私有变量-------------')
"""
如果要让内部属性不被外部访问，可以把属性的名称前加上两个下划线__，在Python中，
实例的变量名如果以__开头，就变成了一个私有变量（private），
只有内部可以访问，外部不能访问，所以，我们把Student类改一改：
"""


class Student2(object):

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('%s分数： %s' % (self.__name, self.__score))


bart2 = Student2('毕宇旗', 89)
bart2.score = 100
# 此处会报找不到该属性的错误
# bart2.name
# 此处修改无效 依然是89分
bart2.print_score()

print('-------------添加方法--------------')
# 但是如果外部代码要获取name和score怎么办？可以给Student类增加get_name和get_score这样的方法


class Student3(object):

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('%s分数： %s' % (self.__name, self.__score))

    def get_score(self):
        return self.__score

    def get_name(self):
        return self.__name

    def set_score(self, score):
        if 0 <= score <= 100:
            self.__score = score
        else:
            raise ValueError('bad score')


add = Student3('毕宇旗', 99)

print(add.get_name())
print(add.get_score())
add.set_score(100)
print(add.get_score())

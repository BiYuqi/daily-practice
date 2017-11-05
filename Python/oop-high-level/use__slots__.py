# coding=UTF-8

# 继承方法


class MyMethod(object):

    def __init__(self, options=None):
        self.options = options

    def is_object(self, t):
        if isinstance(t, dict):
            return 'yes'


obj = MyMethod()
L = {
    "name": "test"
}
print(obj.is_object(L))


def get_list(*kw):
        for i in kw:
            print(i)


MyMethod.get_list = get_list

newObj = MyMethod()
newObj.get_list(1, 2, 3)


print('-------------------slots---------------')
"""
但是，如果我们想要限制实例的属性怎么办？比如，只允许对Student实例添加name和age属性。
为了达到限制的目的，Python允许在定义class的时候，定义一个特殊的__slots__变量，来限制该class实例能添加的属性：
"""
# 用tuple定义允许绑定的属性名称


class Student(object):

    __slots__ = ('name', 'age')


o = Student()

o.name = 'biyuqi'

print(o.name)
# 报错 'Student' object has no attribute 'score'
o.score = 90

# 由于'score'没有被放到__slots__中，所以不能绑定score属性
# 使用__slots__要注意，__slots__定义的属性仅对当前类实例起作用，对继承的子类是不起作用的：
# coding=UTF-8

# 在绑定属性时，如果我们直接把属性暴露出去，虽然写起来很简单，但是，没办法检查参数，导致可以把成绩随便改：


class Student(object):

    def get_score(self):
         return self._score

    def set_score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value

# 现在，对任意的Student实例进行操作，就不能随心所欲地设置score了
# 上面的调用方法又略显复杂，没有直接用属性这么直接简单。

print(' @property ')


class MyScore():

    @property
    def birth(self):
        return self._birth

    @birth.setter
    def birth(self, value):
        self._birth = value

    @property
    def age(self):
        return 2017 - self._birth


myInfo = MyScore()

myInfo._birth = 1992
print(myInfo._birth)
print(myInfo.age)


# -------------------
print('请利用@property给一个Screen对象加上width和height属性，以及一个只读属性resolution：')


class Screen(object):

    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        if isinstance(value, str):
            raise ValueError('it\'s not corect value ')
        self._width = value

    @property
    def height(self):
        return self._height

    @height.setter
    def width(self, value):
        if isinstance(value, str):
            raise ValueError('it\'s not corect value ')
        self._height = value

    @property
    def resolution(self):
        return (self._width, self.height)


src = Screen()

src._width = 1200
print(src._width)
src._height = 1000
print(src._height)

print(src.resolution)



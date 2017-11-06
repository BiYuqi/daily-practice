# coding=UTF-8
# 过程

std1 = { 'name': 'Michael', 'score': 98 }
std2 = { 'name': 'Bob', 'score': 81 }


def print_score(std):
    print('%s: %s' % (std['name'], std['score']))

print_score(std2)


# 采用面向对象的程序设计思想，我们首选思考的不是程序的执行流程，而是Student这种数据类型应该被视为一个对象，
# 这个对象拥有name和score这两个属性（Property）。如果要打印一个学生的成绩，
# 首先必须创建出这个学生对应的对象，然后，给对象发一个print_score消息，让对象自己把自己的数据打印出来。


class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s分数： %s' % (self.name, self.score))


bart = Student('Bart Tom', 89)
lisa = Student('Lisa Bei', 59)

bart.print_score()
lisa.print_score()
# coding=UTF-8
# 定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回
print('定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回')

def myAbs(x):
    if x >= 0:
        return x
    else:
        return -x

print(myAbs(-58))

# 空函数
# 如果想定义一个什么事也不做的空函数，可以用pass语句：

print('----空函数----')

def get():
    pass

# pass语句什么都不做，那有什么用？实际上pass可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个pass，让代码能运行起来。
# pass还可以用在其他语句里，比如：

age = 10
if age > 18:
    pass



# 参数检查
print('----参数检查----')
# 数据类型检查可以用内置函数isinstance()


def my_abs(x):
    if not isinstance(x,(int,float)):
        return 'bad arguments'
    if x > 0:
        return x
    else:
        return -x


print(my_abs('58'))
print(my_abs(58))
print(my_abs(58.258))

# 返回多个值
print('----返回多个值----')

import math

print(math.cos(45))


def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

# 写到这发现有点像js Es6里面的解构赋值了


x, y = move(50, 49, 8, 45)
print(x, y)


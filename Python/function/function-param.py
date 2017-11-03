# 函数的参数
print('----函数的参数------------------------------------------------------')
# Python的函数定义非常简单，但灵活度却非常大。除了正常定义的必选参数外，
# 还可以使用默认参数、可变参数和关键字参数，使得函数定义出来的接口，
# 不但能处理复杂的参数，还可以简化调用者的代码。

print('1.位置参数----------------------------------------------------------------------------')
# 对于power(x)函数，参数x就是一个位置参数。
# 当我们调用power函数时，必须传入有且仅有的一个参数x：


def power(x):
    return x * x


print(power(8))

# 如果我们要计算x3怎么办？可以再定义一个power3函数，但是如果要计算x4、x5……怎么办？我们不可能定义无限多个函数。


def power2(x, n):
    s = 1
    while n > 0:
        s = s * x
        n = n - 1
    return s


print(power2(5, 2))

print('2.默认参数----------------------------------------------------------------------------')
# 这个时候，默认参数就排上用场了。由于我们经常计算x2，所以，完全可以把第二个参数n的默认值设定为2：


def power3(x, n=2):
    s = 1
    while n > 0:
        s = s * x
        n = n - 1
    return s


print(power3(6))
print(power3(6, 6))

# 从上面的例子可以看出，默认参数可以简化函数的调用。设置默认参数时，有几点要注意：

#   一是必选参数在前，默认参数在后，否则Python的解释器会报错（思考一下为什么默认参数不能放在必选参数前面）；

#   二是如何设置默认参数。

# 当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。

# 使用默认参数有什么好处？最大的好处是能降低调用函数的难度。
print('默认参数必须指向不变对象-------')


def form_input(name, password, city='', age=''):
    info = {
        "name": name,
        "password": password,
        "city": city,
        "age": age
    }
    return info


print(form_input('biyuqi', '123456'))

print('test-----')

line = None

print(line is None)


# def form_input2(L):
#     L.append("测试")
#     return L
#
# 默认参数必须指向不变对象
# print(form_input2([1,2,3]))
# print(form_input2([1,2,3]))

print('3.可变参数----------------------------------------------------------------------------')

# list 普通传参


def add_sum(number):
    sum_res = 0
    for i in number:
        sum_res += i
    print(sum_res)


add_sum([1, 2, 3, 4, 5, 6])

# 定义可变参数和定义一个list或tuple参数相比，
# 仅仅在参数前面加了一个*号。在函数内部，参数numbers接收到的是一个tuple，因此，函数代码完全不变。
# 但是，调用该函数时，可以传入任意个参数，包括0个参数：


def add_sum2(*number):
    sum_res = 0
    for i in number:
        sum_res += i
    print(sum_res)


add_sum2(1, 2, 3, 4, 5, 6)

# 还有一种特殊情况没我们拿到的就是一个list，这个时候怎么用可变参数进行传参呢
# 繁琐的方法
print('繁琐的方法')

exe = [1, 2, 3]


def add_sum3(*number):
    sum_res = 0
    for i in number:
        sum_res += i
    print(sum_res)


add_sum3(exe[0], exe[1], exe[2])

# 讨巧的方法 Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去
print('讨巧的方法 Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去')

add_sum3(*exe)


# 关键字参数
print('4.关键字参数----------------------------------------------------------------------------')
# 可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。
# 而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。请看示例：


def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)
    if len(kw) > 0:
        for i in kw:
            print(kw[i])
    else:
        print('对象没有参数')


person('biyuqi', '25')
person('Adam', 45, gender='M', job='Engineer', address="平舆县", bingo="冰果消消乐")

# 简化
print('4.关键字参数--------简化--------------------------------------------------------------------')
obj = {
    "adress": "58",
    "test": 89
}
person("001", "002", **obj)

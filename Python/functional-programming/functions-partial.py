# coding=UTF-8
# 偏函数

# 有点像JS中自定义函数,通过原型改写
# int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换：
import functools

int2 = functools.partial(int, base=2)

print(int2('1000'))
print(int2('1000', base=8))
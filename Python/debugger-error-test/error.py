# coding=UTF-8

"""
高级语言通常都内置了一套try...except...finally...的错误处理机制，Python也不例外
"""


try:
    if isinstance('222', int):
        print('True')
    r = 10 / 0
    print('result:', r)
except ZeroDivisionError as e:
    print('excepr-error:', e)
finally:
    print('finally')
print('End')

# 就可以用try来运行这段代码，如果执行出错，则后续代码不会继续执行，
# 而是直接跳转至错误处理代码，
# 即except语句块，执行完except后，
# 如果有finally语句块，则执行finally语句块

"""
错误应该有很多种类，如果发生了不同类型的错误，应该由不同的except语句块处理
"""

try:
    print('try----start')
    r = 10 / int('a')
    print('result:', r)
except ValueError as e:
    print('value-error:',e)
except ZeroDivisionError as e:
    print('zero-error', e)
print('end')
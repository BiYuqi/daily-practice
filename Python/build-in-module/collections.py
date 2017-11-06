# ciding=UTF-8

# collections是Python内建的一个集合模块，提供了许多有用的集合类。

from collections import namedtuple, deque

Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 3)
print(p.x)
print(p.y)

"""
namedtuple是一个函数，它用来创建一个自定义的tuple对象，
并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素。

这样一来，我们用namedtuple可以很方便地定义一种数据类型，
它具备tuple的不变性，又可以根据属性来引用，使用十分方便
"""

print('-----')
# 比如定义一个圆 坐标和半径表示一个圆
# namedtuple 里面的name类似于标识，介绍
Circle = namedtuple('Circle', ['x', 'y', 'r'])
c = Circle(2, 3, 4)
print(c.x)
print(c.y)
print(c.r)

print('------deque----')

"""
使用list存储数据时，按索引访问元素很快，
但是插入和删除元素就很慢了，因为list是线性存储，
数据量大的时候，插入和删除效率很低。
deque是为了高效实现插入和删除操作的双向列表，适合用于队列和栈：
"""

q = deque([1, 2, 3])
print(q)

q.append(5)
q.appendleft(90)
print(list(q))

# deque除了实现list的append()和pop()外，
# 还支持appendleft()和popleft()，这样就可以非常高效地往头部添加或删除元素。

import requests

response = requests.get("http://loadingmore.com")

print(response.status_code)
print(response.reason)

for name, value in response.headers.items():
    print('%s:%s' % (name, value))

print(response.content)

with open("test.jpg", "wb") as f:
    f.write(response.content)

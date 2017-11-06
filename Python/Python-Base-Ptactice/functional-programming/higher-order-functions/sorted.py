# coding=UTF-8
# 排序算法

# 1
print(sorted([1, -2, -4, 3, 2, 90]))

# 2 key函数来实现自定义的排序

print(sorted([1, -2, -4, 3, 2, 90], key = abs))

# 3
# 字符串排序，是按照ASCII的大小比较的
print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=str))

# 改进 字符串映射为忽略大小
print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower))

# 翻转

print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True))

print(sorted([1, 2, 3, 4, 5], reverse=True))
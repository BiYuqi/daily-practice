# coding=UTF-8
# 切片 相当于JS中的slice
# 语法为[start:end]  返回包含所取字符的list
# start 包含
# end 不包含
L = ['name', 'age', 'adress', 'test']

print(L[0:1])
print(L[2:3])
print(L[1:3])

# Python支持L[-1]取倒数第一个元素，那么它同样支持倒数切片
# 返回值
print(L[-2:])

print('---------------------list--------------')

M = list(range(100))

# 前十个

print(M[:10])

# 后10个数：

print(M[-10:])

# 前11-20个数：
print(M[10:20])

# 前10个数，每两个取一个：
print(M[:10:2])

# 所有数，每5个取一个：
print(M[::5])

# 甚至什么都不写，只写[:]就可以原样复制一个list：
print(M[:])

print('--------------------tuple---------------')
# tuple也是一种list，唯一区别是tuple不可变。因此，tuple也可以用切片操作，只是操作的结果仍是tuple：
print('tuple也是一种list，唯一区别是tuple不可变。因此，tuple也可以用切片操作，只是操作的结果仍是tuple：')

note = (1, 2, 3, 4)

print(note[1:3])

# 字符串'xxx'也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：
print('ABCDEFG'[4:6])

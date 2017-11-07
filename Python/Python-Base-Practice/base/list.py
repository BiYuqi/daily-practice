# coding=UTF-8
classMate = ['job','mike','mary']

print(classMate[0])
print(len(classMate))

# 追加数据 append

classMate.append('caicai')
print('像数组末尾添加数据 与js方法push类似')
print(classMate)

# 插入指定位置 insert
classMate.insert(2,'biyuqi')
print('追加指定字符')
print(classMate)

# 删除元素末尾字符 pop
classMate.pop()
print('删除元素末尾字符 pop')
print(classMate)

# 要删除指定位置的元素，用pop(i)方法，其中i是索引位置

classMate.pop(2)
print('要删除指定位置的元素，用pop(i)方法，其中i是索引位置')
print(classMate)

# 要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：
print('要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：')
classMate[0] = 'new-element'
print(classMate)
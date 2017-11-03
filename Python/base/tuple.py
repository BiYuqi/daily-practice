# 另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字：
print('另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字：')
classMate = ('one','two','three')
print(classMate)

# 现在，classmates这个tuple不能变了，它也没有append()，insert()这样的方法。
# #其他获取元素的方法和list是一样的，你可以正常地使用classmates[0]，classmates[-1]，但不能赋值成另外的元素。
# 因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple
print(classMate[0])
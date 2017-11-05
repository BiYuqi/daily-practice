# coding=UTF-8

# 文件读写

# 要以读文件的模式打开一个文件对象，使用Python内置的open()函数，传入文件名和标示符：
# 标示符'r'表示读

path = '/Users/loadingmore/Desktop/Daily_Project/daily-practice/Python/io-prigramming'

try:
    f = open(path+'/test.txt', 'r')
    print(f.read())
finally:
    if f:
        f.close()

# 但是每次都这么写实在太繁琐，所以，Python引入了with语句来自动帮我们调用close()方法：

with open(path + '/test.txt', 'r') as f:
    print(f.read())

print('------------------------------------')
"""
调用read()会一次性读取文件的全部内容，如果文件有10G，内存就爆了，
所以，要保险起见，可以反复调用read(size)方法，
每次最多读取size个字节的内容。
另外，调用readline()可以每次读取一行内容，
调用readlines()一次读取所有内容并按行返回list。
因此，要根据需要决定怎么调用。

如果文件很小，read()一次性读取最方便；
如果不能确定文件大小，反复调用read(size)比较保险；
如果是配置文件，调用readlines()最方便：
"""
print('-----------------read(size)-------------------')
with open(path + '/test2.txt', 'r') as f:
    for i in f.read():
        print(f.read(20))


print('---------------readlines()-----逐行阅读---')
with open(path + '/test2.txt', 'r') as f:
    for i in f.readlines():
        print(i.strip())  # 把末尾的'\n'删掉


# 二进制文件
print('---------------------二进制文件-------------')
# 前面讲的默认都是读取文本文件，并且是UTF-8编码的文本文件。
# 要读取二进制文件，比如图片、视频等等，用'rb'模式打开文件即可：

with open(path + '/logo.png', 'rb') as f:
    print(f.read())

# 字符编码
print('---------------------字符编码-------------')
# 要读取非UTF-8编码的文本文件，需要给open()函数传入encoding参数，例如，读取GBK编码的文件：

# open('/Users/michael/gbk.txt', 'r', encoding='gbk')


# 写文件
print('-------------------写文件------------')
# 唯一区别是调用open()函数时，传入标识符'w'或者'wb'表示写文本文件或写二进制文件：
# 要写入特定编码的文本文件，请给open()函数传入encoding参数，将字符串自动转换成指定编码。
with open(path+'/write.txt', 'w') as f:
    f.write('我是被创建的文件')
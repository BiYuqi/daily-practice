# coding=UTF-8
# 操作文件和目录

# os模块

import os

print(os.name)
# 如果是posix，说明系统是Linux、Unix或Mac OS X，如果是nt，就是Windows系统
print(os.uname())

# 环境变量
# 在操作系统中定义的环境变量，全部保存在os.environ这个变量中，可以直接查看

print(os.environ)

# 要获取某个环境变量的值，可以调用os.environ.get('key')：

print(os.environ.get('PATH'))


# 操作文件和目录
# 操作文件和目录的函数一部分放在os模块中，
# 一部分放在os.path模块中，这一点要注意一下。查看、创建和删除目录可以这么调用

# 查看当前目录的绝对路径:
print(os.path.abspath('.'))

# 在某个目录下创建一个新目录，首先把新目录的完整路径表示出来:
path = '/Users/loadingmore/Desktop/Daily_Project/daily-practice/Python/io-prigramming'
# os.path.join(path, 'testdir')
# # 然后创建一个目录:
# os.mkdir(path+'/testdir')

# os.rmdir(path+'/testdir')

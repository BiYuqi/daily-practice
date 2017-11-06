#!/usr/bin/env python3
# coding=UTF-8

" a test module "

__author__ = 'Biyuqi'

import sys

"""
第1行和第2行是标准注释，第1行注释可以让这个hello.py文件直接在Unix/Linux/Mac上运行，

第2行注释表示.py文件本身使用标准UTF-8编码；  -*- coding: utf-8 -*-

第4行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；

第6行使用__author__变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；

以上就是Python模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。

后面开始就是真正的代码部分。

你可能注意到了，使用sys模块的第一步，就是导入该模块：
import sys
"""

# 作用域
# 当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在sys模块的path变量中：
print(sys.path)
# coding=UTF-8

import base64

a = b'123456789'

r = base64.b64encode(a)
print(r)

print(base64.b64decode(r))
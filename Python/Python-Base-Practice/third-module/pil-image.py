# coding=UTF-8

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random

# 缩放一个图片
im = Image.open('logo.png')
w, h = im.size

print(w, h)

im.thumbnail((w//2, h//2))

im.save('thumbnail.png', 'png')

print('-----------------------------')

# 模糊效果

im2 = im.filter(ImageFilter.BLUR)

im2.save('blur.png', 'png')

# 生成字母验证码图片

# 随机字母


def ran_char():
    return chr(random.randint(65, 90))


def ran_color():
    return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))


def ran_color2():
    return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))


width = 60*4
height = 60
image = Image.new('RGB', (width, height), (255, 255, 255))

# 创建Font对象:

font = ImageFont.truetype('C:\\WINDOWS\\Fonts\\STXINGKA.TTF', 36)

# 创建Draw对象:

draw = ImageDraw.Draw(image)

# 填充每个像素:
for x in range(width):
    for y in range(height):
        draw.point((x, y), fill=ran_color())

# 输出文字:
for t in range(4):
    draw.text((60 * t + 10, 10), ran_char(), font=font, fill=ran_color2())

# 模糊:
path = 'E:/Project/GithubProject/daily-practice/Python/Python-Base-Ptactice/third-module/'
# image = image.filter(ImageFilter.BLUR)
image.save('code.jpg', 'jpeg')








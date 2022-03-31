#https://www.hackerrank.com/challenges/matrix-script/problem?isFullScreen=true
import math
import os
import random
import re
import sys
first_multiple_input = input().rstrip().split()
n = int(first_multiple_input[0])
m = int(first_multiple_input[1])
matrix = []
for _ in range(n):
    matrix_item = input()
    matrix.append(matrix_item)
s = ""
for i in range(m):
    for j in range(n):
        s+=matrix[j][i]
pattern = r'(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+(?=[a-zA-Z0-9])'
print(re.sub(pattern,' ',s))

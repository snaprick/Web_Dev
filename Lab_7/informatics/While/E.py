n = int(input())
a = 1
cnt=0
while a<n:
    cnt+=1
    a = 2**cnt
    
print(cnt)
n = int(input())
a = 0
while a+1 <= n:
    a+=1
    if a == 1:
        print(1,end = ' ')
        continue
    x = a
    while x!=1:
        if x%2==1:
            break
        x = x//2
    if x%2==1 and x!=1:
        continue
    print(a,end=' ')
    
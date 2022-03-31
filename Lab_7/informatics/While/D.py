n = int(input())
ok = True
while n!=1:
    if n%2==1:
        print("NO")
        ok =False
        break
    n = n//2
if ok:
    print("YES")
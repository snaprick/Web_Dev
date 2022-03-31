def is_leap(year):
    leap = False
    leap = (year%4==0 and not (year%100==0 and not (year%400==0)))
    
    return leap


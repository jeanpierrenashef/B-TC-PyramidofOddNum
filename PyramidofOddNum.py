x = int(input("Enter x: "))

for i in range (x):
    init = 1
    for j in range(i+1):
        print(init+2*j, end=" ")
    print()
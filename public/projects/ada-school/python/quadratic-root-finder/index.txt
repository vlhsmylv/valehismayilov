import math

# 🗑️

def emp():
    print("")

# welcoming script

emp()

print("############################################")
print("##                                        ##")
print("##                                        ##")
print("##        WELCOME TO ROOT FINDER          ##")
print("##          by Valeh Ismayilov            ##")
print("##                                        ##")
print("##                                        ##")
print("############################################")

emp()

# constant data

msgs = {
    "twoDiff": "You have 2 different roots. Now program will find them for you...",
    "oneSame": "You have 1 root. Now program will find it for you...",
    "noRoot": "You don't have any root :("
}

# pillar functions

# --- Return discriminant ---

def discFormula(a, b, c):
    return(b**2 - (4*a*c))

# --- Check is there any root ---

def checkRoot(disc):
    if(disc > 0):
        print()
        return True;
    elif(disc == 0):
        print()
        return False;
    else:
        print("")
        return None;

# --- Root finder ---

def findRoots(a, b, disc):
    return {
        "first": ((-b + math.sqrt(disc)) / (2*a)),
        "second": ((-b - math.sqrt(disc)) / (2*a))
    }

# get data from user

print("ax^2 + bx + c")
emp()

b = int(input("Input for b: "))
a = int(input("Input for a: "))
c = int(input("Input for c: "))

if checkRoot(discFormula(a, b, c)) == True:
    print(msgs["twoDiff"])
    emp()
    roots = findRoots(a, b, discFormula(a, b, c))
    rootIndex = 0
    for root in roots:
        rootIndex+=1
        print("Root", rootIndex,": ", roots[root])
elif checkRoot(discFormula(a, b, c)) == False:
    print(msgs["oneSame"])
    emp()
    root = findRoots(a, b, discFormula(a, b, c))
    print("Root: ", root['first'])
elif checkRoot(discFormula(a, b, c)) == None:
    print(msgs["noRoot"])
else:
    print("There is problem with program :(")
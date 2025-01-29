# def listFunc():
#    return [i for i in range(1, 6)] #Create list of ints from 1 to 5, Haskell equivalent [1..5]
#
# def applicatorFunc(inpFunc, s):
#    if s=='s':
#        return sum(inpFunc())
#    else:
#        return sum(inpFunc())/5
#
# print(applicatorFunc(listFunc, 's'))

# Generate a list of integers from a to b
def inpFunc(a, b):
    return [i for i in range(a, b + 1)]  

# Take inpFunc as input and applies sum or average calculation
def applicatorFunc(numbers, s):
    if s == 's':
        return sum(numbers)  # Sum of the list
    else:
        return sum(numbers) / len(numbers)  # Average of the list

a = int(input("Enter the starting number (a): "))
b = int(input("Enter the ending number (b): "))
s = input("Enter 's' for sum or any other character for average: ")

numbers = inpFunc(a, b)
result = applicatorFunc(numbers, s)
print("Result:", result)

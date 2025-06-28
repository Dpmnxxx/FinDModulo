def addmultiplenumbers(numbers):
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    result = 1
    for num in numbers:
        result *= num
    return result

def isiteven(num):
    return isinstance(num, int) and num % 2 == 0

def isitaninteger(num):
    return isinstance(num, int)

def calculator(numbers, operation):
    if operation == "+":
        return addmultiplenumbers(numbers)
    elif operation == "*":
        return multiplymultiplenumbers(numbers)
    elif operation == "-":
        result = numbers[0]
        for num in numbers[1:]:
            result -= num
        return result
    elif operation == "/":
        result = numbers[0]
        for num in numbers[1:]:
            result = result / num
        return result
    elif operation == "%":
        result = numbers[0]
        for num in numbers[1:]:
            result %= num
        return result
    else:
        return " ): Sorry, I just crashed, try again later... :C "


print(calculator([1, 2, 3], "+"))  # Output: 6
print(calculator([2, 3, 4], "*"))  # Output: 24
print(calculator([10, 5, 2], "-"))  # Output: 3
print(calculator([20, 5, 2], "/"))  # Output: 2.0
print(calculator([10, 3, 2], "%"))  # Output: 1
print(isiteven(4))  # Output: True
print(isiteven(3))  # Output: False
print(isitaninteger(5))  # Output: True
print(isitaninteger(5.5))  # Output: False

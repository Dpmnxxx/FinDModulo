print("CALCULATOR")

x = int(input("1ST NUMBER: "))

print("OPERATION:")

print("+ ")

print("- ")
print("* ")
print("% ")
print("/ ")


operation = input("Type the value: ")

y = int(input("2ND NUMBER: "))



if operation == "+":
    result = x + y
elif operation == "-":
    result = x - y
elif operation == "*":
    result = x * y
elif operation == "%":
    result = x % y
elif operation == "/":
    result = x / y

else:
    result = " ): Sorry, i just crashed, try again latter... :C "

print(f"equal to:", {result})
text = input("Enter a string: ")

count = {}

for char in text:
    if char in count:
        count[char] += 1
    else:
        count[char] = 1

print("Character frequency:")

for char, frequency in count.items():
    print(char, ":", frequency)

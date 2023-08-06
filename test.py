print("Please type your name:")
name = input()
print("How many times should I say hi?")
count = input()

for x in range(int(count)):

    print("Hi " + name + "!")

my_string = "This is text!"
my_int = 4
my_float = 4.2
my_bool = True
alphabet = ["a", "b", "c"]
my_nums = [1, 2, 3, 4, 5]
fruit = ["apple", "orange"]
my_blank_list = []
my_mixed_list = ["string", 28, True, [1, 2, 3, []], 4.6]
person1 = {
           "name": "Jacob",
           "age": 30,
           "job": "Web Developer",
           "sex": "Male",
           "colors": ["red", "blue"]
          }

for i, x in enumerate(my_nums):

  dubble = x * 2

  if dubble >= 6:

    print(str(dubble) + " is bigger than or = 6!")
# Recursion implementation of sum functions. Returns sum of elements in the array.
def sum_rec(arr):
    if (len(arr) == 0):
        return 0
    return arr.pop() + sum_rec(arr)


# Recursion implementation of function that finds highest element in the array.
def find_highest_number(arr):
    if (len(arr) == 2):
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub_max = find_highest_number(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max


print(sum_rec([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
print(find_highest_number([1, 2, 3, 55, 1, 2333, 5, 6]))

# This function returns the result that is needed for each row
# Not the most pretiest method, as brute forces answer
# Could be made better if sorted first, as then you would half the number of checks needed in worst case scenario
def wholeDivisionInRow(row):
    for i in range(len(row)):
        for j in range(len(row)):
            # If the items int the list aren't the same, and are evenly divisible, return the result of the division
            if row[i]!=row[j] and row[i]%row[j] == 0:
                return row[i]/row[j]

output = []
total = 0

with open('lochy.txt', 'r') as file:
    for line in file:
        output.append([int(i) for i in line.split()])

for x in range(len(output)):
    total += wholeDivisionInRow(output[x])

print(total)
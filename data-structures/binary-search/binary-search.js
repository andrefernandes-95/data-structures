function binarySearch(list, valueToLookFor) {
    var start = 0
    var end = list.length - 1

    while (start <= end) {
        var indexOfTheMiddle = Math.floor((start + end) / 2)
        var itemInTheMiddle = list[indexOfTheMiddle]

        if (itemInTheMiddle === valueToLookFor) {
            return indexOfTheMiddle
        } else {
            if (valueToLookFor > itemInTheMiddle) {
                // Everything on the left is guaranteed not to be "valueToLookFor", including the indexOfTheMiddle
                start = indexOfTheMiddle + 1
            } else {
                // Everything on the right is guaranteed not to be "valueToLookFor", including the indexOfTheMiddle
                end = indexOfTheMiddle - 1
            }
        }
    }

    return -1 // Not found
}

binarySearch([0, 1, 2, 3, 5, 6], 3)

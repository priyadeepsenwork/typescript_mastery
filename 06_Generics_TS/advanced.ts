const reversePair = <T, U>(value1: T, value2: U): [U, T]  => {
    return [value2, value1]
}

const reverse_result = reversePair('hello', 2)
console.log(reverse_result)



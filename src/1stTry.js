export const coinChanger = (amount) => {
    let return_array = []
    while(amount > 5) {
        return_array.push(5)
        amount - 5
    }
    while(amount > 0) {
        return_array.push(1)
        amount - 1
    }
    return return_array
}
function interStrings(A, B) {
    let result = '';
    let indexA = 0;
    let indexB = 0;

    while (indexA < A.length && indexB < B.length) {
        result += A[indexA] + B[indexB];
        indexA++;
        indexB++;
    }
    // Append remaining characters from stringA
    result += A.slice(indexA);
    // Append remaining characters from stringB
    result += B.slice(indexB);
    return result;

    // if (inputStringA){
    //     inputStringB += A.slice();
    //     console.log("no correct");
    // }else{
    //     console.log("correct");
    // }
}

const inputStringA = prompt("Enter the first string: ");
const inputStringB = prompt("Enter the second string: ");

const newPassword = interStrings(inputStringA, inputStringB);
console.log("Generated Password:", newPassword);

// You are given an m x n matrix mat and two integers r and c representing 
// the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of 
// the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, 
// output the new reshaped matrix; Otherwise, output the original matrix.


// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]


// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]



const matrixReshape = (mat, r, c) => {
    let solution = []
    if(mat.length * mat[0].length !== r*c){
        return mat
    }
    mat = mat.flat()
    for(let i = 0, k = 0; i < r; i++){
        let temp = []
        for(let j = 0; j < c; j++){
            temp.push(mat[k])
            k++
        }
        solution.push(temp)
    }
    
    return solution
};
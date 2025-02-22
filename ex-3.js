// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = 40
for (let i=0; i < scores.length; i++) {
    minScore = Math.min(minScore,scores[i])
}


console.log(minScore);

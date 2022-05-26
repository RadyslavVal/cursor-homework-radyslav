let N;
let M;
let parityCheck;

while (!Number.isInteger(N)) {
    N = +prompt("Enter first number");
};

while (!Number.isInteger(M) || M <= N) {
    M = +prompt("Enter second number(must be biger then first)");
};

parityCheck = confirm("Skip pair number?");

let result = (N, M, parityCheck) => {
    sum = 0;
    for (let i = N; i <= M; i++) {
        if (i % 2 === 0 && parityCheck) {
            continue;
        }
        else {
            sum += i;
        }
    }
    return console.log(sum)
}

result(N, M, parityCheck)

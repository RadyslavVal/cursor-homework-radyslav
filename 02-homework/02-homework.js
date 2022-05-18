let N;
let M;
let parityCheck;

while (!Number.isInteger(parseInt(N))) {
    N = prompt("Enter first number");
};

while (!Number.isInteger(parseInt(M))) {
    M = prompt("Enter second number");
    if (M < N) {
        while (Number(M) < Number(N)) {
            M = prompt("Second number must be biger then first");
        };
    };
};

parityCheck = confirm("Skip pair number?") ? "TRUE" : "FALSE";

let result = (N, M, parityCheck) => {
    sum = 0;
    for (let i = N; i <= M;) {
        if (parityCheck === "FALSE") {
            sum += i;
            i++;
        }
        else if (i % 2 != 0) {
            sum += i;
            i += 2;
        }
        else {
            i++;
        }
    }
    return console.log(sum)
}

result(parseInt(N), parseInt(M), parityCheck)


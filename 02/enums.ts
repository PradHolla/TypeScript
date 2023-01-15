enum choice {
    A = 1, // Can be anything. If you are defining a string, then rest of the values should be defined too
    B,
    C,
    D
}

const myChoice = choice.A;
// This generates too much code. const enums can be used to avoid that. Generating too much code is a prob with TS.
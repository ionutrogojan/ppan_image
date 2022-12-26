/*
██ - 1
░░ - 0

░░░░░░████░░░░░░
░░░░████████░░░░
░░████████████░░
████░░████░░████
████████████████
░░░░██░░░░██░░░░
░░██░░████░░██░░
██░░██░░░░██░░██

00011000
00111100
01111110
11011011
11111111
00100100
01011010
10100101

\1\8 \3\C \7\E \D\B \F\F \2\4 \5\A \A\5

--------------------------------------------------------------------------
|   Binary       | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 |
|------------------------------------------------------------------------|
|   Hexadecimal  |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |
--------------------------------------------------------------------------
|   Binary       | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
|------------------------------------------------------------------------|
|   Hexadecimal  |  8   |  9   |  A   |  B   |  C   |  D   |  E   |  F   |
--------------------------------------------------------------------------

*/

const _alien = "░░░░░░████░░░░░░\n░░░░████████░░░░\n░░████████████░░\n████░░████░░████\n████████████████\n░░░░██░░░░██░░░░\n░░██░░████░░██░░\n██░░██░░░░██░░██";
const binary = "0001100000111100011111101101101111111111001001000101101010100101";

import { encode } from "./lib/encode.ts";
import { decode } from "./lib/decode.ts";


encode(binary, "./img/test.ppan");

decode("./img/test.ppan"); // alien

decode("./img/test1.ppan"); // S

decode("./img/test2.ppan"); // 5

decode("./img/test3.ppan"); // K

decode("./img/test4.ppan"); // *

decode("./img/test5.ppan"); // %

// deno run --allow-read --allow-write main.ts
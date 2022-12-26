# PPAN Image Format

## **About**

First attempt of encoding and decoding ASCII art from an image file to console using binary strings and hexadecimal conversion

<br>

## **Quick Start**

```ts
import { encode } from "./lib/encode.ts";
import { decode } from "./lib/decode.ts";

const binary = "0001100000111100011111101101101111111111001001000101101010100101";

encode(binary, "./img/test.ppan");

decode("./img/test.ppan"); // alien

// Version 0.1.0

// run using: deno run --allow-read --allow-write main.ts

/* Output:

░░░░░░████░░░░░░
░░░░████████░░░░
░░████████████░░
████░░████░░████
████████████████
░░░░██░░░░██░░░░
░░██░░████░░██░░
██░░██░░░░██░░██

*/
```

<br>

## **Useful Links and Documentation**

- [CS101 - Image Encoding](https://liucs.net/cs101s17/n3-media.html)

- [CS101 - Hexadecimal Image Workshop](https://liucs.net/cs101f14/heximage.html)

- [CS35 Lab 1 - PPM Image Format](https://www.cs.swarthmore.edu/~soni/cs35/f13/Labs/extras/01/ppm_info.html)

- [Wikipedia - Image Compression](https://en.wikipedia.org/wiki/Image_compression)
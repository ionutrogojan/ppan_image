import { hex_bin_switch } from "./bin_hex.ts";

function format_to_hex(source: string): string[] {
    // split source at line end \n -> string array
    const format = source.split("\n");
    // temporary array
    const hex_array = [];
    // loop through the split array
    for (let i = 0; i < format.length; i++) {
        // split source line by separator \ -> string array
        const temp = format[i].split(`\\`);
        // join back the line without the separator and push to hexadecimal array
        hex_array.push(temp.join(""));
    }
    return hex_array;
}

function hex_to_bin(source: string[]): string[] {
    // temporary array
    const bin_array = [];
    // loop through the split array
    for (let i = 0; i < source.length; i++) {
        // temporary split each hex code -> string array
        const temp = source[i].split("");
        // loop over the temporary string array
        for (let t = 0; t < temp.length; t++) {
            // convert hex value to binary value
            temp[t] = hex_bin_switch(temp[t])
        }
        // join back the line without the binary value and push to binary array
        bin_array.push(temp.join(''));
    }
    return bin_array;
}

function preview_bin(source: string[]): string {
    // ascii pixel values
    const [ black, white ] = [ "██", "░░" ];
    // temporary preview string
    let preview = "";
    // loop through the source string array
    for (let i = 0; i < source.length; i++) {
        // split binary char -> string array
        const line = source[i].split('');
        // loop over the binary line
        for (let p = 0; p < line.length; p++) {
            // assign black | white pixel based on value
            switch (line[p]) {
                case "0":
                    line[p] = white;
                break;
                case "1":
                    line[p] = black;
                break;
            }
        }
        // join binary values array and append new line char, append to temporary preview string
        preview += `${line.join('')}\n`;
    }
    return preview;
}

export async function decode(path:string) {
    // read file to string
    const format = await Deno.readTextFile(path);
    // parse format to hexadecimal array
    const hexadecimal = format_to_hex(format);
    // convert hexadecimal values to binary array
    const binary = hex_to_bin(hexadecimal);
    // log preview to console
    console.log(preview_bin(binary));
}
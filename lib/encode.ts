import Converter from "./converter.ts";

export default class Encoder {
	private bin_array(source: string, value: number): string[] {
		// 4 pixel binary array
		const pixel_array: string[] = [];
		// loop over the source
		for (let i = 0; i < source.length; i++) {
			// if the value is a multiple of 4
			const step = (i + 1) % value;
			if (step == 0) {
				// start and end of the substring - end index is exclusive
				const [ start, end ] = [ i - 3, i + 1 ]
				// get substring
				const bit = source.substring(start, end);
				// append to array
				pixel_array.push(bit);
			}
		}
		return pixel_array;
	}
	
	private bin_to_hex(value: string[]): string {
		// temporary string
		let hex = "";
		// initialise
		const converter = new Converter();
		// loop over binary string array
		for (let i = 0; i < value.length; i++) {
			// append hexcode to result
			hex += converter.bin_to_hex(value[i]);
		}
		return hex;
	}
	
	private hex_to_format(source: string, value: number): string {
		// temporary string
		let form = "";
		// loop over the hexadecimal string
		for (let i = 0; i < source.length; i++) {
			// calculate the step
			const step = (i + 1) % value;
			// append \ ahead of hex char
			form += `\\${source[i]}`;
			// at step & not 0 & not end
			if (step == 0 && i > 0 && (i + 1) < source.length) {
				// break line
				form += "\n"
			}
		}
		return form;
	}
	
	public async encode(source: string, path: string) {
		// get binary array from source
		const binary = this.bin_array(source, 4);
		// convert binary array to hexadecimal string
		const hexadecimal = this.bin_to_hex(binary);
		// format hexadecimal string
		const format = this.hex_to_format(hexadecimal, 2);
		// write formated value to file
		await Deno.writeTextFile(path, format);
		console.log("File Written to", path);
	}
}

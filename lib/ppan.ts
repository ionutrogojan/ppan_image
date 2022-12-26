import Encoder from "./encode.ts";
import Decoder from "./decode.ts";

export default class PPAN {
	// assign encoder and decoder
	private encoder = new Encoder();
	private decoder = new Decoder();
	// pass binary source and file destination to the encoder
	public encode(source: string, path: string) { this.encoder.encode(source, path) }
	// pass file source to decoder
	public decode(path: string) { this.decoder.decode(path) }
}
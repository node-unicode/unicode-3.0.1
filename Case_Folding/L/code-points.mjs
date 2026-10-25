import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HwgJAASylGVZEZbKjp6hStjnR/LpT032+0kolNi2YCdot1WgwnPZAupVaC2yXi1AZahQkWstWGvFpd72eyjCrpd60ttnFMK9TuobbGt7hrAgb96wQDGuUUy3R5MTbVLWfMoh1B/68y84mqLyH5r3l4bR8p9P5uOMKNeTa2u+JZveLa5SlOme4fw0cn9BWbRlhPuc83eLMv6avKM4cEVblsNn1ktF3YoqbFhZelwBZ1OQYqJoaa+djln4Lk2VE/KwIRwzsrBhnH6zKMJy+VDV1/TTxFmR0L/LpdAXVoxv3ciZklqgG4Odh7Onj2Fcs065spFLJ/cYX5kb6l/SmZSkOFL7l4DGWJMPpJcrazXUZf1U1m3hDd1Si7VSAp/9+NVUugWv8Pjdnf5q', 'base64')).toString());

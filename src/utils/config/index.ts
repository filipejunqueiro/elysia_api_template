import pjson from "@/package.json";

const NAME = pjson.name ?? "?";
const DESCRIPTION = pjson.description ?? "?";
const VERSION = pjson.version ?? "?";

export { NAME, DESCRIPTION, VERSION };

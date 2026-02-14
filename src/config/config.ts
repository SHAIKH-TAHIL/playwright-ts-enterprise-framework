
export function loadConfig (path: string) {
    const testdataPath = `./../testdata/${path}/testdata.ts`;
    console.log(`Loading testdata from ${testdataPath}`);
    const module = require(testdataPath);
    return module.default;
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
chai.should();
const timeOffset = new Date().getTime();
describe("Hello Test", () => {
    it("SDK should print Hello", async () => {
        console.log("Hello From Mendix NodeJS Sdk");
    });
});
//# sourceMappingURL=index.spec.js.map
import * as chai from "chai";
chai.should();
const timeOffset = new Date().getTime();
describe("Hello Test", () => {
    it("SDK should print Hello", async () => {
        console.log("Hello From Mendix NodeJS Sdk");
    });

});

const Listing = require("../models/listing");

describe("Listing Model Unit Test", () => {

    test("Listing should contain title", () => {

        const listing = {
            title: "Beach House",
            price: 2000
        };

        expect(listing.title).toBe("Beach House");

    });

});
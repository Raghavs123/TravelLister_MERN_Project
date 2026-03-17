describe("User Model Test", () => {

  test("User email should match", () => {

    const user = {
      email: "test@gmail.com"
    };

    expect(user.email).toBe("test@gmail.com");

  });

});
const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  const newFake = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newFake;
};

const createCompany = () => {
  const newCompany = {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  let newUser = createUser();
  let newCompany = createCompany();
  res.json({
    user: newUser,
    company: newCompany,
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

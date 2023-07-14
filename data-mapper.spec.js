var datamapper = require('./data-mapper');

describe('datamapper', () => {
  var testObject;

  beforeEach(() => {
    testObject = new datamapper();
  });

  it.only("should get mapped Fred's cars", async () => {
    const personId = 100;
    return expect(await testObject.getPersonsCars(personId)).toEqual({
      id: personId,
      name: 'Fred Flinstone',
      cars: expect.arrayContaining(['1904 Ford Model-T', '1998 Honda Accord']),
    });
  });

  it("should get mapped George's cars", async () => {
    const personId = 200;
    return expect(await testObject.getPersonsCars(personId)).toEqual({
      id: personId,
      name: 'George Jetson',
      cars: expect.arrayContaining(['1999 Mazda Miata', '1997 Lincoln Town Car']),
    });
  });

  it("should get mapped Barts's cars", async () => {
    const personId = 300;
    return expect(await testObject.getPersonsCars(personId)).toEqual({
      id: personId,
      name: 'Bart Simpson',
      cars: expect.arrayContaining(['2005 Dodge Durango']),
    });
  });

  it("should get mapped Bugs' cars", async () => {
    const personId = 400;
    return expect(await testObject.getPersonsCars(personId)).toEqual({
      id: personId,
      name: 'Bugs Bunny',
      cars: expect.arrayContaining(['1904 Ford Model-T', '2016 Toyota Tundra', '1999 Mazda Miata']),
    });
  });

  it("should get mapped Leroy's cars", async () => {
    const personId = 500;
    return expect(await testObject.getPersonsCars(personId)).toEqual({
      id: personId,
      name: 'Leroy Brown',
      cars: expect.arrayContaining([
        '1994 Chevy Cavalier',
        '2018 Nissan Pathfinder',
        '2000 Hyundai Accent',
      ]),
    });
  });
});

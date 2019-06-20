const {insert} = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js')
// beforeAll, beforeEach, afterAll, afterEach
describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    it('should set ENV to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    describe('insert()', () => {
        it('should insert hobbits', async () => {
         await insert({name: 'Luis'});
         await insert({name: 'John'});

         const hobbits = await db('hobbits');

         expect(hobbits).toHaveLength(2);
        });

        it('should insert the provided hobbit', async () => {
            let hobbit = {name: 'Sam'}
            let inserted = await insert(hobbit);
            expect(inserted.name).toBe(hobbit.name)

            hobbit = {name: 'Frodo'}
            inserted = await insert(hobbit);
            expect(inserted.name).toBe(hobbit.name)
        });
    });
});
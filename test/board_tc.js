const chai = require('chai');  
const { getBoardList } = require('../board');

const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style


describe('Board Test Cases', () => {
  it('Verify that getting a list of a board is returning 200 status code', async () => {
     const result = await getBoardList();
     const status = result.status;
    (status).should.be.equal(200);
  });
});

'use strict';

describe('Filter: instanceList', function () {

  var filter;

  beforeEach(
    module('deckApp.instanceList.filter')
  );

  beforeEach(
    inject(
      function($filter) {
        filter = $filter('instanceSearch');
      }
    )
  );

  it('should be instantiated', function () {
    expect(filter).toBeDefined();
  });

  it('should not filter instances if the query is "i-"', function () {
    var instanceList = [{id:'i-abcd'}];
    var query = 'i-';
    expect(filter(instanceList, query )).toMatch(instanceList);
  });

  it('should not filter instances if the query starts with "i-" and contains a partial of the id', function () {
    var instanceList = [{id:'i-abcd'}];
    var query = 'i-ab';
    expect(filter(instanceList, query )).toMatch(instanceList);
  });

  it('should not filter instances if the query does not starts with "i-"', function () {
    var instanceList = [{id:'i-abcd'}];
    var query = 'v078';
    expect(filter(instanceList, query )).toMatch(instanceList);
  });

  it('should filter instances if the query starts with "i-" and DOES NOT contains a partial of the id', function () {
    var instanceList = [{id:'i-abcd'}];
    var query = 'i-foo';
    expect(filter(instanceList, query )).toMatch([]);
  });
});

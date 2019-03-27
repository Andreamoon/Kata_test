const assert = require("chai").assert;
//richiedo il file da testare
import index from'../src/index'

describe('Index',function(){
  it('lbl',function(){
    assert.equal(index(),true)
  })
})
const chai = require('chai');
const Trie = require('../lib/Trie');

const { expect, assert } = chai;
chai.should();

describe( 'Class: Trie', () => {
  describe( 'should exist', () => {
    it( 'should be defined', () => {
      assert.typeOf(Trie, 'function', 'Trie should be a class.');
    });
  });

  describe( '"add" and "exists" behavior', () => {
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it( 'add should only accept strings', () => {
      let boolErrorTest = () => trie.add(true);
      let numberErrorTest = () => trie.add(10);
      let arrayErrorTest = () => trie.add(['bad','words']);
      let anonObjectErrorTest = () => trie.add({ bad : 'words' });
      let nullErrorTest = () => trie.add(null);
      let undefinedErrorTest = () => trie.add();
      expect(boolErrorTest).to.throw(TypeError);
      expect(numberErrorTest).to.throw(TypeError);
      expect(arrayErrorTest).to.throw(TypeError);
      expect(anonObjectErrorTest).to.throw(TypeError);
      expect(nullErrorTest).to.throw(TypeError);
      expect(undefinedErrorTest).to.throw(TypeError);
    });

    it( 'exists should return "true" if the word has been added', () => {
      trie.add('cat');
      trie.exists('cat').should.be.true;
    });

    it( 'exists should return "false" if the word has not been added', () => {
      trie.add('cat');
      trie.exists('dog').should.be.false;
    });

    it( 'exists should return "false" if the word is in the trie and not an actual word', () => {
      trie.add('cat');
      trie.add('catacombs');
      trie.add('catatonic');
      trie.add('catalyst');
      trie.exists('cat').should.be.true;
      trie.exists('catacombs').should.be.true;
      trie.exists('catatonic').should.be.true;
      trie.exists('catalyst').should.be.true;
      trie.exists('c').should.be.false;
      trie.exists('ca').should.be.false;
      trie.exists('cata').should.be.false;
      trie.exists('catat').should.be.false;
      trie.exists('catac').should.be.false;
      trie.exists('catal').should.be.false;
      trie.exists('cataly').should.be.false;
      trie.exists('catalys').should.be.false;
      trie.exists('catalyts').should.be.false;
    });

    it( 'should not add duplicate data to the trie', () => {
      trie.add('cat');
      let snapshot1 = JSON.stringify(trie);

      for (let i = 0, len = 100; i < len; i++) {
        trie.add('cat');
      }

      let snapshot2 = JSON.stringify(trie);

      snapshot1.should.be.equal(snapshot2);
    });

    it( 'should handle spaces gracefully', () => {
      trie.add('cat');
      trie.add('cat');
      trie.add('d o g');
      trie.add(' mouse');
      trie.add(' ');
      trie.add('                                 ');

      trie.exists('cat').should.be.true;

      trie.exists('d o g').should.be.true;
      trie.exists('dog').should.be.false;

      trie.exists(' mouse').should.be.true;
      trie.exists('mouse').should.be.false;

      trie.exists(' ').should.be.true;
      trie.exists('   ').should.be.false;
    });
  });
});

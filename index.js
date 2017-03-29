/**
 * Sample using the Trie Class
 */

const Trie = require('./lib/Trie');

let trie = new Trie();

trie.add('cat');
trie.add('dog');

console.log('"cat" exists?', trie.exists('cat'));
console.log('"dog" exists?', trie.exists('dog'));
console.log('"mouse" exists?', trie.exists('mouse'));

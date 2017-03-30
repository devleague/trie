# Trie

Implement a Class that stores words in a Trie data structure

### Instructions

Do your work in the `lib/Trie.js` file and follow the instructions in the comments.

1. Create a class called `Trie`.

2. Create two instance methods called `add` and `exists`.

3. The internal data storage must be a trie data structure.

### So whats a trie?

> pronouces "trie" as in `reTRIEve`

Trie, a.k.a. a digital tree, is a search tree in which we can store data in a tree-like structure. In the case of this exercise, nodes (letters) will chain upon each other to build out a word. The last node of a word is called a leaf, signifying the end of a valid word.

For example, the word, `cat`, `catch`, and `car`.

```
root
  |
  └── c
      |
      └── a
          |
          ├─- t (leaf)
          |   |
          |   └── c
          |       |
          |       └── h (leaf)
          |
          └── r  (leaf)
```

### Usage

Running node on the `index.js` file located in the root of the repository will be your interactive test (in addition to the tests spec'd out in the `tests` directory).

```javascript
let trie = new Trie();
trie.add('cat');
trie.add('dog');

trie.exists('cat'); // returns true
trie.exists('dog'); // returns true
trie.exists('mouse'); //returns false
```

### Getting Started

1. Fork and clone this repository from your personal GitHub Account
2. In the terminal, navigate to the directory of the repository
3. Install dependencies by running the command: `npm install`
4. Run your tests by running the command `npm test`
5. Your work will be done in the file `Trie.js` in the `lib` directory.
6. Make your tests pass!

Commit often!

#### References

[Wikipedia: Trie](https://en.wikipedia.org/wiki/Trie)

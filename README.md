# JavaScript Entry Katas

This repository contains challenges for you to undertake to secure and prepare you for a place on the Tech Returners course. We will be checking over your solutions, so please ensure you push to GitHub regularly (little and often is key). 

You may find these exercises challenging but they give you the opportunity to showcase your growth mindset and commitment to learning, programming, and trying your best. You can always come to us if you are having any trouble!

We cover Javascript on the Your Return to Tech course, so it's really important your problem solving skills are fresh. 

If you need reminding of any key Javascript concepts to solve these challenges we recommend the 'Codecademy: Learn Javascript' (free) course: https://www.codecademy.com/learn/introduction-to-javascript

NOTE: You are not required to purchase any PRO content from Codecademy.

We also recommend this visual guide if you are unfamiliar with GitHub: https://agripongit.vincenttunru.com/

Remember to break down problems to help you solve them and that Google is your friend!

### Instructions

To complete these challenges you will need to have Node.js installed on your computer. Follow this link and click on the green button to install for Mac or Windows: https://nodejs.org/en/download/ 

A download will start. When a pop-up appears please follow the installation instructions. 

To check you have installed Node.js correctly, go to your terminal and type:

    node --version

Your terminal should respond with the version of Node you have installed. It will look something similar to the following (don't worry if its not the exact same version): 

    v14.5.0

Once you've got Node installed you can make a start.

### Completing the challenges

When first cloning this repository, install its dependencies:

    npm install

If you look inside the **challenges** directory you will find a file of functions to implement.

To understand how these functions work, take a look in the corresponding test file where the desired functionality is described.

To run the tests, run

    npm test

Work through each test 1 by 1 until you have them all passing. Initially, you'll have a lot of failing tests and a lot of output on the console. To focus on a single test, add `.only` to the test you are interested in:

```javascript
describe("singles", () => {
    test("returns the sum of single values only", () => {
        expect(singles([4,5,7,5,4,8])).toBe(15);
        expect(singles([9, 10, 19, 13, 19, 13])).toBe([19]);
        expect(singles([16, 0, 11, 4, 8, 16, 0, 11])).toBe([12]);
        expect(singles([5, 17, 18, 11, 13, 18, 11, 13])).toBe([22]);
        expect(singles([5, 10, 19, 13, 10, 13])).toBe([24]);
    });

    test.only("returns 0 if no singles are provided", () => {
        expect(capitalize([6, 6, 7, 8, 7, 8])).toBe(0);
    });
});
```

Don't forget to remove it afterwards so you can run all your tests again.

You can also ignore tests momentarily by adding an `x` at the front:

```javascript
xdescribe("singles", () => {
    test("returns the sum of single values only", () => {
        expect(singles([4,5,7,5,4,8])).toBe(15);
        expect(singles([9, 10, 19, 13, 19, 13])).toBe([19]);
        expect(singles([16, 0, 11, 4, 8, 16, 0, 11])).toBe([12]);
        expect(singles([5, 17, 18, 11, 13, 18, 11, 13])).toBe([22]);
        expect(singles([5, 10, 19, 13, 10, 13])).toBe([24]);
    });

    test("returns 0 if no singles are provided", () => {
        expect(capitalize([6, 6, 7, 8, 7, 8])).toBe(0);
    });
});
```

To run ONE test file at a tme you can enter into the terminal npm test followed by the file extension:

    npm test exercise004.test.js  


# The challenges

Open [the first challenge instructions](docs/exercise001.md) to get started!
# TR-javascript-challenges
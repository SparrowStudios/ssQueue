<p align="center">
    <img src="./.github/assets/sparrowStudiosBanner.png">
</p>
<p align="center">
    <a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/SparrowStudios/ssQueue" />
    </a>
    <a href="./LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/SparrowStudios/ssQueue" />
    </a>
    <a href="https://discord.gg/FTYjcbkzFn" alt="Discord">
        <img src="https://img.shields.io/discord/1116847034863984730?label=Discord&logo=Discord" />
    </a>
</p>

# ssQueue
A simple package to provide a queue class 

### Usage
Install using NPM
```cmd
npm install @jaypaulincodes/ssqueue
```

Import the package with the following import statement:
```ts
import Queue from "@jaypaulincodes/ssqueue";
```

Once imported you can create a new queue:
```ts
const MY_QUEUE = new Queue();
```

You can use the `enqueue()` method to add items to the queue:
```ts
MY_QUEUE.enqueue("foo");
```

Using the `dequeue()` method you can retreive the next item in the queue, removing it from the queue in the process:
```ts
const nextItem = MY_QUEUE.dequeue();
```

<br>
Complete example code:
```ts
import Queue from "@jaypaulincodes/ssqueue";

const MY_QUEUE = new Queue();

MY_QUEUE.enqueue("dog");
MY_QUEUE.enqueue("cat");
MY_QUEUE.enqueue("frog");

console.log("Starting to process queue of not frogs");

while (MY_QUEUE.hasNext) {
    if (MY_QUEUE.peek() === "frog") {
        break;
    }

    console.log(`Processing queue item: ${MY_QUEUE.dequeue()}`);
}

console.log("Finished processing queue");
```

Output:
```
Starting to process queue of not frogs
Processing queue item: dog
Processing queue item: cat
Finished processing queue
```

# Discord
Join [our Discord server](https://discord.gg/FTYjcbkzFn) for quick communication with the team and for support.

# License
This project uses the **Mozilla Public License 2.0**
<br>
Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
<br>
<br>
The license can be read [here](./LICENSE)
<br>
<br>
The following table provides a breif overview of the license. Hovering each point will provide a more detailed description.

[permissions1]: ## "The licensed material and derivatives may be used for commercial purposes."
[permissions2]: ## "The licensed material may be distributed."
[permissions3]: ## "The licensed material may be modified."
[permissions4]: ## "This license provides an express grant of patent rights from contributors."
[permissions5]: ## "The licensed material may be used and modified in private."

[conditions1]: ## "Source code must be made available when the licensed material is distributed."
[conditions2]: ## "A copy of the license and copyright notice must be included with the licensed material."
[conditions3]: ## "Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used."

[limitations1]: ## "This license includes a limitation of liability."
[limitations2]: ## "This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any implicit trademark rights."
[limitations3]: ## "This license explicitly states that it does NOT provide any warranty."

| Permissions | Conditions | Limitations |
|---|---|---|
| [<img src="./.github/assets/licenseSpriteGreen.png"> Commercial use][permissions1] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Distribution][permissions2] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Modification][permissions3] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Patent use][permissions4] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Private use][permissions5] | [<img src="./.github/assets/licenseSpriteBlue.png"> Disclose source][conditions1] <br> [<img src="./.github/assets/licenseSpriteBlue.png"> License and copyright notice][conditions3] <br> [<img src="./.github/assets/licenseSpriteBlue.png"> Same license (file)][conditions2] | [<img src="./.github/assets/licenseSpriteRed.png"> Liability][limitations1] <br> [<img src="./.github/assets/licenseSpriteRed.png"> Trademark use][limitations2] <br> [<img src="./.github/assets/licenseSpriteRed.png"> Warranty][limitations3] |

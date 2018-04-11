var shuffleSequence = seq("intro");

var defaults = [
    "Question", {
        as: ["Yes", "No"]
    },
    "Message", {
        transfer: "keypress"
    }
];

var items = [
    ["intro", "Message", {html: "<p>Imagine you gave a speech at a small political rally " +
              "with a presentation about incarceration. There were people in the audience " +
              "you did not know. You are considering whether to give this same speech to " + 
              "another audience</p>", transfer: "click"}],
    ["critical", "Message", {html: "<p>Daniela in the audience says, “People didn’t stop " + 
                      "looking at their phone on the slide about the history of the justice " + 
                      "system.”</p>", q: "Given what your friend told you, do you think that it " +
                      "is possible people were paying attention before the jail slide?"}]
];

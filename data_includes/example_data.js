var shuffleSequence = seq("intro", reshuffle("stop"_);

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
    ["stop", "Question", {html: "<p>Daniela says, “People didn't stop looking at their phone " +
              "on the slide about the history of the justice system.”</p>", q: "Given what " +
              "your Daniela told you, do you think it's possible people were paying " +
              "attention before the slide?"}],
    ["stop", "Question", {html: "<p>Tamara says, “People didn't stop yawning on the slide about " +
              "immigrant narratives.”</p>", q: "Given what your Tamara told you, do " +
              "you think it's possible that people were yawning before the slide?"}],
    ["stop", "Question", {html: "<p>Ben says, “People didn't stop talking over you on " +
              "the beginning slide.”</p>",q: "Given what your Ben told you, do you think that it " +
              "is possible people were talking over you before the slide?"}],
    ["stop", "Question", {html: "<p>Zoe says, “People didn't stop falling asleep " +
              "on the slide about mental health.”</p>", q: "Given what your Zoe told you, " +
              "do you think it's possible people were falling asleep before the slide?"}],
    ["stop", "Question", {html: "<p>Joe says, “People didn't stop walking out on the middle " + 
              "of the presentation.</p>", q: "Given what your Joe told you, do you think that it " +
              "is possible people were walking out before the middle of the presentation?"}],
    ["stop", "Question", {html: "<p>Katherine says, “People didn't stop smirking on the slide " +
              "with your call-to-action. ”</p>", q: "Given what your Katherine told you, do you think it's " +
              "possible people smirking before the slide?"}],
    ["stop", "Question", {html: "<p>Mary says, “People didn't stop paying attention on the slide " +
              "with the information about non-profit organizations.”</p>", q: "Given what your Mary told you, " +
              "do you think it's possible people were paying attention before the slide?"}],   
    ["stop", "Question", {html: "<p>Brianna says, “People didn't stop being motivated on the " +
              "slide with the retention rates.”</p>", q: "Given what your Brianna told you, " +
              "do you think it's possible people were motivated before the slide?"}], 
    ["stop", "Question", {html: "<p>Elise says, “People didn't stop engaging with you on " +
              "the slide with the big numbers.”</p>", q: "Given what your Elise told you, " +
              "do you think it's possible people were engaging with you before the slide?"}],
    ["stop", "Question", {html: "<p>Michaela says, “People didn't stop nodding on the slide " + 
              "showcasing different stories about people affected.”</p>", q: "Given what " + 
              "your Michaela told you, do you think it's possible people were paying nodding " + 
              "before the slide?"}],
    ["stop", "Question", {html: "<p>Dylan says, “People didn't stop asking good questions on " +
              "the middle of the presentation.”</p>", q: "Given what your Dylan told you, do " + 
              "you think it's possible people were asking good questions before the middle " + 
              "of the presentation?"}],
    ["stop", "Question", {html: "<p>Rachel says, “People didn't stop clapping on the slide " +
              "encouraging people to call their senators.”</p>", q: "Given what your Rachel " +
              "told you, do you think it's possible people were clapping before the slide?"}]
];

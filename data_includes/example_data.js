shuffleSequence = seq("intro", sepWith("sep", rshuffle("negstop", "stop", "ftsome", "fbsome", "filler")));

var defaults = [
    "Question", {
        as: ["Yes", "No"],
        presentAsScale: true
    },
    "Message", {
        transfer: "keypress"
    }
];

define_ibex_controller({
    name: "MQuestion",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "Question", this.options,
                ]
            });
        }
    },
    properties: { }
});

var scaleSeven = ["1", "2", "3", "4", "5", "6", "7"];

function questionGen(text, num) {
    if (num == 0)
      return {html: text, q: "Do you think your friends feedback was",
              leftComment: "Primarily Negative",
              rightComment: "Primarily Positive",
              as: scaleSeven};
    else if (num == 1)
        return {html: text, q: "Rate the speaker on the following:",
                leftComment: "Uneducated",
                rightComment: "Educated",
                as: scaleSeven};
    else if (num == 2)
        return {html: text, q: "Rate the speaker on the following:",
                leftComment: "Rude",
                rightComment: "Polite",
                as: scaleSeven};
    else if (num == 3)
        return {html: text, q: "Rate the speaker on the following:",
                leftComment: "Stupid",
                rightComment: "Smart",
                as: scaleSeven};
    else if (num == 4)
        return {html: text, q: "Rate the speaker on the following:",
                leftComment: "Formal",
                rightComment: "Casual",
                as: scaleSeven};
    else if (num == 5)
        return {html: text, q: "Rate the speaker on the following:",
                leftComment: "Unpretentious",
                rightComment: "Pretentious",
                as: scaleSeven};
}

var negItems = [
  "“People didn't stop looking at their phone on the slide about the history of the justice system.”",
  "“People didn't stop yawning on the slide about immigrant narratives.”",
  "“People didn't stop talking over you on the beginning slide.”",
  "”People didn't stop falling asleep on the slide about mental health.”",
  "“People didn't stop walking out on the middle of the presentation.”",
  "“People didn't stop smirking on the slide with your call-to-action.”",
  "“People didn't stop paying attention on the slide with the information about non-profit organizations.”",
  "“People didn't stop being motivated on the slide with the retention rates.”",
  "“People didn't stop engaging with you on the slide with the big numbers.”",
  "“People didn't stop nodding on the slide showcasing different stories about people affected.”",
  "“People didn't stop asking good questions on the middle of the presentation.”",
  "“People didn't stop clapping on the slide encouraging people to call their senators.”"
];

var notNegItems = [
  "“People stopped looking at their phone on the slide about the history of the justice system.”",
  "“People stopped yawning on the slide about immigrant narratives.”",
  "“People stopped talking over you on the beginning slide.”",
  "”People stopped falling asleep on the slide about mental health.”",
  "“People stopped walking out on the middle of the presentation.”",
  "“People stopped smirking on the slide with your call-to-action.”",
  "“People stopped paying attention on the slide with the information about non-profit organizations.”",
  "“People stopped being motivated on the slide with the retention rates.”",
  "“People stopped engaging with you on the slide with the big numbers.”",
  "“People stopped nodding on the slide showcasing different stories about people affected.”",
  "“People stopped asking good questions on the middle of the presentation.”",
  "“People stopped clapping on the slide encouraging people to call their senators.”"
];

var someItems = [
  // First two items are face threatening
  "“Some people hated your presentation.”",
  "“Some people disliked your presentation.”",
  // Last two items are face boosting
  "“Some people loved your presentation.”",
  "”Some people liked your presentation.”",
];

var fillerItems = [
  "“People didn't stop eating the donuts.”",
  "“People didn't continue eating the veggies.”",
  "“People didn't start leaving until after the food was gone.”",
  "“People stopped being cold when the A/C turned off.”",
  "“People continued hanging out after the event.”",
  "“People started leaving after sometime.”",
  "“People got to the rally in a timely manner.”",
  "“People thought it was cold.”",
  "“People enjoyed the food.”",
  "“People were talking to each other after the presentation.”",
  "“People went to the march afterwards.”",
  "“People car-pooled together to the event.”",
  "“People knew each other.”",
  "“The food was good.”",
  "“There is a good amount of people at the rally.”",
  "“The size of the venue is perfect.”",
  "“The weather today is nice.”",
  "“You were good.”",
  "“You seemed nervous.”",
  "“It was so informative.”",
];

var inst = "<p>Imagine you gave a speech at a small political rally " +
"with a presentation about incarceration. There were people in the audience " +
"you did not know. You are considering whether to give this same speech to " +
"another audience. A fiend comes up to you.</p>";

var items = [
    ["intro", "Message", {html: inst, transfer: "click"}],
    ["sep", "Separator", {transfer: 2000, normalMessage: "Another friend comes up to you."}],
    ["negstop", "MQuestion", {html: inst + "<p>Denise says, " + negItems[0] +"</p>", q: "Given what " +
             "your friend told you, do you think it's possible people were paying " +
              "attention before the slide?" },
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Denise says, " + negItems[0] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Tamara says, " + negItems[1] + "</p>", q: "Given what " +
              "your friend told you, do you think it's possible that people were yawning before the slide?"},
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Tamara says, " + negItems[1] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Ben says, "+ negItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people were talking " +
              "over you before the beginning?"},
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Ben says, " + negItems[2] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Zoe says, " +  negItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were falling asleep before the slide?"},
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Zoe says, " + negItems[3] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Joe says, " +  negItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Joe says, " + negItems[4] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Katherine says, " +  negItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Katherine says, " + negItems[5] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Mary says, " +  negItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Mary says, " + negItems[6] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Brianna says, " +  negItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Brianna says, " + negItems[7] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Elise says, " +  negItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Elise says, " + negItems[8] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Michaela says, " +  negItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Michaela says, " + negItems[9] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Dylan says, " +  negItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were asking good questions before the slide?"},
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Dylan says, " + negItems[10] +"</p>", 5)],
    ["negstop", "MQuestion", {html: inst + "<p>Rachel says, " +  negItems[11] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Rachel says, " + negItems[11] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Daniel says, " + notNegItems[0] +"</p>", q: "Given what " +
             "your friend told you, do you think it's possible people were paying " +
              "attention before the slide?" },
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Daniel says, " + notNegItems[0] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Chelsea says, " + notNegItems[1] + "</p>", q: "Given what " +
              "your friend told you, do you think it's possible that people were yawning before the slide?"},
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Chelsea says, " + notNegItems[1] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Allison says, "+ notNegItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people were talking " +
              "over you before the beginning?"},
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Allison says, " + notNegItems[2] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Zack says, " +  notNegItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were falling asleep before the slide?"},
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Zack says, " + notNegItems[3] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Elle says, " +  notNegItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Elle says, " + notNegItems[4] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Tori says, " +  notNegItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Tori says, " + notNegItems[5] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>John says, " +  notNegItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>John says, " + notNegItems[6] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Cathy says, " +  notNegItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Cathy says, " + notNegItems[7] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Jacob says, " +  notNegItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Jacob says, " + notNegItems[8] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Robert says, " +  notNegItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Robert says, " + notNegItems[9] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Emily says, " +  notNegItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were asking good questions before the slide?"},
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Emily says, " + notNegItems[10] +"</p>", 5)],
    ["stop", "MQuestion", {html: inst + "<p>Bob says, " +  notNegItems[11] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Bob says, " + notNegItems[11] +"</p>", 5)],
    ["ftsome", "MQuestion", {html: inst + "<p>Anna says, " +  someItems[0] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible everybody hated your speech?"},
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Anna says, " + someItems[0] +"</p>", 5)],
    ["ftsome", "MQuestion", {html: inst + "<p>Jessica says, " +  someItems[1] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible everybody disliked your speech?"},
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Jessica says, " + someItems[1] +"</p>", 5)],
    ["fbsome", "MQuestion", {html: inst + "<p>Tom says, " +  someItems[2] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible everybody loved your speech?"},
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Tom says, " + someItems[2] +"</p>", 5)],
    ["fbsome", "MQuestion", {html: inst + "<p>Jack says, " +  someItems[3] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible everybody liked your speech?"},
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Jack says, " + someItems[3] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Izzy says, " +  fillerItems[0] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were eating donuts before your presentation?"},
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Izzy says, " + fillerItems[0] +"</p>", 5)],              
    ["filler", "MQuestion", {html: inst + "<p>Elizabeth says, " +  fillerItems[1] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were eating veggies before your presentation?"},
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Elizabeth says, " + fillerItems[1] +"</p>", 5)],          
    ["filler", "MQuestion", {html: inst + "<p>Liz says, " +  fillerItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were eating the food during your presentation?"},
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Liz says, " + fillerItems[2] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Hannah says, " +  fillerItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were too cold in the beginning of the rally?"},
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Hannah says, " + fillerItems[3] +"</p>", 5)],          
    ["filler", "MQuestion", {html: inst + "<p>Sam says, " +  fillerItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were hanging out before the event?"},
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Sam says, " + fillerItems[4] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Monica says, " +  fillerItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people stayed for a while after the presentation?"},
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Monica says, " + fillerItems[5] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Aaron says, " +  fillerItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were late to the event?"},
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Aaron says, " + fillerItems[6] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Karen says, " +  fillerItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were cold throughout the event?"},
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Karen says, " + fillerItems[7] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Jane says, " +  fillerItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people disliked the food?"},
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Jane says, " + fillerItems[8] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Catherine says, " +  fillerItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were talking to each other before the presentation?"},
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Catherine says, " + fillerItems[9] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Edwin says, " +  fillerItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people didn't go to the march afterwards?"},
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Edwin says, " + fillerItems[10] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Martin says, " +  fillerItems[11] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people didn't car-pool to the event?"},
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Martin says, " + fillerItems[11] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Neil says, "+ fillerItems[12] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people didn't know each other?"},
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Neil says, " + fillerItems[12] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Pam says, " +  fillerItems[13] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible the food was bad?"},
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Pam says, " + fillerItems[13] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Laura says, " +  fillerItems[14] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people didn't show up for the rally?"},
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Laura says, " + fillerItems[14] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Beth says, " +  fillerItems[15] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible the venue was too small?"},
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Beth says, " + fillerItems[15] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Steve says, " +  fillerItems[16] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible the weather was okay?"},
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Steve says, " + fillerItems[16] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Barbara says, " +  fillerItems[17] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people noticed that you did well?"},
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Barbara says, " + fillerItems[17] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>James says, " +  fillerItems[18] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people noticed that you were nervous?"},
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>James says, " + fillerItems[18] +"</p>", 5)],
    ["filler", "MQuestion", {html: inst + "<p>Edward says, " +  fillerItems[19] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people thought that your presentation was informative?"},
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 0),
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 1),
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 2),
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 3),
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 4),
              "MQuestion", questionGen(inst + "<p>Edward says, " + fillerItems[19] +"</p>", 5)],
];

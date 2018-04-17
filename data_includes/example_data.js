shuffleSequence = seq("intro", sepWith("sep", rshuffle("negstop", "stop", "ftsome", "fbsome")));

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

var items = [
    ["intro", "Message", {html: "<p>Imagine you gave a speech at a small political rally " +
              "with a presentation about incarceration. There were people in the audience " +
              "you did not know. You are considering whether to give this same speech to " +
              "another audience. A fiend comes up to you</p>", transfer: "click"}],
    ["sep", "Separator", {transfer: 2000, normalMessage: "Another friend comes up to you."}],
    ["negstop", "MQuestion", {html: "<p>Denise says, " + negItems[0] +"</p>", q: "Given what " +
             "your friend told you, do you think it's possible people were paying " +
              "attention before the slide?" },
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 0),
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 1),
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 2),
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 3),
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 4),
              "MQuestion", questionGen("<p>Denise says, " + negItems[0] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Tamara says, " + negItems[1] + "</p>", q: "Given what " +
              "your friend told you, do you think it's possible that people were yawning before the slide?"},
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 0),
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 1),
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 2),
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 3),
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 4),
              "MQuestion", questionGen("<p>Tamara says, " + negItems[1] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Ben says, "+ negItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people were talking " +
              "over you before the beginning?"},
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 0),
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 1),
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 2),
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 3),
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 4),
              "MQuestion", questionGen("<p>Ben says, " + negItems[2] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Zoe says, " +  negItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were falling asleep before the slide?"},
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 0),
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 1),
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 2),
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 3),
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 4),
              "MQuestion", questionGen("<p>Zoe says, " + negItems[3] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Joe says, " +  negItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 0),
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 1),
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 2),
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 3),
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 4),
              "MQuestion", questionGen("<p>Joe says, " + negItems[4] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Katherine says, " +  negItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 0),
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 1),
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 2),
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 3),
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 4),
              "MQuestion", questionGen("<p>Katherine says, " + negItems[5] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Mary says, " +  negItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 0),
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 1),
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 2),
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 3),
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 4),
              "MQuestion", questionGen("<p>Mary says, " + negItems[6] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Brianna says, " +  negItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 0),
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 1),
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 2),
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 3),
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 4),
              "MQuestion", questionGen("<p>Brianna says, " + negItems[7] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Elise says, " +  negItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 0),
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 1),
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 2),
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 3),
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 4),
              "MQuestion", questionGen("<p>Elise says, " + negItems[8] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Michaela says, " +  negItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 0),
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 1),
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 2),
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 3),
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 4),
              "MQuestion", questionGen("<p>Michaela says, " + negItems[9] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Dylan says, " +  negItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were asking good questions before the slide?"},
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 0),
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 1),
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 2),
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 3),
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 4),
              "MQuestion", questionGen("<p>Dylan says, " + negItems[10] +"</p>", 5)],
    ["negstop", "MQuestion", {html: "<p>Rachel says, " +  negItems[11] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 0),
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 1),
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 2),
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 3),
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 4),
              "MQuestion", questionGen("<p>Rachel says, " + negItems[11] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Daniel says, " + notNegItems[0] +"</p>", q: "Given what " +
             "your friend told you, do you think it's possible people were paying " +
              "attention before the slide?" },
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 0),
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 1),
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 2),
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 3),
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 4),
              "MQuestion", questionGen("<p>Daniel says, " + notNegItems[0] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Chelsea says, " + notNegItems[1] + "</p>", q: "Given what " +
              "your friend told you, do you think it's possible that people were yawning before the slide?"},
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 0),
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 1),
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 2),
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 3),
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 4),
              "MQuestion", questionGen("<p>Chelsea says, " + notNegItems[1] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Allison says, "+ notNegItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people were talking " +
              "over you before the beginning?"},
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 0),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 1),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 2),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 3),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 4),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[2] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Zack says, " +  notNegItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were falling asleep before the slide?"},
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 0),
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 1),
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 2),
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 3),
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 4),
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[3] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Elle says, " +  notNegItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 0),
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 1),
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 2),
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 3),
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 4),
              "MQuestion", questionGen("<p>Elle says, " + notNegItems[4] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Katherine says, " +  notNegItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 0),
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 1),
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 2),
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 3),
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 4),
              "MQuestion", questionGen("<p>Katherine says, " + notNegItems[5] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>John says, " +  notNegItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 0),
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 1),
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 2),
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 3),
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 4),
              "MQuestion", questionGen("<p>John says, " + notNegItems[6] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Cathy says, " +  notNegItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 0),
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 1),
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 2),
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 3),
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 4),
              "MQuestion", questionGen("<p>Cathy says, " + notNegItems[7] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Jacob says, " +  notNegItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 0),
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 1),
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 2),
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 3),
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 4),
              "MQuestion", questionGen("<p>Jacob says, " + notNegItems[8] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Robert says, " +  notNegItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 0),
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 1),
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 2),
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 3),
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 4),
              "MQuestion", questionGen("<p>Robert says, " + notNegItems[9] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Emily says, " +  notNegItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were asking good questions before the slide?"},
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 0),
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 1),
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 2),
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 3),
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 4),
              "MQuestion", questionGen("<p>Emily says, " + notNegItems[10] +"</p>", 5)],
    ["stop", "MQuestion", {html: "<p>Bob says, " +  notNegItems[11] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 0),
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 1),
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 2),
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 3),
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 4),
              "MQuestion", questionGen("<p>Bob says, " + notNegItems[11] +"</p>", 5)],
    ["ftsome", "MQuestion", {html: "<p>Anna says, " +  someItems[0] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 0),
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 1),
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 2),
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 3),
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 4),
              "MQuestion", questionGen("<p>Anna says, " + someItems[0] +"</p>", 5)],
    ["ftsome", "MQuestion", {html: "<p>Jessica says, " +  someItems[1] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 0),
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 1),
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 2),
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 3),
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 4),
              "MQuestion", questionGen("<p>Jessica says, " + someItems[1] +"</p>", 5)],
    ["fbsome", "MQuestion", {html: "<p>Tom says, " +  someItems[2] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 0),
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 1),
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 2),
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 3),
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 4),
              "MQuestion", questionGen("<p>Tom says, " + someItems[2] +"</p>", 5)],
    ["fbsome", "MQuestion", {html: "<p>Jack says, " +  someItems[3] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 0),
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 1),
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 2),
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 3),
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 4),
              "MQuestion", questionGen("<p>Jack says, " + someItems[3] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Izzy says, " +  fillerItems[0] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 0),
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 1),
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 2),
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 3),
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 4),
              "MQuestion", questionGen("<p>Izzy says, " + fillerItems[0] +"</p>", 5)],              
    ["filler", "MQuestion", {html: "<p>Elizabeth says, " +  fillerItems[1] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 0),
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 1),
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 2),
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 3),
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 4),
              "MQuestion", questionGen("<p>Elizabeth says, " + fillerItems[1] +"</p>", 5)],          
    ["filler", "MQuestion", {html: "<p>Liz says, " +  fillerItems[2] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 0),
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 1),
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 2),
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 3),
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 4),
              "MQuestion", questionGen("<p>Liz says, " + fillerItems[2] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Hannah says, " +  fillerItems[3] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 0),
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 1),
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 2),
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 3),
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 4),
              "MQuestion", questionGen("<p>Hannah says, " + fillerItems[3] +"</p>", 5)],          
    ["filler", "MQuestion", {html: "<p>Sam says, " +  fillerItems[4] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 0),
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 1),
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 2),
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 3),
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 4),
              "MQuestion", questionGen("<p>Sam says, " + fillerItems[4] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Monica says, " +  fillerItems[5] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 0),
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 1),
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 2),
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 3),
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 4),
              "MQuestion", questionGen("<p>Monica says, " + fillerItems[5] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Aaron says, " +  fillerItems[6] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 0),
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 1),
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 2),
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 3),
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 4),
              "MQuestion", questionGen("<p>Aaron says, " + fillerItems[6] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Karen says, " +  fillerItems[7] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 0),
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 1),
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 2),
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 3),
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 4),
              "MQuestion", questionGen("<p>Karen says, " + fillerItems[7] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Jane says, " +  fillerItems[8] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 0),
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 1),
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 2),
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 3),
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 4),
              "MQuestion", questionGen("<p>Jane says, " + fillerItems[8] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Catherine says, " +  fillerItems[9] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 0),
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 1),
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 2),
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 3),
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 4),
              "MQuestion", questionGen("<p>Catherine says, " + fillerItems[9] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Emily says, " +  fillerItems[10] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were asking good questions before the slide?"},
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 0),
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 1),
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 2),
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 3),
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 4),
              "MQuestion", questionGen("<p>Emily says, " + fillerItems[10] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Chelsea says, " +  fillerItems[11] +"</p>", q: "Given what " + 
              "your friend told you, do you think it's possible people were clapping before the slide?"},
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 0),
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 1),
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 2),
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 3),
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 4),
              "MQuestion", questionGen("<p>Chelsea says, " + fillerItems[11] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Allison says, "+ notNegItems[12] +"</p>", q: "Given what " +
              "your friend told you, do you think that it's possible people were talking " +
              "over you before the beginning?"},
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 0),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 1),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 2),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 3),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 4),
              "MQuestion", questionGen("<p>Allison says, " + notNegItems[12] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Zack says, " +  notNegItems[13] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were falling asleep before the slide?"},
              "MQuestion", questionGen("<p>Zack says, " + notNegItems[13] +"</p>", 0),
              "MQuestion", questionGen("<p>Zack says, " + fillerItems[13] +"</p>", 1),
              "MQuestion", questionGen("<p>Zack says, " + fillerItems[13] +"</p>", 2),
              "MQuestion", questionGen("<p>Zack says, " + fillerItems[13] +"</p>", 3),
              "MQuestion", questionGen("<p>Zack says, " + fillerItems[13] +"</p>", 4),
              "MQuestion", questionGen("<p>Zack says, " + fillerItems[13] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Elle says, " +  fillerItems[14] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were walking out before the middle of the presentation?"},
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 0),
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 1),
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 2),
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 3),
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 4),
              "MQuestion", questionGen("<p>Elle says, " + fillerItems[14] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Katherine says, " +  fillerItems[15] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were smirking before the slide?"},
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 0),
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 1),
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 2),
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 3),
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 4),
              "MQuestion", questionGen("<p>Katherine says, " + fillerItems[15] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>John says, " +  fillerItems[16] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were paying attention before the slide?"},
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 0),
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 1),
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 2),
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 3),
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 4),
              "MQuestion", questionGen("<p>John says, " + fillerItems[16] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Cathy says, " +  fillerItems[17] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were motivated before the slide?"},
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 0),
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 1),
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 2),
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 3),
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 4),
              "MQuestion", questionGen("<p>Cathy says, " + fillerItems[17] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Jacob says, " +  fillerItems[18] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were engaging with you before the slide?"},
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 0),
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 1),
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 2),
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 3),
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 4),
              "MQuestion", questionGen("<p>Jacob says, " + fillerItems[18] +"</p>", 5)],
    ["filler", "MQuestion", {html: "<p>Robert says, " +  fillerItems[19] +"</p>", q: "Given what " +
              "your friend told you, do you think it's possible people were nodding before the slide?"},
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 0),
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 1),
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 2),
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 3),
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 4),
              "MQuestion", questionGen("<p>Robert says, " + fillerItems[19] +"</p>", 5)],
];

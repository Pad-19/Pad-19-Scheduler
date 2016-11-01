module.exports = {
  test: function(foo) {
    return foo;
  },

  surveyTools: {
    totalResults: function(surveyResults) {
      return surveyResults.length;
    },
    tabulateResults: function(resultsArray, humanReadable = false) {
      let counts = {};

      for (let i = 0; i < resultsArray.length; i++) {
        let resultArray = resultsArray[i];

            } else {
            }
          }
        }
      }
      return counts;
    },
    getSpeakerAssingments: {
      countDuplicates: function(speakersArray) {

        let duplicates = 0;
        let subjectsArray = [];

        for (let i = 0; i < speakersArray.length; i++) {

          let speakerObject = speakersArray[i];
          for (speaker in speakerObject) {
            let speakerTalks = speakerObject[speaker];
            for (let i = 0; i < speakerTalks.length; i++) {
              if (subjectsArray.includes(speakerTalks[i])) {
                duplicates++;
              } else {
                subjectsArray.push(speakerTalks[i]);
              }
            }
          }
        }
        return duplicates;
      },
      filterForDuplicates: function (speakersArray) {
        let speakerAssignments = {};

        for (let i = 0; i < speakersArray.length; i++) {
          let speakerObject = speakersArray[i];
          for (speaker in speakerObject) {
            let speakerTalks = speakerObject[speaker];
            if (speakerTalks.length > 1) {
              // do something
            } else {
              speakerAssignments[speaker] = speakerTalks;
            }
          }
        }
        return speakerAssignments;
      }
    }
  }
}

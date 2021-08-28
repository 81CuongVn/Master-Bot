module.exports = function() {
  return {
    queueHistory: [],
    triviaData: {
      isTriviaRunning: false,
      wasTriviaEndCalled: false,
      triviaQueue: [],
      triviaScore: new Map()
    },
    twitchData: {
      Interval: null,
      embedStatus: null,
      isRunning: false
    },
    gameData: {
      connect4Players: new Map(),
      tictactoePlayers: new Map()
    }
  };
};

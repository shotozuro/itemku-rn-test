function solution(record) {
  var answers = [];
  var logs = [];
  const users = {};

  const hasValidState = state => {
    const states = ['Enter', 'Leave', 'Change'];
    return states.indexOf(state) > -1;
  };

  const hasValidUid = uid => {
    return 1 <= uid.length && uid.length <= 10;
  };

  const hasValidNickname = nickname => {
    return 1 <= nickname.length && nickname.length <= 10;
  };

  record.forEach(recordItem => {
    const [state, uid, nickname] = recordItem.split(' ');

    if (hasValidState(state) && hasValidUid(uid)) {
      // set the nickname if:
      // 1. user is not leave the chat
      // 2. user has valid nickname and

      if (state !== 'Leave' && hasValidNickname(nickname)) {
        users[uid] = nickname;
      }
      logs.push({ uid, state });
    }
  });

  for (const log of logs) {
    // only return 'Enter' and 'Leave' record
    if (log.state !== 'Change') {
      answers.push(
        `${users[log.uid]} ${log.state === 'Enter' ? 'came in.' : 'has left.'}`
      );
    }
  }

  return answers;
}

module.exports = solution;

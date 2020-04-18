function solution(N, users) {
  var answer = [];
  if (N < 1 || N > 500) {
    throw new Error('The total stages should between 1 and 500');
  }
  if (users.length < 1 || users.length > 200000) {
    throw new Error('The total users should between 1 and 200000');
  }
  const stages = {};
  let currentUserCount = users.length;
  for (let i = 1; i <= N; i++) {
    const failedUsersCount = users.filter(stage => stage === i).length;
    stages[i] = failedUsersCount > 0 ? failedUsersCount / currentUserCount : 0;
    currentUserCount -= failedUsersCount;
  }

  answer = Object.keys(stages)
    .sort((a, b) => {
      return stages[b] - stages[a];
    })
    .map(stage => parseInt(stage));

  return answer;
}

module.exports = solution;

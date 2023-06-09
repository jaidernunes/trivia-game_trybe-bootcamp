const getQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const questions = await response.json();

  return questions.results;
};

export default getQuestions;

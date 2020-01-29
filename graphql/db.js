export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

export const getByMovie = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
}

export const deletMovie = id => {
  const deletMovie = movies.filter(movie => movie.id !== id);
  if (movies.length > deletMovie.length) {
    movies = deletMovie;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length +1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}


export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female"
      },
      {
        id: "1",
        name: "Jisu",
        age: 18,
        gender: "female"
      },
      {
        id: "2",
        name: "Japan Guy",
        age: 18,
        gender: "male"
      },
      {
        id: "3",
        name: "Daal",
        age: 18,
        gender: "male"
      },
      {
        id: "4",
        name: "JD",
        age: 18,
        gender: "male"
      },
      {
        id: "5",
        name: "moondaddi",
        age: 18,
        gender: "male"
      },
      {
        id: "6",
        name: "flynn",
        age: 18,
        gender: "male"
      }
];


export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

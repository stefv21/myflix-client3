export const movies = [
  {
    id: 1,
    Title: "The Little Mermaid",
    Description: "A young mermaid makes a deal with a sea witch to become human and win the love of a prince.",
    Genre: { 
      Name: "Fantasy", 
      Description: "Fantasy movies feature magical and otherworldly elements." 
    },
    Director: { 
      Name: "Ron Clements & John Musker", 
      Bio: "Known for their work on Disney animated classics.", 
      BirthYear: null, 
      DeathYear: null 
    },
    Actors: ["Jodi Benson", "Samuel E. Wright", "Pat Carroll"],
    ImagePath: "/images/the-little-mermaid.jpg",
    Featured: false
  },
  {
    id: 2,
    Title: "Inception",
    Description: "A mind-bending thriller about dreams within dreams.",
    Genre: { 
      Name: "Sci-Fi", 
      Description: "Science Fiction movies explore futuristic concepts." 
    },
    Director: { 
      Name: "Christopher Nolan", 
      Bio: "A British-American filmmaker known for his complex narratives.", 
      BirthYear: 1970, 
      DeathYear: null 
    },
    Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    ImagePath: "/images/inception.jpg",
    Featured: true
  },
  {
    id: 3,
    Title: "The Godfather",
    Description: "The story of a powerful Italian-American crime family.",
    Genre: { 
      Name: "Crime", 
      Description: "Crime movies revolve around criminal activities." 
    },
    Director: { 
      Name: "Francis Ford Coppola", 
      Bio: "An American director, producer, and screenwriter.", 
      BirthYear: 1939, 
      DeathYear: null 
    },
    Actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    ImagePath: "/images/godfather.jpg",
    Featured: false
  }
];

import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Action: [
    {
      MovieName: "Gone Girl",
      Rating: "4/5",
      Description:
        "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary."
    },
    {
      MovieName: "Da Vinci Code",
      Rating: "5/5",
      Description:
        "Symbologist Robert Langdon travels from Paris to London to unravel a bizarre murder. Accompanied by a cryptographer, he soon comes across a religious enigma protected by an age-old secret society."
    },
    {
      MovieName: "Shoe - Dog",
      Rating: "5/5",
      Description:
        "The memoir chronicles the history of Nike from its founding as Blue Ribbon Sports and its early challenges to its evolution into one of the world's most recognized and profitable companies."
    }
  ],
  Fiction: [
    {
      MovieName: "Pride and Prejudice",
      Rating: "3/5",
      Description:
        "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel but it can also be considered as a satirical book."
    },
    {
      MovieName: "Lord of the Rings",
      Rating: "5/5",
      Description:
        "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien."
    },
    {
      MovieName: "Moby Dick",
      Rating: "4.5/5",
      Description:
        "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod."
    }
  ],
  Horror: [
    {
      MovieName: "The Exorcist",
      Rating: "3/5",
      Description:
        "The Exorcist is a 1971 horror novel by American writer William Peter Blatty. The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon"
    },
    {
      MovieName: "Dracula",
      Rating: "3.5/5",
      Description:
        "Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles."
    },
    {
      MovieName: "IT",
      Rating: "4/5",
      Description:
        "The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey."
    }
  ]
};

var QuoteList = Object.keys(dataBase);

export default function App() {
  const [ret, setret] = useState("Action");

  function clickHandler(items) {
    var d = items;
    setret(d);
  }

  return (
    <div className="App">
      <h1>Book Recommendation </h1>
      <h2>Select Genre :- </h2>
      <div>
        {QuoteList.map((items) => {
          return (
            <button
              onClick={() => clickHandler(items)}
              key={items}
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "black",
                color: "aqua"
              }}
            >
              {items}{" "}
            </button>
          );
        })}
      </div>

      <hr />

      <div>{ret}</div>

      <div>
        {dataBase[ret].map((yolo) => {
          return (
            <div>
              <ul
                style={{
                  listStyle: "none"
                }}
              >
                <li
                  style={{
                    margin: "auto",
                    border: "3px solid white",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    maxWidth: "80%",
                    color: "black"
                  }}
                >
                  {" "}
                  <div
                    style={{
                      padding: "1rem",
                      fontSize: "larger"
                    }}
                  >
                    {yolo.MovieName}
                    <div style={{ color: "white" }}>{yolo.Description}</div>
                    {"----"}
                    <div style={{ color: "white" }}>{yolo.Rating}</div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

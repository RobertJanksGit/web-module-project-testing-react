// 👇 YOUR WORK STARTS ON LINE 28
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Episode from "../Episode";

const exampleEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "A young boy mysteriously disappears, and his panicked mother \
demands that the police find him. Meanwhile, the boy's friends conduct \
their own search, and meet a mysterious girl in the forest.",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

describe("Episode component", () => {
  test("renders without error", () => {
    render(<Episode episode={exampleEpisodeData} />);
    screen.debug();
  });
  test("renders texts and alt texts correctly", () => {
    const { rerender } = render(<Episode episode={exampleEpisodeData} />);

    screen.getByText(exampleEpisodeData.summary);

    screen.getByAltText("episode image");

    const { image, ...rest } = exampleEpisodeData;
    rerender(<Episode episode={rest} />);
    expect(
      document.querySelector(
        'img[src="https://i.ibb.co/2FsfXqM/stranger-things.png"]'
      )
    ).toBeInTheDocument();
    screen.getByAltText("generic episode image");

    rerender(<Episode />);

    screen.getByText("Loading episode...");
  });
});

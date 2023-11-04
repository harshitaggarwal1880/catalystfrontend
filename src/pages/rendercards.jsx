import { React, useState, useRef, useEffect } from "react";
import axios from "axios";

const fetchAllLessons = async () => {
  try {
    const res = await axios.get("/api/cards",
    {
      withCredentials: true,
      credentials: "include",
    });
    const cardData = res.data;
    const lessons = [];

    var usedLessons = [];
    for (var card = 0; card < cardData.length; card++) {
      var curr_card = cardData[card];
      if (usedLessons.includes(curr_card.lesson_id)) {
        lessons[curr_card.lesson_id - 1].push(curr_card);
      } else {
        usedLessons.push(curr_card.lesson_id);
        lessons.push([curr_card]);
      }
    }
    return lessons;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fetchAllLessons;

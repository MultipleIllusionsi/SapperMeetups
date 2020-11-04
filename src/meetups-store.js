import { writable } from "svelte/store";

const meetups = writable([]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  setMeetups: (meetupArray) => meetups.set(meetupArray),
  addMeetup: (meetupData) =>
    meetups.update((items) => [{ ...meetupData }, ...items]),
  updateMeetup: (id, meetupData) =>
    meetups.update((items) =>
      items.map((meetup) =>
        meetup.id === id ? { ...meetup, ...meetupData } : meetup
      )
    ),
  removeMeetup: (id) =>
    meetups.update((items) => items.filter((i) => i.id !== id)),
  toggleFavorite: (id) =>
    meetups.update((items) =>
      items.map((meetup) =>
        meetup.id === id
          ? { ...meetup, isFavorite: !meetup.isFavorite }
          : meetup
      )
    ),
};

export default customMeetupsStore;

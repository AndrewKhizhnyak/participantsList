export const normalizeParticipantList = (participantList) =>
  participantList.map((el) => ({
    id: el.login.uuid,
    avatar: el.picture.medium,
    fullName: el.name.first + " " + el.name.last,
    email: el.email,
    signUp: el.registered.date,
  }));

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getSignUpText = (signUp) => {
  const time = new Date().getTime() - signUp.getTime();

  if (time < 60000) {
    return "just now";
  } else if (time < 3.6e6) {
    return `${Math.floor((time / (1000 * 60)) % 60)}m ago`;
  } else if (time < 8.64e7) {
    return `${Math.floor((time / (1000 * 60 * 60)) % 24)}h ago`;
  } else if (time < 1.728e8) {
    return "yesterday";
  }

  return "unknown date";
};

const normalizeParticipantList = (participantList) =>
  participantList.map((participant) => ({
    id: participant.login.uuid,
    avatar: participant.picture.medium,
    fullName: participant.name.first + " " + participant.name.last,
    email: participant.email,
    signUp: participant.registered.date,
  }));

export const getParticipantList = async () => {
  const data = await fetch("https://randomuser.me/api/?results=20");
  const participantList = await data.json();

  return normalizeParticipantList(participantList.results);
};

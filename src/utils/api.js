import { normalizeParticipantList } from "@/utils/helpers";

export const getParticipantList = async () => {
  try {
    const data = await fetch("https://randomuser.me/api/?results=20");
    const participantList = await data.json();

    return normalizeParticipantList(participantList.results);
  } catch (err) {
    alert(`Something went wrong while getting participant list. ${err}`);
  }
};

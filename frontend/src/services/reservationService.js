import api from "./api";

export const createReservation = async (reservationData) => {
  const response = await api.post("/reservations", reservationData);

  return response.data;
};
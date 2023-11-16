import { client } from '../utils/fetchClient';
import { Place } from '../types/Place';

export const getPlaces = () => {
  return client.get<Place[]>('/places');
};

// export const getUser = (id: number) => {
//   return client.get<User[]>(`/users/${id}`);
// };

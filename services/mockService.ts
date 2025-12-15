import { ReservationData } from '../types';

export const submitReservation = async (data: ReservationData): Promise<{ success: boolean; confirmationCode: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        confirmationCode: `MG-${Math.floor(Math.random() * 10000)}`
      });
    }, 1500); // Simulate network delay
  });
};

export const submitContactForm = async (data: any): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

import axios from 'axios';

import { TApiResponse } from '@/types';

export const postReaction = async ({
  slug,
 
  contentTitle,
  
  count,
  section,
}: {
  slug: string;
  
  contentTitle: string;
  
  count: number;
  section: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/reactions/${slug}`, {
    
      contentTitle,
     
      count,
      section,
    });
  } catch (err) {
    //
  }
};

export const postShare = async ({
  slug,

  contentTitle,

}: {
  slug: string;
  
  contentTitle: string;
  
}) => {
  try {
    await axios.post<TApiResponse>(`/api/shares/${slug}`, {
      
      contentTitle,
    
    });
  } catch (err) {
    //
  }
};

export const postView = async ({
  slug,
 
  contentTitle,
}: {
  slug: string;
  
  contentTitle: string;
}) => {
  try {
    await axios.post<TApiResponse>(`/api/views/${slug}`, {
     
      contentTitle,
    });
  } catch (err) {
    //
  }
};

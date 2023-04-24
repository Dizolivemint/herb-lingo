import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/supabaseClient';
import { PostgresError } from '@/lib/postgres.types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    // TODO: implement role-based access control
    // TODO: implement filtering
    // TODO: implement pagination
    const { data, error } = await supabase.from('quizzes').select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    const e = error as PostgresError;
    res.status(500).json(e);
  }
};

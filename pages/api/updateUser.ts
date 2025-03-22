import type { NextApiRequest, NextApiResponse } from 'next';

interface UpdateUserRequest {
  current: {
    id: number;
  };
  newUserData: {
    name: string;
    email: string;
    image: string;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { current, newUserData }: UpdateUserRequest = req.body;

    let updatedUser: any;

    res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

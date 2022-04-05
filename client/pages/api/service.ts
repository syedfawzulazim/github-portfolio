import type { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data/data";

export default function service(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ services });
}

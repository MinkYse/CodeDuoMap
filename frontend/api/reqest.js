export default function helloWorldHandler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    res.send(`Hello World`);
  }
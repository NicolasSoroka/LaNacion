export default async function handler(req, res) {
  
  const response = await fetch("https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/");
  const data = await response.json();
  res.status(200).json(data);
}
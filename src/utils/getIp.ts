export const getIp = async (): Promise<string> => {
  // eslint-disable-next-line
  const ipData: { ip: string } = await (
    await fetch("https://api.ipify.org/?format=json")
  ).json();

  return ipData.ip;
};
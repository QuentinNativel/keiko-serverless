import { NFTEntity } from "libs/dynamodb-toolbox/nftEntity";

export const main = async (): Promise<any> => {
  const result = await NFTEntity.query('Nft');

  return result.Items ;
};

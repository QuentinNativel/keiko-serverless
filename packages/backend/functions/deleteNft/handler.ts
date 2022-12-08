import { NFTEntity } from "libs/dynamodb-toolbox/nftEntity";

interface PathParameter {
    pathParameters: {
        id :string
    }
}

export const main = async ({pathParameters} : PathParameter): Promise<void> => {
    console.log("Yeah! You have run your first lambda!")
    console.log(pathParameters)
    await NFTEntity.delete({
        id: pathParameters.id
    })
  };
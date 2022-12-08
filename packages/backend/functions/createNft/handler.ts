import crypto from 'crypto'
import { NFTEntity } from "libs/dynamodb-toolbox/nftEntity";


export const main = async (event: any): Promise<any> => {
    if ( process.env.NFT_TABLE_NAME == undefined) {
        throw new Error("Table name should be in the environment")
    }
    console.log("Yeah! You have triggered lambda create Nft!")
    console.log(event)
    const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);	

    const id = crypto.randomUUID()

    const item = {
        PK: 'Nft' ,
        id,
        positionX: randomIntFromInterval(5, 90),
        positionY: randomIntFromInterval(10, 90),
        imageIndex: Math.floor(Math.random() * 5),
        }
    


    
    await NFTEntity.put(item)

    return Promise.resolve(event)
  };
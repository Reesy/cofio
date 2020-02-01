import { Card } from "../../sharedInterfaces/Card";

export interface IMemoryService
{
    isCardReady(card: Card): boolean

    setNextReady(card: Card): Card;
}
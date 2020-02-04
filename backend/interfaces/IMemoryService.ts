import { Card } from "../../sharedInterfaces/Card";

export interface IMemoryService
{
    calculateCard(card: Card, correct: boolean): Card;
}